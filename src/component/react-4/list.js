import React from 'react'
function ListItem(props){
    const liList = props.list
    const listItem = liList.map((items,index)=>
        <li key={index}>
            {items.name}
        </li>
    );
    return (
        <ul>{listItem}</ul>
    )
}
export default ListItem