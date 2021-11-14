var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var rolesValidos = [
    'STUDENT_ROLE', //cliente
    'TEACHER_ROLE', //empleado
    'ADMIN_ROLE' //admin o encargado
]

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    dir: String,
    dir_num: Number,
    role: { type: String, required: true, enum: rolesValidos },
    avatar: { type: String, default: 'default.png'},
    active: { type: Boolean, default: true }
})

                                // transactions
module.exports = mongoose.model('User', UserSchema);