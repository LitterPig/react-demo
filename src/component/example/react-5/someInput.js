import React from 'react'

class SomeInputs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isChecked:false,
            curNumber:1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
           [name]:value
        })
    }
    render(){
        return (
            <form>
                <label>选择:
                    <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange} />
                </label><br/>
                <label>随机数:
                    <input type="number" name="curNumber" value={this.state.curNumber} onChange={this.handleChange} />
                </label>
            </form>
        )
    }
}
export default SomeInputs