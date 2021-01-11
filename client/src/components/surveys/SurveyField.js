// Contains logic to render a single label & text input
import React from 'react'

export default ({ input, label, meta: {error, touched} }) => {
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
            <small className="red-text" style={{ marginBottom: '20px'}}>
                {touched && error }
            </small>
        </div>
    )
}
