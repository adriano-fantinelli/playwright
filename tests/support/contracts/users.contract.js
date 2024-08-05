import Joi from 'joi'

const userSchema = Joi.object({
    "createdAt": Joi.date().required(),
    "firstName": Joi.string().required(),
    "id": Joi.string().required(),
    "lastName": Joi.string().required(),
    "roles": Joi.array().items(Joi.string().required()),
    "updatedAt": Joi.date().required(),
    "username": Joi.string().required()
})

export default userSchema