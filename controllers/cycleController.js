import Cycle from '../models/cycle.js'

async function getAllLocations(req, res, next) {
    try {
        const locations = await Cycle.find()
        return res.status(200).json(locations)
    } catch (err) {
        next(err)
    }
}

async function createLocation(req, res, next){
    try {
        const newLocation = await Cycle.create(req.body);
        return res.status(201).send(newLocation)
    } catch (err) {
        next(err)
    }
}

export default {
    getAllLocations, createLocation
}