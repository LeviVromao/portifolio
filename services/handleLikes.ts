import { Schema, model, models } from "mongoose";

const likeSchema = new Schema({
    like: String,
    color: String

})

let Like = models.Like || model('Like', likeSchema)

const makeLikesWork = async ( like ) => {
    try {
        const likes = await Like.findOne()

        if( likes ) {
            const updatedLike = await Like.findByIdAndUpdate(likes._id, { $set: { like: like } }, { new: true });
            return likes._id;
        }

    } catch (error) {
        console.error(error)

    }
}

const getLikes = async () => {
    try {
        const likes = await Like.findOne().maxTimeMS(20000)
        const data = {
            color: likes.color,
            like: likes.like
        }

        return data;
        
    } catch (error) {
        console.error(error)
    }
}


export { makeLikesWork, getLikes }