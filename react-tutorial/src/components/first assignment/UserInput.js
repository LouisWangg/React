import React from 'react'

const UserInput = props => {
    const styling = {
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'azure',
        margin: '12px',
        padding : '12px',
        border: '4px solid red',
        backgroundColor: 'black',
        textAlign: 'center'
    }

    return (
        <div>
            <input 
             type='text' 
             onChange={props.changed} 
             style={styling} 
             value={props.currentName} />
        </div>
    )
}

export default UserInput
