import { ObjectId } from "mongodb"
import { database } from "../config/connect_mongo"
import { z } from "zod"

const WishlistSchema = z.object({
    userId: z.string().min(1),
    productId: z.string().min(1),
    createdAt: z.string(),
    updatedAt: z.string()
})

export type Wishlist = z.infer<typeof WishlistSchema>

class Model_Wishlist {
    static db_wishlist(){
        return database.collection("Wishlist")
    }

    static async addWishlist(payload : Wishlist){
        return this.db_wishlist().insertOne({
            userId: new ObjectId(payload.userId),
            productId: new ObjectId(payload.productId),
        }) as Wishlist
    }

    static async findListByid(id : string){
        return this.db_wishlist().findOne({productId : new ObjectId(id)}) as Wishlist
    }
}

export default Model_Wishlist