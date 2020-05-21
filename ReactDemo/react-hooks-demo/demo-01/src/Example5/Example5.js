import React from 'react';
import ShowArea from './ShowArea'
import Button from './Button'
import {Color} from './Color'

function Example5(){
    return(
        <div>
            <Color>
                <ShowArea />
                <Button />
            </Color>
        </div>
    )
}

export default Example5;