import mongoose from 'mongoose';

export function connectDb (){
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    return mongoose.connect(
        'mongodb://mongo:27017/cycle-microservice',
        opts
    );
}