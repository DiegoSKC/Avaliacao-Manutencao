import {Schema, model } from "mongoose"

const oficinaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    specialties : {
        type: String,
        enum: ["CARROS", "MOTOS", "MOTORES", "BATERIAS", "CILINDROS", "E MAIS"],
        required: true
    },
    maintenances: {
      type: Schema.Types.ObjectId,
      ref: "Oficina",
      required: false
    }

})

const Oficina = model("Oficina", oficinaSchema);

export default Oficina;