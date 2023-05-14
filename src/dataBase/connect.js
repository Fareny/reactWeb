import mongoose from 'mongoose';

const uri = 'mongodb+srv://pdfareny:oT0B4iQMpC8Mo2kE@reactweb.kzt3sn6.mongodb.net/users_db?retryWrites=true&w=majority';

const connectDataBase = async () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));
};

export default connectDataBase;
