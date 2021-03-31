import React from 'react'
import './Card.css'

const Card = props => {

    const style = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={style}>
            <div className="Title">{props.title}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}

export default Card;
