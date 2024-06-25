// Models for the Baked Goods Inventory Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection to the Baked Goods database collection failed.' });
    } else  {
        console.log('Success: Connection to the Baked Goods database collection has been successful.');
    }
});

// SCHEMA: Define the collection's schema.
const bakedGoodSchema = mongoose.Schema({
	item:    { type: String, required: true },
    dateMade: { type: Date, required: true },
	expiration:     { type: Date, required: true },
	inventoryStock: { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "bakedGoods".
const bakedGoods = mongoose.model('BakedGoods', bakedGoodSchema);


// CREATE model *****************************************
const createBakedGood = async (item, dateMade, expiration, inventoryStock) => {
    const bakedGood = new bakedGoods({ 
        item: item, 
        dateMade: dateMade,
        expiration: expiration, 
        inventoryStock: inventoryStock
    });
    return bakedGood.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveBakedGoods = async () => {
    const query = bakedGoods.find();
    return query.exec();
}

// // RETRIEVE by ID
const retrieveBakedGoodByID = async (_id) => {
    const query = bakedGoods.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteBakedGoodById = async (_id) => {
    const result = await bakedGoods.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateBakedGood = async (_id, item, dateMade, expiration, inventoryStock) => {
    const result = await bakedGoods.replaceOne({_id: _id }, {
        item: item,
        dateMade: dateMade,
        expiration: expiration,
        inventoryStock: inventoryStock
    });
    return { 
        _id: _id, 
        item: item, 
        dateMade: dateMade,
        expiration: expiration, 
        inventoryStock: inventoryStock
    }
}

// EXPORT the variables for use in the controller file.
export { createBakedGood, retrieveBakedGoods, retrieveBakedGoodByID, updateBakedGood, deleteBakedGoodById }
