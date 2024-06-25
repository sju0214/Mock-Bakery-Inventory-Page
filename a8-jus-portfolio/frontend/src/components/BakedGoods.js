import React from 'react';

import { VscTrash } from 'react-icons/vsc';
import { CiEdit } from "react-icons/ci";


function BakedGoods({ bakedGood, onEdit, onDelete }) {
    return (
        <tr>
            <td>{bakedGood.item}</td>
            <td>{bakedGood.dateMade}</td>
            <td>{bakedGood.expiration}</td>
            <td>{bakedGood.inventoryStock}</td>

            <td><VscTrash onClick={() => onDelete(bakedGood._id)} /></td>
            <td><CiEdit onClick={() => onEdit(bakedGood)} /></td>
        </tr>
    );
}

export default BakedGoods;