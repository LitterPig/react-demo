import React,{Component} from 'react'

class TodoItem extends Component {
    render(){
        return (
            <li>
                {this.props.values}
                <button type="button" onClick={this.props.onClick}>delete</button>
            </li>
        )
    }
}
export default TodoItem