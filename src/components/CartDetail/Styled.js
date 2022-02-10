import styled from "styled-components";

const Container = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin: 0rem;
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
  .buttonremove{
    text-decoration: none;
    -webkit-text-decoration:none;
    outline: none;
    background: transparent;
    border: transparent;
  }
  .totaltext {
    font-family: 'Thasadith',sans-serif;
    background-color: #d6d6d6;
    font-weight: 800;
    font-size: 30px;
  }

  .frame {
    width: 90%;
    margin: 40px auto;
    text-align: center;
    justify-content: center;
  }

  .custom-btn {
    width: 200px;
    height: 40px;
    padding: 0px 25px;
    border: 2px solid #000;
    font-family: 'Thasadith',sans-serif;
    font-weight: 700;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }
  .btn-15 {
    background: red;
    color: #fff;
    margin: 5% auto;
  }
  .btn-15:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: #e0e5ec;
    transition: all 0.3s ease;
  }
  .btn-15:hover {
    color: #000;
  }
  .btn-15:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  .btn-15:active {
    top: 2px;
  }

  .btn-16 {
    background: #000;
    color: #fff;
    z-index: 1;
  }
  .btn-16:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: #e0e5ec;
    transition: all 0.3s ease;
  }
  .btn-16:hover {
    color: #000;
  }
  .btn-16:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  .btn-16:active {
    top: 2px;
  }

margin-top: 8%;
height: 80%;
width: 100%;
display:flex;
flex-direction: column;
justify-content: right;
align-items: right;
border: 2px solid #000;
box-shadow: 6px 6px 5px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;




export { Container };
