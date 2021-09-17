import React from 'react'
import './User.css'

const UserOutput = props => {
    return (
        <div>
            <p className="paragraphOne">
                Nice to meet you, my name is {props.name}!
            </p>
            <p className="paragraphTwo">
                Welcome aboard~
            </p>
        </div>
    )
}

export default UserOutput
