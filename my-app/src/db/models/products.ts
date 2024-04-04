import { database } from "../config/connect_mongo"

export type Product = {
    _id: string,
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
        let option = {}
        // kondsi jika query ada, option di tambah regex
        return this.db_products().find(option).toArray() as Product[]
    }

    static findOne(slug: string){
        return this.db_products().findOne({ slug }) as Product
    }
}

export default Model_Products