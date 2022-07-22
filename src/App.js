import { Container, Switch, withStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Definations from './components/Definations'
import Header from './components/Header'
import "./styles/app.scss"

const api = "https://api.dictionaryapi.dev/api/v2/entries"

const App = () => {
    const [word, setWord] = useState("")
    const [meanings, setMeanings] = useState([])
    const [catagory, setCatagory] = useState("en")
    const [lightMode, setlightMode] = useState(false)

    const DarkMode = withStyles({
        switchBase: {
          color: grey[300],
          '&$checked': {
            color: grey[500],
          },
          '&$checked + $track': {
            backgroundColor: grey[500],
          },
        },
        checked: {},
        track: {},
    })(Switch);

    const dictionaryAPI = async() => {
        try {
            const data = await axios.get(`${api}/${catagory}/${word}`)

            setMeanings(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(meanings);

    useEffect(() => {
        dictionaryAPI()
        // eslint-disable-next-line
    }, [word, catagory])

    return (
        <div 
            style={{
                backgroundColor: lightMode ? "#fff" : "#282c34",
                color: lightMode ? "#000" : "#fff",
                transition: "all .5s"
            }}
            className="app"
        >
            <Container maxWidth="md" className="container">
                <div className="switch">
                    <span>{lightMode ? "Dark" : "Light"} Mode</span>
                    <DarkMode 
                        checked={lightMode} 
                        onChange={() => setlightMode(!lightMode)} 
                    />
                </div>
                <Header 
                    catagory={catagory} 
                    setCatagory={setCatagory} 
                    word={word} 
                    setWord={setWord}
                    lightMode={lightMode}
                />
                {meanings && 
                <Definations 
                    word={word}
                    catagory={catagory} 
                    meanings={meanings}
                    lightMode={lightMode}
                />}
            </Container>
        </div>
    )
}

export default App
