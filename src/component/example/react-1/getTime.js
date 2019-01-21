import React from 'react'

class GetTime extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            dates: new Date(),
            name:'Hello world!'
        }
    }
    tick(){
        this.setState({
            dates:new Date()
        })
    }
    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }
    componentDidMount(){
        this.timeID = setInterval(
            ()=>{
                this.tick()
            },1000)
    }
    componentWillMount(){
        clearInterval(this.timeID)
    }
    render(){
        return (
            <div>
                <h2>The time is {this.state.dates.toLocaleTimeString()}</h2>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        )
    }
}
export default GetTime