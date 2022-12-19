import mongoose from 'mongoose';

const cycleSchema = new mongoose.Schema({
    location: { type: String, required: true },
    noOfPlaces: Number,
    showers: Boolean,
    secureStorage: Boolean,
    lockers: Boolean,
})

export default mongoose.model('Cycle', cycleSchema);