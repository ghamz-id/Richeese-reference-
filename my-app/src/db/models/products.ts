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

export type pagination = {
    result: [Product],
    total: number,
    totalPages: number,
    currentPage: number
}

class Model_Products {
    static db_products(){
        return database.collection("Products")
    }

    static async findAll(search : string, page : string){
        // --------------- SEARCH ---------------
        if (search) {
            let agg = [{
                $match:
                  {
                    name: {$regex: search},
                  },
            }]
            const cursor = this.db_products().aggregate(agg)
            return await cursor.toArray() as Product[]
        }

        // --------------- PAGINATION ---------------
        let res = Number(page)
        let perPage = 8
        let pageNumber = res
        let skip = (pageNumber - 1) * perPage
        const agg = [
            {
                '$group': {
                    '_id': null,
                    'total': {
                        '$sum': 1
                    },
                    'results': {
                        '$push': '$$ROOT'
                    }
                }
            }, {
                '$addFields': {
                    'totalPages': {
                        '$ceil': {
                            '$divide': [
                                '$total', perPage
                            ]
                        }
                    },
                    'currentPage': 1
                }
            }, {
                '$project': {
                    'total': 1,
                    'totalPages': 1,
                    'currentPage': 1,
                    'results': {
                        '$slice': [
                            '$results', skip, perPage
                        ]
                    }
                }
            }
        ];
        const cursor = this.db_products().aggregate(agg)
        return await cursor.toArray() as pagination
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