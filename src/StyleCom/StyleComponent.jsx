import "./style.css";
import React from "react";
import {
  Btnblock,
  Header,
  Title,
  Btntitle,
  Btnbutton,
  Btnflex,
  Headerblock,
} from "../styleeees/clicked";
import { useState } from "react";

function StyleComponent() {
  const [courent,setCourent]=useState(0)
  return (
    <Header>
      <Headerblock> 
        <Title>Functional</Title>

        <Btnblock>
          <Btntitle>You clicked {courent} times</Btntitle>
          <Btnflex>
            <Btnbutton value={true} onClick={()=>{
              if(courent==Infinity){
                setCourent('Yuqole')
              }else{
              setCourent(courent+1)
              }
              }}>Click+</Btnbutton>
            <Btnbutton value={false} onClick={()=>{setCourent(courent-1)}}>Click-</Btnbutton>
            <Btnbutton style={{backgroundColor:"#333"}} onClick={()=>{setCourent(0)}}>Clean</Btnbutton>
          </Btnflex>
        </Btnblock>
      </Headerblock>
    </Header>
  );
}


export default StyleComponent;
