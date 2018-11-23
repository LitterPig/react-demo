//人民币和美元的换算
import React from 'react'
import MoneyInput from './moneyInput'
function torRmb(dollar) {
  return dollar/0.1443
}

function toDollar(rmb) {
   return rmb*0.1443
}
function toConversion(money,convert){
    const input = parseFloat(money)
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class Conversion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            money:'',
            type:'Rmb'
        }
        this.handleRmb = this.handleRmb.bind(this)
        this.handleDollar = this.handleDollar.bind(this)

    }
    handleRmb(money){
        this.setState({
            type:'Rmb',
            money
        })
    }
    handleDollar(money){
        this.setState({
            type:'Dollar',
            money
        })
    }
    render(){
        const type = this.state.type
        const money = this.state.money
        const Rmb = type === 'Rmb' ? toConversion(money,toDollar) : money
        const Dollar = type === 'Dollar' ? toConversion(money,torRmb) : money

        return(
           <div>
               Rmb:<MoneyInput onConversionMoney={this.handleRmb} money={Dollar} type="Rmb"  />
               Dollar:<MoneyInput onConversionMoney={this.handleDollar} money={Rmb} type="Dollar"  />
           </div>
        )
    }

} 
export default Conversion