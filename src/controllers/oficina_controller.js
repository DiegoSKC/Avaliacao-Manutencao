import Oficina from "../models/oficina_model.js"

export const store = async (req, res) => {
    try {
        const content = await Oficina.create(req.body);
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Oficina.find().exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await Oficina.findById(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const content = await Oficina.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const destroy = async (req, res) => {
    try {
        const content = await Oficina.findByIdAndDelete(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}