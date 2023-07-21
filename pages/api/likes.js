import {createConnection } from "@/services/connectMongo";
import { makeLikesWork, getLikes } from "@/services/handleLikes";

export default async function handler(req, res) {
    

    if(req.method === 'POST') {
        await createConnection()
        const { like } = req.body;
        const id = await makeLikesWork(`${like}`)
        res.json({id})

    } else if(req.method === 'GET') { 
        await createConnection()
        const data = await getLikes()
        res.json(data);
    }
}