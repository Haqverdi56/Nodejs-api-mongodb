const {default: mongoose} = require('mongoose')
const { Schema } = mongoose

const productSchema = Schema({
    name: String,
    description: String,
    addDate: {
        type:Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean, default: false
    },
})

const product = mongoose.model('Product', productSchema)

module.exports = {
    product
}