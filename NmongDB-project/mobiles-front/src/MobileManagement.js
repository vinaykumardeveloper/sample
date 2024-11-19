// src/MobileManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './MobileManagement.css';


const apiBaseUrl = "http://localhost:5004"; // Your backend URL

const MobileManagement = () => {
    const [mobiles, setMobiles] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [storage, setStorage] = useState('');
    const [showMobiles,setShowMobiles] = useState(false)
    const [mdata,setMData]=useState([])

    useEffect(() => {
        getAllMobiles();
    }, [])

    const getAllMobiles = async () => {
        try {
            const response = await axios.get(`${apiBaseUrl}/mobiles`);
            setMobiles(response.data);
        } catch (error) {
            alert("Failed to retrieve mobiles");
        }
    };

    const addMobile = async (e) => {
       
        e.preventDefault();
        try {
            await axios.post(`${apiBaseUrl}/mobiles`, { name, price, storage });
            alert("Mobile added successfully!");
            setName('');
            setPrice('');
            setStorage('');
            getAllMobiles(); // Refresh mobile list
        } catch (error) {
            alert("Failed to add mobile");
        }
    };

    const deleteMobile = async (_id) => {
        try {
            await axios.delete(`${apiBaseUrl}/mobiles`, { data: { _id } });
            alert("Mobile deleted successfully!");
            getAllMobiles(); // Refresh mobile list
        } catch (error) {
            alert("Failed to delete mobile");
        }
    };

    const editMobile = async (_id) => {
        const updatedName = prompt("Enter new name:");
        const updatedPrice = prompt("Enter new price:");
        const updatedStorage = prompt("Enter new storage:");

        if (updatedName && updatedPrice && updatedStorage) {
            try {
                await axios.put(`${apiBaseUrl}/mobiles`, {
                    _id,
                    name: updatedName,
                    price: updatedPrice,
                    storage: updatedStorage
                });
                alert("Mobile updated successfully!");
                getAllMobiles(); // Refresh mobile list
            } catch (error) {
                alert("Failed to update mobile");
            }
        }
    };

    const handleFileUpload = (event) => {
        
        const file=event.target.files[0];
      Papa.parse(file,{
        header:true,
        complete:(results)=>{
            const modifiedData = results.data.slice(0, -1);
            setMData(modifiedData);
        }
      })
      
    
    }; 

    const onSubmittingFile= async(e)=>{
         e.preventDefault();
         console.log(mdata)
     try{
         await axios.post(`${apiBaseUrl}/mobiles/bulk`, mdata )
            alert("Mobile added successfully!");
            getAllMobiles();
            addMobile();
            // selllllllllllllllllllllllllllllll
        }
        catch{
          console.log(e)
        }
    }

    return(

        <div>
            <h1>Mobile Management</h1>
             {/* Upload CSV */}
             <h2>Upload</h2>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            <button onClick={onSubmittingFile}>Submit File</button>

            <h2>Add Mobile</h2>
            <form onSubmit={addMobile}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Storage"
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    required
                />
                <button type="submit">Add Mobile</button>
            </form>

            <button onClick={() => setShowMobiles(!showMobiles)}>
                {showMobiles ? 'Hide Mobiles' : 'Show Mobiles'}
            </button>

            {showMobiles && 
            <><h2>Mobiles List</h2>
            <div id="mobileList" style={{ display: mobiles.length ? 'block' : 'none' }}>
                {mobiles.map((mobile) => (
                    <div key={mobile._id}>
                        {/* <strong>ID:</strong> {mobile._id}, */}
                        <strong>Name:</strong> {mobile.name},
                        <strong>Price:</strong> {mobile.price},
                        <strong>Storage:</strong> {mobile.storage}
                        <button onClick={() => editMobile(mobile._id)}>Edit</button>
                        <button onClick={() => deleteMobile(mobile._id)}>Delete</button>
                    </div>
                ))}
            </div></>}
        </div>)
}

export default MobileManagement;
