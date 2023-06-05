import type { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

interface loginRequest extends NextApiRequest {
    body: {
        id: String;
        pw: String;
    };
}

export default async function CheckUser(req: loginRequest, res: NextApiResponse) {

    const db = await open({
        filename: '../user.db',
        driver: sqlite3.Database,
    }).then();

    console.log(req)

    const data = await db.all("select * from user wehre id = '" + req.body.id + "' and pw = '" + req.body.pw + "'")

    res.status(200).json({success: true});
}