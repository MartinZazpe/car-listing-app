import React from 'react'

import { Car } from './Car'
//we need to get from the db the car List

//for each car print out a div
// console.log(dbList)

export const CarList = ({ dbList, dbCallback }) => {
    if (dbList != null && dbList.length > 1) {
        return (
            <>
                <div className="carListContainerArea">
                    <div className="carListContainer">
                        {
                            dbList.map(ele => {
                                return (
                                    <Car dbList={dbList} id={ele.id} name={ele.name} color={ele.color} price={ele.price} dbCallback={dbCallback} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
