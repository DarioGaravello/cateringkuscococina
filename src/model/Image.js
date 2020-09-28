import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    imageURL: { type: String },
    public_id: { type: String }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Image', imageSchema);

