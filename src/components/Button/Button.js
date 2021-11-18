import React from 'react'
import { Container } from './styled'

const Button = ({ handleClick, bkg }) => {
    return (
        <Container
            bkgDarkMode={bkg}
            onClick={handleClick}
        >
            CLICK ME
        </Container>
    )
}

export default Button
