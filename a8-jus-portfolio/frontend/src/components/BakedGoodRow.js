import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import { CiEdit } from "react-icons/ci";

function BakedGoodRow({ bakedGood, onDelete, onEdit}) {
  return (
    <tr>
        <td><i><VscTrash onClick={() => onDelete(bakedGood._id)} title="Delete"></VscTrash></i></td>
        <td><i><CiEdit onClick={() => onEdit(bakedGood._id)} title="Edit"></CiEdit></i></td>
        <td title="What is the baked good item you are adding to the inventory?">{bakedGood.item}</td>
        <td title="When was the baked good item made?">{bakedGood.dateMade.slice(0,10)}</td>
        <td title="When does the baked good item expire?">{bakedGood.expiration.slice(0,10)}</td>
        <td title="What is the quantity of the item to be added?">{bakedGood.inventoryStock}</td>
    </tr>
  );
}

export default BakedGoodRow;