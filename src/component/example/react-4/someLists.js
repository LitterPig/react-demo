import React from 'react'
function LiList(props){
    return <li>{props.value}</li>
}
function someList(props){
    const lists = (
        <ul>
            {props.lists.map((item,index) =>
                <LiList key={index} value={item.name} />
            )}
        </ul>
    );
    const content = props.lists.map((item,index) =>
        <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
        </div>
    );
    return (
        <div>
            {lists}
            {content}
        </div>
    ) 
}

export default someList