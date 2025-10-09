import mongoose from "mongoose";

const joinSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Field is mandatory"]
    },
    email:{
        type:String,
        required:[true,"Field is mandatory"]
    },
    countryCode:{
        type:String,
        required:[true,"Field is mandatory"]
    },
    phone:{
        type:String,
        required:[true,"Field is mandatory"]
    },
    hearAboutUs:{
        type:String,
    },
    division:{
        type:String,
    },
    opportunity:{
        type:String,
    },
    filepath:{
        type:String,
    }
})

const Join = mongoose.models.Join || mongoose.model("Join",joinSchema)

export default Join