import React from 'react';

function TableHead() {
    return ( 
        <thead>
            <tr>
                <th title="To remove the row, click on the trash icon.">Delete</th>
                <th title="To edit, click the plus icon and it will redirect you to a new page to fill out a form.">Edit</th>
                <th title="What is the baked good item you are adding to the inventory?">Item Name</th>
                <th title="When was the baked good item made?">Date Made</th>
                <th title="When does the baked good item expire?">Expiration</th>
                <th title="What is the quantity of the item to be added to the inventory?">Inventory Stock</th>
            </tr>
        </thead>
    );
}

export default TableHead;