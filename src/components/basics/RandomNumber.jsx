import React from 'react';

export default (props) => {

    const {min, max} = props;
    const [a, b] = [1,2]; //pega a primeira posição
    console.log(a,b);

    const number = min + Math.floor((max - min) * Math.random());

    return (
        <div>
            <h2>Random Number:</h2>
            <p>{number}</p>
        </div>
    )
}
