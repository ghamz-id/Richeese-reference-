import { ObjectId } from "mongodb"
import { database } from "../config/connect_mongo"

export type Product = {
    _id: ObjectId,
    name: string,
    slug: string,
    description: string,
    excerpt: string,
    price: number,
    tags: string[],
    thumbnail: string,
    image: string[],
    createdAt: string,
    updatedAt: string
}

class Model_Products {
    static db_products(){
        return database.collection("Products")
    }

    static async findAll(){
        return await this.db_products().find().toArray() as Product[]
    }

    static async findOne(slug: string){
        return await this.db_products().findOne({ slug }) as Product
    }

    // for home
    static async findFavorite(){
        const agg = [
            {
              $limit: 4,
            },
        ]
        const cursor = this.db_products().aggregate(agg);
        return await cursor.toArray() as Product[]
    }
}

export default Model_Products