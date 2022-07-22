import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import categories from '../data'

const Header = ({ catagory, setCatagory, word, setWord, lightMode}) => {

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff"
            },
            type: lightMode ? "light" : "dark",
        },
    });

    const handleChange = (language) => {
        setCatagory(language)
        setWord("")
    }

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        label="Search a Word"
                        id="standard-basic" 
                        className="search"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        select
                        label="language"
                        className="select"
                        value={catagory}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                    {categories.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
