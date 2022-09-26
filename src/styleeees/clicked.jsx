import styled from "styled-components";

styled

 const Header = styled.div`
  background-color: beige;
  height: 100vh;
  max-width: 100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const Headerblock = styled.div`
display:flex;
flex-direction:column;
`;

  const Title = styled.h2`
  color:#333;
  font-size:22px;
  font-wheight:500px;
  `;
  const Btnblock = styled.div`
  display:flex;
  flex-direction:column;
  gap:25px;
  `;
  const Btntitle = styled.h1`
  
  `;
  const Btnbutton = styled.button`
  padding:10px 20px;
  border:0px;
  border-radius:5px;
  color:white;
  background-color:${props=>props.value? "blue":"red"};
  cursor:pointer;
  :hover{
    transform:scale(1.1);
    opacity:0.8;
  }
  `;
 const Btnflex = styled.div`
 display:flex;
 gap:20px;
 with:100%;
 `;
 
export {Header,Title,Btnblock ,Btntitle,Btnbutton,Btnflex,Headerblock } 