import fs from "fs"

export default async function handler(req, res) {
  if(req.method === "POST") {
    const musics = fs.readdirSync("./services/musics")
    res.status(200).json({musics})
  } else if(req.method === "GET"){
    console.log("Route dont exist")
    res.status(404).json({})
  }
}