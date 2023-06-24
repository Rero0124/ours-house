import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { User, Post } from '../src/types'
import { VerifyErrors } from 'jsonwebtoken';

declare module "express-session" {
    interface SessionData {
        user: User;
    }
}

const app: Express = express();
const port = 5000;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

let users:User[] = [];

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
        domain: 'localhost',
        path: '/',
        maxAge: 24 * 6 * 60 * 10000,
        sameSite: 'none',
        httpOnly: true,
        secure: true,
    },
}))
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
    res.send('Typescript + Node.js + Express Server');
});

app.post("/api/login", async (req: Request, res: Response) => {
    try {
		const body = req.body;
		if (body !== undefined) {
			const prisma = new PrismaClient();
			const user = await prisma.user.findFirst({
				where: {
					id: body.id,
				},
			});

			if (user?.pw !== undefined && (await bcrypt.compare(body.pw, user.pw))) {
				const id = user?.id || "";
				const name = user?.name || "";

                const token = jwt.sign({ id: id }, 'secretKey');

                users.push({id: id, name: name});
                console.log(users)
                // 토큰을 쿠키에 저장하거나 클라이언트에게 응답으로 보내줌
                res.cookie('token', token, { httpOnly: true });

				return res.status(200).json({ message: "login success" });
			} else {
				return res.status(200).json({ message: "login fail" });
			}
		} else {
			return res.status(400).json({ message: "verification failed" });
		}
    } catch (err) {
      	return res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/api/logout', async (req: Request, res: Response) => {
	try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: '토큰이 필요합니다' });
        }

        // 토큰 검증
        jwt.verify(token, 'secretKey', (err: VerifyErrors | null, decoded: any) => {
            if (err) { return res.status(401).json({ message: '토큰 인증 실패' }); }

            const userId = decoded.userId;

            // 해당 userId에 해당하는 유저 제거
            users = users.filter((user) => user.id !== userId);

            return res.status(200).json({ message: 'logout success' });
        });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
});

app.post('/api/register', async (req: Request, res: Response) => {
    try {
        const body = req.body;
        if (body !== undefined) {
            const prisma = new PrismaClient();
            const user = await prisma.user.findFirst({
                where: {
                    id: body.id,
                },
            });
            if (user) {
                return res.status(200).json({ message: 'already id' });
            } else {
                const newUser = await prisma.user.create({
                    data: {
                        id: body.id,
                        pw: body.pw,
                    },
                });
                if (newUser) {
                    // 세션에 사용자 정보 저장
                    req.session.user = {
                        id: newUser.id,
                        name: newUser.name || '',
                    };
                    return res.status(200).json({ message: 'register success' });
                } else {
                    return res.status(200).json({ message: 'register fail' });
                }
            }
        } else {
            return res.status(400).json({ message: 'verification failed' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/user', (req, res) => {
    const token = req.cookies.token;
  
    console.log(req.cookies)

    // 토큰 검증
    jwt.verify(token, 'secretKey', (err: VerifyErrors | null, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: '토큰 인증 실패' });
        }
    
        const userId = decoded.userId;
    
        // 해당 userId에 해당하는 유저 정보 반환
        const user = users.find((user) => user.id === userId);
        if (!user) {
            return res.status(404).json({ message: '사용자를 찾을 수 없습니다' });
        }
    
        return res.status(200).json(user);
    });
});

app.post('/api/posts', (req: Request, res: Response) => {
    const { title, content } = req.body;
  
    // 새로운 게시글 생성
    const id = uuidv4();

    const newPost = await prisma.post.create({
        data: {
            id: id,
            title: title,
            content: content,
        },
    });
  
    res.status(201).json({ message: '게시글이 작성되었습니다.', post: id });
});



app.listen(port, () => {
	console.log(`[server]: Server is running at <https://localhost>:${port}`);
});