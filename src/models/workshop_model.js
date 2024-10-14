import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    specialties: { type: [String], required: true },
    maintenances: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Maintenance' }] 
});

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;
