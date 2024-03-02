import fs from "fs"

export default async function handler(req, res) {
  if(req.method === "POST") {
    const musics = fs.readdirSync("./services/musics")
    res.json({musics})
  } else if(req.method === "GET"){
    res.status(404).json({})
    console.log("Route dont exist")
  }
}