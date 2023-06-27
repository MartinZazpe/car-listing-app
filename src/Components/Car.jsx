import React from 'react'
import axios from 'axios'

export const Car = ({ dbList, id, name, color, price, dbCallback }) => {

    //testing axios headers
    const headers = {
        'Content-Type': 'text/plain'
    }


    async function removeItem() {
        if (dbList != null) {

            //find element that has been clicked;
            const currentItem = await dbList.filter(element => element.id == id)
            const currentItemId = currentItem[0].id

            //Api endpoint request to delete item from db.
            // `http://localhost:8000/delete/${currentItemId}`
            // `https://car-listing-server.vercel.app/delete/${currentItemId}`
            await axios.delete(`https://car-listing-server.vercel.app/delete/${currentItemId}`)
                .then(res => {
                    console.log(res)
                    //set the list state
                    dbCallback()
                })
                .catch(err => {
                    console.log('could not delete due to error: ' + err)
                })
        }
        else {
            console.log('dbList is null, item cannot be deleted')
        }
    }

    return (
        <>
            <div className="singleCarContainer">
                <div className="carContainer">
                    <div>Brand / model: <p className="carData">{name}</p></div>
                    <div>Color: <p className="carData">{color}</p></div>
                    <div>Price: <p className="carData">{price}$</p></div>
                </div>
                <div className="carDeleteContainer">
                    <button onClick={event => (event.preventDefault(), removeItem())}>Delete</button>
                </div>
            </div >
        </>
    )
}
