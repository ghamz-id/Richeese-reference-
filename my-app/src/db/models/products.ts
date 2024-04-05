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

    static findAll(){
        return this.db_products().find().toArray() as Product[]
    }

    static findOne(slug: string){
        return this.db_products().findOne({ slug }) as Product
    }
}

export default Model_Products