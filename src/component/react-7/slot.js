import React from 'react'

function Templates(props){
    return (
    <div className={'title title-' + props.color}>
       {props.children}
    </div>
    );
}
class SlotTemplate extends React.Component{
    render(){
        return (
            <Templates color="blue">
               <h1>标题</h1>
               <p>内容</p>
            </Templates>
        );
    }
}
export default SlotTemplate