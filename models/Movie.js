const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const MovieSchema =new Schema({ 
    
    title:{
        type:String,
        required: true,
        unique: true,
    },

    adult:{
        type:Boolean,
    },
    homepage:{
        type:String,
    },
    poster_path:{
        type:String,
    },
    genres:[{
        name:{type:String},
        id:{type:Number}
    }
    ],
    overview:{
        type:String,
    },

    id:{
        type:String,
        required: true,
    },

    vote_average:{
        type:Number,
    },
    vote_count:{
        type:Number,
    }
});

module.exports = mongoose.model("Movie",MovieSchema);