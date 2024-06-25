import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { FaBreadSlice } from "react-icons/fa6"

export const EditBakedGoodPageForm = ({ bakedGoodToEdit }) => {

    const [item, setItem] = useState(bakedGoodToEdit.item);
    const [dateMade, setDateMade] = useState(bakedGoodToEdit.dateMade);
    const [expiration, setExpiration] = useState(bakedGoodToEdit.expiration);
    const [inventoryStock, setInventoryStock] = useState(bakedGoodToEdit.inventoryStock);
    
    const redirect = useNavigate();

    const editBakedGood = async () => {
        const response = await fetch(`/bakedGoods/${bakedGoodToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                item: item,
                dateMade: dateMade,
                expiration: expiration,
                inventoryStock: inventoryStock
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You have successfully edited this item and all changes have been saved.`);
        } else {
            const errMessage = await response.json();
            alert(`Editing this item has been unsuccessful. Please try again. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2><i><FaBreadSlice /></i> Edit a Baked Good Item</h2>
            <p>Edit an existing baked good item by filling out the form below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which baked good item are you updating?</legend>
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
                        placeholder="Inventory Stock Number"
                        value={inventoryStock}
                        onChange={e => setInventoryStock(e.target.value)} 
                        id="inventoryStock" />

                    <label for="submit">
                    <button
                        onClick={editBakedGood}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditBakedGoodPageForm;