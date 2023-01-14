import React, { useEffect, useState } from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Loader from '../../Components/Loader/Loader'
import Linkdata from '../../Components/LinkData/Linkdata'

import './Home.scss'

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");


    const handleClick = (event) => {
        
        event.preventDefault();

        setInputValue( value );
        setValue( "" );
    }

    useEffect( () =>{

        setLoading( true);




        setTimeout(() => {
            setLoading( false );
        }, 1500)

    }, []);


  return loading ? 
  <Loader />
  :(
    <>
    <Navbar />
    <div className='hero'>
        <div className='animation-section'>
            <div className='circle'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-paperclip"></i>
                <i className="fa-solid fa-code"></i>
                <i className="fa-solid fa-cloud"></i>
                <i className="fa-brands fa-google"></i>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
        </div>
        <div className='input-section'>
            <p>Short Your <span>URL</span> </p>
            <p>Like A <span>PRO !</span></p>
            <form onSubmit={handleClick}>
                <input 
                 type="text" 
                 placeholder='https://your@Long@URL.com'
                 onChange={(e) => setValue( e.target.value )}
                />
                <button onClick={handleClick} > Shorten </button>
            </form>
            <Linkdata 
             inputValue = {inputValue}
            />
        </div>

    </div>
    </>
  )
}

export default Home