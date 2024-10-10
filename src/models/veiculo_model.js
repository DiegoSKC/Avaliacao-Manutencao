import {Schema, model } from "mongoose"

const veiculoSchema = new Schema({
    placa: {
        type: String,
        required: true,
        unique: true,
        maxLength: 7,
        minLength: 7
    },
    modelo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    dono: {
        type: String,
        required: true
    },
    manutencoes: {
      type: Schema.Types.ObjectId,
      ref: "Oficina",
      required: true
    }
})

const Veiculo = model("Veiculo", veiculoSchema);

export default Veiculo;