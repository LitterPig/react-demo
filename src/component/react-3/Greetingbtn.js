import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

function Greetings(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
class Greetingbtn  extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { 
            isLoggedIn:false
        }
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        })
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn 
        return (
            <div>
                {
                    isLoggedIn ? (
                        <LogoutButton  onClick={this.handleLogoutClick} />
                    ):(
                        <LoginButton  onClick={this.handleLoginClick} /> 
                    ) 
                }
                <Greetings  isLoggedIn={isLoggedIn}  />
            </div>
        )
    }
}
export default Greetingbtn 