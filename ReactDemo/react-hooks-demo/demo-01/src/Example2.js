import React, { useState } from 'react';

function Example2(){
    const [name,setName] = useState("PP");
    const [sex,setSex] = useState("female");
    const [age,setAge] = useState(18);
    return(
        <div>
            <p>My name is : { name }</p>
            <p>sex: {sex} </p>
            <p>age: {age} </p>
        </div>
    )
}

export default Example2;