const React = require('react')
import Wrapper from './styled-components/style'
import Box from './styled-components/style'



function Def ({title, children}) {
    return (

        <div>
            <Wrapper>
                {title}
            </Wrapper>
            <br></br>
            <br></br>
            <Box>
                {children}
            </Box>

        </div>
    )
}

module.exports = Def

