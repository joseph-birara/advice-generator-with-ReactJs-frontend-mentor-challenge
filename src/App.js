import axios from "axios";
import { useState, useEffect } from 'react'
import pauseMobile from "./images/pattern-divider-mobile.svg"
import pauseDesktop from "./images/pattern-divider-desktop.svg"
import dice from "./images/icon-dice.svg"

function App() {
  const [advice, setAdvice] = useState([])
  const fun =() => {
    
    axios.get("https://api.adviceslip.com/advice")
      
      .then(data => setAdvice(data.data.slip))
    
    
  }
  useEffect(() => {
    fun()
  }, [])
  
  

  return (
    <div className="container">
      <h1>Advice #{advice.id}</h1>
      <p>{advice.advice}</p>
       <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>
       <div>
        <button onClick={fun}>
          <img src={dice} alt="" />
        </button>
      </div>
      
    </div>
  );
}

export default App;
