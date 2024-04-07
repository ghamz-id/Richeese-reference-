import { ObjectId } from "mongodb"
import { database } from "../config/connect_mongo"
import { z } from "zod"
import { Product } from "./products"

const WishlistSchema = z.object({
    userId: z.string().min(1),
    productId: z.string().min(1),
    createdAt: z.string(),
    updatedAt: z.string()
})

export type Wishlist = {
    _id: ObjectId,
    userId: string,
    productId: string,
    createdAt: string,
    updatedAt: string
    productDetail: [Product]
}

class Model_Wishlist {
    static db_wishlist() {
        return database.collection("Wishlist")
    }

    static async addWishlist(payload: Wishlist) {
        return this.db_wishlist().insertOne({
            ...payload,
            userId: new ObjectId(payload.userId),
            productId: new ObjectId(payload.productId),
        }) as Wishlist
    }

    static async userWishlist(userId: string) {
        const agg = [
            {
                $match:
                {
                    userId: new ObjectId(userId),
                },
            },
            {
                $lookup:
                {
                    from: "Products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productDetail",
                },
            },
        ]
        const cursor = this.db_wishlist().aggregate(agg)
        return cursor.toArray()
    }

    static async findListByid(id: string) {
        return this.db_wishlist().findOne({ productId: new ObjectId(id) }) as Wishlist[]
    }

    static async deleteWishlist(id: string) {
        return this.db_wishlist().deleteOne({ _id: new ObjectId(id) })
    }
}

export default Model_Wishlist