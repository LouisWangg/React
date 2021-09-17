import React from 'react'

const Validation = props => {
    let message = 'Text is too long';

    if (props.textLength <= 5) {
        message = 'Text is too short';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default Validation