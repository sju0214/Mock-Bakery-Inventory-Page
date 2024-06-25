import React from 'react';
import BakedGoods from './BakedGoods';

function BakedGoodList({ bakedGoods, onDelete, onEdit }) {
    return (
        <table id="bakedGoods">
            <caption>Add and Edit Baked Goods</caption>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Date Made</th>
                    <th>Expiration Date</th>
                    <th>Inventory Stock</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {bakedGoods.map((bakedGood, i) => 
                    <BakedGoods
                        bakedGood={bakedGood} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default BakedGoodList;
