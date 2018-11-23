import React from 'react'

function CurInfos(props){
    if(props.Rmb > 2000){
        return <h3>没钱买了哦。。。。</h3>
    }else{
        return <h3>尚可购买</h3>
    }
}
class Buy extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            curMoney:0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            curMoney:e.target.value
        })
    }
    render(){
        const money = this.state.curMoney;
        return(
           <div>
               <input type="text" name="curMoney" value={this.state.curMoney} onChange={this.handleChange} />
               <CurInfos Rmb={money} />
           </div>
        )
    }

} 
export default Buy