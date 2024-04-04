import { ObjectId } from "mongodb"
import { database } from "../config/connect_mongo"

export type User = {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
}

class Model_User {
    static db_users(){
        return database.collection("Users")
    }

    static async Register(payload : User){
        return await this.db_users().insertOne(payload)
    }

    // validasi
    static async findByUser(username : string){
        return await this.db_users().findOne({username})
    }
    
    static async findByEmail(email : string){
        return await this.db_users().findOne({email})
    }
}

export default Model_User
