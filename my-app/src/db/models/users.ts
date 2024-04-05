import { database } from "../config/connect_mongo"
import { hashPassword } from "../helpers/bcrypt";
import {z} from "zod";

// validasi
const userSchema = z.object({
    name: z.string().min(1),
    username: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(5),
});

export type User = z.infer<typeof userSchema>

class Model_User {
    static db_users(){
        return database.collection("Users")
    }

    static async register(payload : User){
        const isValid = userSchema.parse(payload)
        return await this.db_users().insertOne({...isValid, password: hashPassword(isValid.password)})
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
