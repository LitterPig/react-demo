import React from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

function Greetings(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
class Greeting  extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            isToggleOn:true,
        }
    }
    handleClick = ()=>{
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }))
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <Greetings  isLoggedIn={this.state.isToggleOn}  />
            </div>
        )
    }
}
export default Greeting 