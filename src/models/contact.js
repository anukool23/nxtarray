import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a value"],
    },
    email: { 
        type: String, 
        required: [true, "Please provide a value"], 
        },
    countryCode: {
        type:String, 
        required: [true, "Please provide a value"] },
    phone: {
        type: String,
        required: [true, "Please provide a value"] 
    },
    company: {
        type: String,
    },
    hearAboutUs:    {
        type: String,
    },
    division:   {
        type:String,
    },
    opportunity:{
        type:String
    },
    filepath:{
        type:String,
    }
    
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
