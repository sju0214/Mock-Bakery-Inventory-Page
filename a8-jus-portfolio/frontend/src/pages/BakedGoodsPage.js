import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import { FaBreadSlice } from "react-icons/fa6"
import { VscAdd} from "react-icons/vsc"

function BakedGoodsPage({ setBakedGood }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [bakedGoods, setBakedGoods] = useState([]);

    // RETRIEVE the entire list of baked goods
    const loadBakedGoods = async () => {
        const response = await fetch('/bakedGoods');
        const bakedGoods = await response.json();
        setBakedGoods(bakedGoods);
    } 
    

    // UPDATE a single baked good item
    const onEditBakedGood = async bakedGood => {
        setBakedGood(bakedGood);
        redirect("/update");
    }


    // DELETE a single baked good item  
    const onDeleteBakedGood = async _id => {
        const response = await fetch(`/bakedGoods/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/bakedGoods');
            const bakedGoods = await getResponse.json();
            setBakedGoods(bakedGoods);
        } else {
            console.error(`Deleting this baked good item has been unsuccessful. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the baked goods
    useEffect(() => {
        loadBakedGoods();
    }, []);

    // DISPLAY the baked goods
    return (
        <>
            <h2><i><FaBreadSlice /></i> Baked Goods</h2>
            <p>Update the inventory list by clicking on the add, delete, or edit features.</p>
            <Link to="/create"><i><VscAdd/></i>Add Baked Good Item</Link>
            <Table
                bakedGoods={bakedGoods} 
                onEdit={onEditBakedGood} 
                onDelete={onDeleteBakedGood} 
            />
        </>
    );
}

export default BakedGoodsPage;