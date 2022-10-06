import React from 'react'
import { useState } from "react";
import data from './data.json'
import Buttons from './Buttons';
import Options from './Options'
import './DropDownMenu.css'
// import SelectComponent from './SelectComponent';
function DropDownMenu({idno}) {
    const [state, setState] = useState(true);
    const [stateObj, setStateObj] = useState([...data]);
    // updtae state array Obj regarding current selected number
    const updateObject=(value,id,index)=>{
        setState(false)
        let arr= stateObj.map((element,i)=> {
            if(i==index){
            element.seletedState=parseInt(value)
            return element
            }
            else{
                return element
            }
        })
        arr.forEach((element,i)=>{
            if(i!=index&&element.seletedState==value){
                arr[i].seletedState=""
            }
            if(!(Number.isInteger(element.seletedState))){
                setState(true)
             }
        })
         setStateObj(arr)
    }
//    fnction for button action
    function buttonClicked(){
        let displayArrayObj=[]
        let obj={playerName:"",selectedNumber:""}
        stateObj.forEach((element)=>{
            obj.playerName=element.playerName
            obj.selectedNumber=element.seletedState
            displayArrayObj.push(obj)
        })
        console.log(displayArrayObj,"displayArrayObj")
    }
  return (<div>
    {data.map((d,index)=>{
        return(<div key ={index}className="box" style={{
            position: "absolute",
            left: `${d.left}px`,
            top: `${d.top}px`,
          }}>
            <label >{d.playerName }:</label>
            <select id={d.playerName } name={d.playerName } onChange={(e)=>{updateObject(e.target.value,e.target.id,index,data)}} value={stateObj[index].seletedState} >
          <Options data={d}/>
    </select>
    </div>
        )
    })
    
}<Buttons state={state} buttonClicked={buttonClicked}/>
    </div>
  )
}

export default DropDownMenu