

import RegisterForm from './RegisterForm.jsx';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import { useState } from 'react';
import './index.css';
import { FaMoon } from 'react-icons/fa6';
import {BsFillSunFill} from 'react-icons/bs';


export const ThemeContext = createContext(null);

function App() {

 const [theme, setTheme] = useState('light');

  const toggleTheme = () => {setTheme(theme === 'light' ? 'dark' : 'light')};

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <div className='sunMoon'>
          <p>{theme === "dark" ?
          <FaMoon style={{
            color: "white",
            fontSize: "70px"
          }} /> : 
          <BsFillSunFill style={{
            color: "yellow",
            fontSize: "70px"
          }} /> }</p>
        </div>
        
        <div className='lightDarkMode'>

          <div>
            {theme === "dark" ? 
            <p>Dark mode <b className='onOff'>On</b></p> :
            <p>Dark mode <b className='onOff'>Off</b></p>
            }
          </div>

          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <RegisterForm />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
