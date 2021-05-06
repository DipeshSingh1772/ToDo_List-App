import React from 'react'

function Delete(props) {
    return(
        <div>
                <button onClick= {() => {
                    props.onSelect(props.id)
                }} >x</button>
                {props.text}
                <br/><br/>
        </div>
    )
}

export default Delete