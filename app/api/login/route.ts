import type { NextApiRequest, NextApiResponse  } from 'next';
import { PrismaClient } from '@prisma/client';


export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;
        if(body) {
            const prisma = new PrismaClient();
            const user = await prisma.user.findFirst({
                where: {
                    id: body.id,
                    pw: body.pw,
                }
            })
            prisma.$disconnect();

            if(user) {
                return res.status(200).json({mssage: 'login success'});
            } else {
                return res.status(200).json({mssage: 'login fail'});
            }
        } else {
            return res.status(400).json({ message: 'verification failed' })
        }
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}