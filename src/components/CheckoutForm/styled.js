import styled from "styled-components";

const Container = styled.div`
max-width: 1200px;
margin: 50px auto;
height: 100%;

/* form */
.contact {
  font-family: 'Thasadith',sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: 20px;
  padding: 0;
}

#my-form {
  height: 100%;
  display:flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  
  
}

.error {
  color:#e50707;
  text-align:left;
  margin: 5px;
}

.field {
  font-family: 'Thasadith',sans-serif;
  font-weight: 400px;
  color: black;
  padding: 10px;
  margin: 20px;
}




/* button*/

.frame {
  width: 90%;
  text-align: center;
  justify-content: center;
}


button {
  margin: 20px;
  outline: none;
}
.custom-btn {
  width: 130px;
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