// import { User } from "@/model/user";
// import clientPromise from "@/utill/database";
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//     console.log('te', req.method);

//     if (req.method === 'POST') {
//         const client = await clientPromise;
//         const db = client.db("coffee");
//         const result = await db.collection<User>("user_cred").insertOne(req.body)

//         return res.status(200).redirect(302, '/list')

//     } else {
//         return res.status(400).json('처리실패')
//     }
// }