const mongoose = require('mongoose');
const connectMongoDB = async () => {
   try {
      const connectionString = process.env.MONGODB_URI
      await mongoose.connect(connectionString, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         retryWrites: true,

      });

      console.log(' Kết nối tới MongoDB thành công!');
   } catch (error) {
      console.error('Lỗi kết nối MongoDB:', error.message);
      process.exit(1);
   }
};

module.exports = connectMongoDB;
