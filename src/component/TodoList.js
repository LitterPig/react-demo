import React,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            list:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleClick(){
        this.setState({
            list:[...this.state.list,this.state.value],
            value:''
        })
    }
    handleDel(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
           list:list
        })
    }
    getTodoList(){
        return (
            this.state.list.map((item,index) =>{
                return (
                    <TodoItem key={index} 
                              values={item} 
                              onClick={this.handleDel.bind(this,index)}
                    />
                )
            })
        )
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input onChange={this.handleChange} value = {this.state.value} />  
                    <button type="button" onClick={this.handleClick}>add</button>
                </div>
                <ul>{this.getTodoList()}</ul>
            </Fragment>
        );
    }
}
export default TodoList