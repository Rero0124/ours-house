import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

type User = {
    userId: string;
    userName: string;
}

declare module "express-session" {
    interface SessionData {
        user: User;
    }
}

const app: Express = express();
const port = 5000;
const session = require('express-session');
const cors = require('cors');

app.use(cors({
    origin: true,
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

app.get('/', (req: Request, res: Response) => {
	res.send('Typescript + Node.js + Express Server');
});

app.post('/api/login', async (req: Request, res: Response) => {
	try {
        const body = req.body;
        if(body !== undefined) {
            const prisma = new PrismaClient();
            const user = await prisma.user.findFirst({
                where: {
                    id: body.id,
                }
            });
            if(user?.pw !== undefined && await bcrypt.compare(body.pw, user.pw)) {
                const id = user?.id || '';
                const name = user?.name || id;
                if(req.session.user !== undefined) {
                    req.session.user.userId = id;
                    req.session.user.userName = name;
                } else {
                    req.session.user = {
                        userId: id,
                        userName: name,
                    };
                } 
                return res.status(200).json({ mssage: 'login success' });
            } else {
                return res.status(200).json({ mssage: 'login fail' });
            }
        } else {
            return res.status(400).json({ message: 'verification failed' })
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
});

app.post('/api/logout', async (req: Request, res: Response) => {
	try {
        if(req.session.user !== undefined) {
            if(req.session.user.userId !== undefined) {
                req.session.user.userId = '';
                req.session.user.userName = '';

                return res.status(200).json({ mssage: 'logout success' });
            } else {
                return res.status(200).json({ mssage: 'logout fail' });
            }        
        } else {
            return res.status(400).json({ message: 'verification failed' })
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
});

app.post('/api/register', async (req: Request, res: Response) => {
	try {
        const body = req.body;
        if(body != null) {
            const prisma = new PrismaClient();
            const user = await prisma.user.findFirst({
                where: {
                    id: body.id,
                }
            });
            if(user == null) {
                const newUser = await prisma.user.create({
                    data: {
                        id: body.id,
                        pw: body.pw,
                    }
                });
                if(newUser != null) {
                    return res.status(200).json({ mssage: 'register success' });
                } else {
                    return res.status(200).json({ mssage: 'register fail' });
                }
            } else {
                return res.status(200).json({ mssage: 'already id' });
            }
        } else {
            return res.status(400).json({ message: 'verification failed' })
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
});

app.listen(port, () => {
	console.log(`[server]: Server is running at <https://localhost>:${port}`);
});