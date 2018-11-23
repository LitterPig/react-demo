import React from 'react'
function ListItem(props){
    return <li>{props.value}</li>
}
function Lists(props){
    const liList = props.list
    const listItem = liList.map((items,index)=>
        <ListItem key={index} value={items.name} />
    );
    return (
        <ul>{listItem}</ul>
    )
}
export default Lists 