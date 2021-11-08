import BasicButtons from '../../component/button'
import { useSelector, useDispatch } from "react-redux"
import { React, useState } from 'react'
import CustomizedSwitches from '../../component/darkmood'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobleStyle } from '../../config/Theme.js'
import './css/style.css'


const StyledApp = styled.div`
color : ${(props) => props.theme.fontColor};
`

function Home() {
    const [theme, setTheme] = useState("dark")
    const [bgcolour, setbgcolour] = useState("light")
    let toggleClick = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
        bgcolour === "dark" ? setbgcolour("light") : setbgcolour("dark")
    }

    const store = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <StyledApp className="main_div">
                <GlobleStyle />
                <CustomizedSwitches onClick={() => toggleClick()} />
                <h1>COUNTER</h1>
                <h1>{store.count}</h1>
                <div className="btOn">
                    <BasicButtons onClick={() => dispatch({ type: "increment" })} title={<strong>+</strong>} />
                    <BasicButtons onClick={() => dispatch({ type: "decrement" })} title={<strong>-</strong>} />
                </div>
            </StyledApp>
        </ThemeProvider>
    )
}

export default Home;