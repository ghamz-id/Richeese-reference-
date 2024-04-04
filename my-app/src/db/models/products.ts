import { database } from "../config/connect_mongo"

type Product = {
    name: string,
    slug: string,
    description: string,
    excerpt: string,
    price: number,
    tags: string[],
    thumbnail: string,
    image: string[]
}

class Model_Products {
    static db_products(){
        return database.collection("Products")
    }

    static findAll(){
        return this.db_products().find().toArray() as Product[]
    }
}

export default Model_Products