import React from 'react'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import TotalScore from './TotalScore'
import {Button } from '../styled/Button'
import { OutlineButton } from '../styled/Button'
import  Rules  from './Rules'

const GamePlay = () => {
  const[score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const[currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false)
  const generateRandomNumber =(min,max) =>{
    return Math.floor( Math.random()*(max-min) +min);
  }

  const roleDice=()=>{
    if(!selectedNumber) {
       setError("You have not selected any number")
      return;
    }
    
    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev) => randomNumber)

    if(selectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber)
    } else{
      setScore((prev) => prev-2)
    }
    setSelectedNumber(undefined)
    //selected number disappear
  }


  const resetScore=()=>{
    setScore(0)
  }
  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score}/>
          <NumberSelector
          setError={setError} error={error}
          setSelectedNumber={setSelectedNumber} 
          selectedNumber={selectedNumber}/>
        </div>
          <RoleDice roleDice={roleDice} currentDice={currentDice} setCurrentDice={setCurrentDice}/>
          <div className="btns">
            <Button onClick={resetScore}>Reset</Button>
            <OutlineButton
            onClick={()=> setShowRules(prev=>!prev)}>{
              showRules ? "Hide" : "Show"} Rules</OutlineButton>
          </div>
          {showRules && <Rules/>}
      </MainContainer>
    </>
  )
}

export default GamePlay

const MainContainer = styled.div`
  padding-top: 70px;

  .top_section{
    display:flex;
    justify-content:space-around;
    align-items: end;
  }
  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:10px;
    align-items:center;
  }
 
  
` 

