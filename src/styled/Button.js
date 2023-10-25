import React from 'react'
import  styled  from 'styled-components'


 

export const Button = styled.button`
    
    
    align-items: center;
    padding: 10px 18px;
    
   
    min-width :220px;
    height : 44px ;
    border: none;
    color: white;
    background: #000000;
    font-size: 16px;
    border: 1px solid transparent;
    transition: .5s ease;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: .5s ease;
        
    }`

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover {
  background-color: black;
  border: 1px solid transparent;
  color: white;
}
`;
    