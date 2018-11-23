import React from 'react'
class SetForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.value)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default SetForm
