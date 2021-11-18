import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    max-width: 100%;
    height:100px;
    color: #1D1D1D;
    padding-right: 25%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px ;
    font-family: 'Thasadith', sans-serif;
    nav{
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                padding: 0 20px;
                list-style: none;
                a{
                    color:white;
                    text-decoration: none;
                
                }
                
            }
        }
        
    }
    .carticon {
        width: 20px;
    }

`

export { Container }