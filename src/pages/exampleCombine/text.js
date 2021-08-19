import React, { useContext } from 'react'
import {ColorContext} from './context'

function Texts() {
    const {color} = useContext(ColorContext)
    return(
        <div>
            <h3 style={{color: color}}>字体的颜色变罗</h3>
        </div>
    )
}
export default Texts