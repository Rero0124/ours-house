import type { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

interface loginReq extends NextApiRequest{
    body: {
        id: String;
        pw: String;
    };
}

export default async function CheckUser(req: loginReq, res: NextApiResponse) {

    const db = await open({
        filename: '../user.db',
        driver: sqlite3.Database,
    })

    console.log(req)
    console.log(res)

    const data = await db.all("select * from user wehre id = '" + req.body.id + "' and pw = '" + req.body.pw + "'")

    res.status(200).json({'succses': true});
}