import jwt, { JwtPayload } from 'jsonwebtoken'
const secret = process.env.SECRET as string
import * as jose from 'jose'

export const signToken = (payload : JwtPayload) => {
    return jwt.sign(payload, secret)
}

export const joseReadPayload = async<T> (token: string) => {
    const newSecret = new TextEncoder().encode(secret)
    const result = await jose.jwtVerify<T>(token, newSecret)
    return result.payload
}