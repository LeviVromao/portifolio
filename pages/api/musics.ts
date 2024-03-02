import { getAllMusics } from "../../services/handleMusics."
import fs from "fs"

export default async function handler(req, res) {
  if(req.method === "GET") {
    const musics = fs.readdirSync("./services/musics")
    res.json({musics})
  }
}