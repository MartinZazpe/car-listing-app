import React, { useState } from 'react'
import axios from 'axios'


export const Add = ({ dbCallback }) => {


    const [addResponse, setaddResponse] = useState()

    //to reset input fields
    const [nameState, setNameState] = useState()
    const [priceState, setPriceState] = useState()


    //CURRENTLY: NEED TO SEND BODY, RIGHT NOW ITS NULL
    const addCar = async (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const price = event.target.price.value
        const color = event.target.color.value

        //this one is for testing
        const data = await axios.post('http://localhost:3001/add', {
            form: {
                name: name,
                price: price,
                color: color
            }
        }).then((res) => {
            console.log('this is addRespone state ' + addResponse)
            console.log('this is res ' + res.data)
            if (res.data == 'success') {
                setaddResponse(undefined)
                setNameState('')
                setPriceState('')
            }
            else {
                setaddResponse(res.data)
            }
        })

        // const data = await axios.post('http://localhost:3001/add', { name: name, price: price, color: color })
        dbCallback()
    }

    return (
        <>
            <div id="addForm">
                <h4>Add new car</h4>
                <div id="errorsContainer">

                    {addResponse != undefined &&
                        addResponse.map((ele, i) => {
                            return <p className='addError'>{ele}</p>
                        })
                    }

                </div>
                <form action="/add" onSubmit={addCar}>
                    <label htmlFor="itemName"></label>
                    <input type="text" name="name" id="itemName" placeholder="Car name" value={nameState} onChange={e => setNameState(e.target.value)} />

                    <label htmlFor="priceName"></label>
                    <input type="number" name="price" id="priceName" placeholder="price" value={priceState} onChange={e => setPriceState(e.target.value)} />

                    <select name="color" id="colorName" >
                        <option selected disabled value="">Choose color</option>
                        <option value="red">red</option>
                        <option value="cyan">cyan</option>
                        <option value="blue">blue</option>
                        <option value="black">black</option>
                        <option value="silver">silver</option>
                        <option value="grey">grey</option>
                    </select>
                    <button type='submit'>Add car</button>
                </form>
            </div>
        </>
    )
}
