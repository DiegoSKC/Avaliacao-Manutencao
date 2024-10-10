import {Schema, model } from "mongoose"

const oficinaSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "",
        required: true
    },
    veichle: {
        type: String,
        required: true
    },
    services: {
        type: String,
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    TotalCost: {
        type: Number,
        required: true
    }

})

const Oficina = model("Oficina", oficinaSchema);

export default Oficina;