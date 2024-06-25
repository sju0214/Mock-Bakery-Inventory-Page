// Controllers for the Bakery Collection

import 'dotenv/config';
import express from 'express';
import * as bakedGoods from './bakedGoods-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/bakedGoods', (req,res) => { 
    bakedGoods.createBakedGood(
        req.body.item, 
        req.body.dateMade,
        req.body.expiration, 
        req.body.inventoryStock
        )
        .then(bakedGood => {
            console.log(`"${bakedGood.item}" was added to the inventory.`);
            res.status(201).json(bakedGood);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The baked good item could not be added to the inventory.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/bakedGoods', (req, res) => {
    bakedGoods.retrieveBakedGoods()
        .then(bakedGoods => { 
            if (bakedGoods !== null) {
                console.log(`All bakery items were retrieved from the inventory.`);
                res.json(bakedGoods);
            } else {
                res.status(404).json({ Error: 'The baked good item by that ID could not be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieval of inventory items was unsuccessful.' });
        });
});


// RETRIEVE by ID controller
app.get('/bakedGoods/:_id', (req, res) => {
    bakedGoods.retrieveBakedGoodByID(req.params._id)
    .then(bakedGood => { 
        if (bakedGood !== null) {
            console.log(`"${bakedGood.item}" was retrieved, based on its ID.`);
            res.json(bakedGood);
        } else {
            res.status(404).json({ Error: 'The baked good item by that ID could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Retrieval of inventory items was unsuccessful.' });
    });

});


// UPDATE controller ************************************
app.put('/bakedGoods/:_id', (req, res) => {
    bakedGoods.updateBakedGood(
        req.params._id, 
        req.body.item, 
        req.body.dateMade,
        req.body.expiration, 
        req.body.inventoryStock
    )
    .then(bakedGood => {
        console.log(`"${bakedGood.item}" was updated.`);
        res.json(bakedGood);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The baked good item could not be updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/bakedGoods/:_id', (req, res) => {
    bakedGoods.deleteBakedGoodById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} was deleted.`);
                res.status(200).send({ Success: 'Unique and specific success message.' });
            } else {
                res.status(404).json({ Error: 'The baked good item associated with the ID cannot be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'The baked good item associated with the ID could not be deleted.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});