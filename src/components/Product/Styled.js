import styled from "styled-components";

const Container = styled.div`
max-width: 1200px;
margin: 50px auto;


.textodesc {
  margin: 30px;
  font-size: 15px;
  font-family: 'Thasadith', sans-serif;
  font-weight: 600;
  color:black;
  text-align: left;
}

.textoprecio {
  font-size: 40px;
  font-family: 'Thasadith', sans-serif;
  font-weight: 1000;
  color:black;
}


.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
  justify-content: center;
}


button {
  margin: 20px;
  outline: none;
}
.custom-btn {
  width: 30%;
  height: 100%;
  padding: 5px 0px;
  border: 2px solid #000;
  font-family: 'Thasadith',sans-serif;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
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

`

export { Container }