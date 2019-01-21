//人民币和美元的换算
import React from 'react'
class MoneyInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onConversionMoney(e.target.value)
    }
    render(){
        const money = this.props.money
        return(
           <div>
               <input type="text"  value={money} onChange={this.handleChange} />
           </div>
        )
    }

} 
export default MoneyInput