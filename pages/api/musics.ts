import { getAllMusics } from "../../services/handleMusics."

export default async function handler(req, res) {
  if(req.method === "POST") {
    const musics = getAllMusics()
    res.status(200).json({musics})
  } else if(req.method === "GET"){
    const musics = getAllMusics()
    res.status(200).json({musics})
  }
}