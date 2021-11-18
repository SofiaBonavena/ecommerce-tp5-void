import styled from 'styled-components'

const Container = styled.div`

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
border: 2px solid #000;
box-shadow: 6px 6px 5px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);

img{ width: 100%; min-height: 200px;}

/* button*/

a {
    p {
  font-family: 'Thasadith',sans-serif;
  font-weight: 900;
  text-align: center;
  font-size: 18px;
  color: #676767;
}
.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
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

/* 16 */
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
}
`

export { Container }