import React from 'react'
import Buttons from './button'
import {Color} from './context'
import Texts from './text'

function ExampleCombine() {
    return(
        <div>
            <Color>
                <Buttons></Buttons>
                <Texts></Texts>
            </Color>
        </div>
    )
}
export default ExampleCombine