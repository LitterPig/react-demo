import React from 'react'
import SetText from './react-1/setText'
import GetTime from './react-1/getTime'
import Greeting from './react-2/Greeting'
import Greetingbtn from './react-3/Greetingbtn'
import GetList from './react-4/list'
import Lists from './react-4/listItem'
import SomeList from './react-4/someLists'
import GetForm from './react-5/form'
import SomeInput from './react-5/someInput'
import Buy from './react-6/buy'
import Conversion from './react-6/conversion'
import SlotTemplate from './react-7/slot'
import SomeSlote from './react-7/someSlot'
const list = [
    {
        name:'a',
    },
    {
        name:'b',
    },
    {
        name:'c',
    }  
]
const lists = [{
    name:'a1',
},
{
    name:'b1',
},
{
    name:'c1',
}]
const someList = [{
    name:'11',
    title:'title1',
    content:'content1'
},{
    name:'22',
    title:'title2',
    content:'content2'
},{
    name:'33',
    title:'title3',
    content:'content3'
}]
function LeftTem(){
    return <h1>left</h1>
}
function RightTem(){
    return <h1>right</h1>
}
class App extends React.Component{
    render(){
        return (
            <div>
                <SetText name="React" />
                <SetText name="Vue" />
                <GetTime />
                <Greeting />
                <Greetingbtn />
                <GetList list={list} />
                <Lists list={lists} />
                <SomeList lists={someList} />
                <GetForm />
                <SomeInput />
                <Buy />
                <Conversion />
                <SlotTemplate />
                <SomeSlote left={ <LeftTem /> } right={ <RightTem /> } />
            </div>
        )
    }
}
export default App