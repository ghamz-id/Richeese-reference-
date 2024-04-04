const bcrypt = require('bcrypt');

export const hashPassword = (password : string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

export const comparePassword = (password: string, hash : string) => {
    return bcrypt.compareSync(password, hash)
}