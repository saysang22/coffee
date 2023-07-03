import DataType from "@/model/dataType";
import clientPromise from "@/utill/database";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log('te', req.method);

    if (req.method === 'GET') {
        const client = await clientPromise;
        const db = client.db("coffee");
        const result = await db.collection<DataType>("drink").find().toArray();

        return res.status(200).json('처리완료')

    } else {
        return res.status(400).json('처리실패')
    }
}