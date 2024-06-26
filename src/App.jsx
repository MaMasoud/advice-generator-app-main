import { useState, useEffect } from 'react';
import patterImg from './assets/images/pattern-divider-desktop.svg';
import patterImgMobile from './assets/images/pattern-divider-mobile.svg';
import icon from './assets/images/icon-dice.svg'

function App() {
  const [advice, setAdvice] = useState({});

  function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  }

  useEffect(() => {
    fetchAdvice();
  }, []);
 

  return (
    <>
      <div className='advice'>
        <h3>advice #{advice.id}</h3>
        <p>"{advice.advice}"</p>
        <picture>
          <source media="(max-width: 768px)" srcSet={patterImgMobile} />
          <img src={patterImg} />
        </picture>
        <button onClick={fetchAdvice}><img src={icon} /></button>
      </div>
    </>
  )
}

export default App
