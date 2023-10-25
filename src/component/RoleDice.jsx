import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
const RoleDice = ({currentDice,roleDice}) => {


  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src= {`/public/images/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    display:flex;
    align-items:center;
    margin-top:48px;
     flex-direction: column;
      
     .dice {
    cursor: pointer;
  }
  
  p {
    font-size: 24px;
  }
  
  
    
`;
