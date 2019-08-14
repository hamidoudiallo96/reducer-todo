import React from 'react'


export default function TodoList(props) {
    const {handleToggle,task} = props
    return (
        <div>
            {task.map(item =>(
                <div key = {item.id} onClick = {() => handleToggle(item.id)}>
                    <p>{item.item}</p>
                    
                </div>
            ))}
        </div>
    )
}
