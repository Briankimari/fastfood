import React from 'react'
import { useState } from 'react'
import Popular from '../components/ordernavs/Popular'
import Available from '../components/ordernavs/Available'
import New from '../components/ordernavs/New'
import Drinks from '../components/ordernavs/Drinks'
import Order from './Order'

const Navigation = () => {
   const [active,setActive]=useState(1)
   const displayData=()=>{
    switch (active) {
        case 1:
            return <Popular/>
        case 2:
            return <Available/>
        case 3:
            return <New/>
        case 4:
            return <Drinks/>
        default:
            return <Popular/>

    }
   }
  return (
    <div>
        <div>
                <Order active={active} setActive={setActive} />
        </div>
        <div>
            {displayData()}
        </div>
    </div>
  )
}

export default Navigation
