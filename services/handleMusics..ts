import fs from "fs"

export const getAllMusics =  () => {
    const musics = fs.readdirSync("./services/musics")
    return musics
}