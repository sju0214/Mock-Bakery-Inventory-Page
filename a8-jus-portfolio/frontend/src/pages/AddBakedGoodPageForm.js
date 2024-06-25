import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaBreadSlice } from "react-icons/fa6"

export const AddBakedGoodPageForm = () => {

    const [item, setItem] = useState('');
    const [dateMade, setDateMade] = useState('');
    const [expiration, setExpiration] = useState('');
    const [inventoryStock, setInventoryStock] = useState('');
    
    const redirect = useNavigate();

    const addBakedGood = async () => {
        const newBakedGood = { item, dateMade, expiration, inventoryStock };
        const response = await fetch('/bakedGoods', {
            method: 'post',
            body: JSON.stringify(newBakedGood),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You have successfully added a new baked good item!`);
            redirect("/");
        } else {
            alert(`Adding this item has been unsuccessful. Please try again. = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <h2><i><FaBreadSlice /></i> Add a Baked Good Item</h2>
        <article>
            <p>Add a new baked good item by filling out the form below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which baked good item are you adding?</legend>
                    <label for="item">Baked Good Item</label>
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={item}
                        onChange={e => setItem(e.target.value)} 
                        id="item" />
                    
                    <label for="dateMade">Date Made</label>
                    <input
                        type="text"
                        value={dateMade}
                        placeholder="YYYY-MM-DD"
                        onChange={e => setDateMade(e.target.value)} 
                        pattern="\d{4}\d{2}\d{2}"
                        id="dateMade" />

                    <label for="expiration">Expiration Date</label>
                    <input
                        type="text"
                        value={expiration}
                        placeholder="YYYY-MM-DD"
                        onChange={e => setExpiration(e.target.value)} 
                        pattern="\d{4}\d{2}\d{2}"
                        id="expiration" />

                    <label for="inventoryStock">Inventory Stock</label>
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={inventoryStock}
                        onChange={e => setInventoryStock(e.target.value)} 
                        id="inventoryStock" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addBakedGood}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddBakedGoodPageForm;