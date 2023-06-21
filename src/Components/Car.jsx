import React from 'react'
import axios from 'axios'

export const Car = ({ dbList, id, name, color, price, dbCallback }) => {



    async function removeItem() {
        if (dbList != null) {

            //find element that has been clicked;
            const currentItem = await dbList.filter(element => element.id == id)
            const currentItemId = currentItem[0].id

            //Api endpoint request to delete item from db.
            await axios.delete(`http://localhost:3001/delete/${currentItemId}`)
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
                    <div>Brand / model: {name}</div>
                    <div>Color: {color}</div>
                    <div>Price: {price}$</div>
                </div>
                <div className="carDeleteContainer">
                    <button onClick={event => (event.preventDefault(), removeItem())}>Delete</button>
                </div>
            </div >
        </>
    )
}
