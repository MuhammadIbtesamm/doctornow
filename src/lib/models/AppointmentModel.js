const { Type } = require("lucide-react");
const { default: mongoose } = require("mongoose");
const { Schema } = require("zod");





const appointmentSchema = new Schema({
    user : {type: mongoose.Types.ObjectId, ref: "Users"},
    request : {type: mongoose.Types.ObjectId, ref: "Requests"},
    date: Date
})