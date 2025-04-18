const mongoose = require('mongoose')

const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI,{
			dbName:"PlotTwist"
		});
		console.log(`MongoDB connected`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectMongoDB;
