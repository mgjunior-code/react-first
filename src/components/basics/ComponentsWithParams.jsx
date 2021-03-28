import React from 'react';

export default function ComponentsWithParams(params) {

    return (
        <div>
            <h2>Second Component</h2>
            <p>{params.title}</p>
            <p>{params.subtitle}</p>
        </div>
    )
}
