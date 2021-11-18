import styled from "styled-components";

const Container = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .carttitle {
    color:black;
    font-family: 'Thasadith',sans-serif;
    font-weight: 600;
    margin-top: 10px;
    font-size: 30px;
    padding: 0;
    text-align:center;
    justify-content: center;
  }

  /* .listtext {
    margin: 0;
    padding: 0;
    color:red;
    font-family: 'Thasadith',sans-serif;
    font-weight: 600;
    font-size: 20px;
  } */


  .totaltext {
    font-family: 'Thasadith',sans-serif;
    background-color: #d6d6d6;
    font-weight: 800;
    font-size: 30px;
    position: relative;
  top: 70%;
  transform: translateY(-100%);
  }

  button {
    margin-right: 10%;
    padding:0;
    padding: 0;
    border: none;
    background: none;
    justify-content: center;
  }

margin: 8%;
height: 80%;
width: 70%;
display:flex;
flex-direction: column;
justify-content: right;
align-items: right;
border: 2px solid #000;
box-shadow: 6px 6px 5px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;




export { Container };
