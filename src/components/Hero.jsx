import React, { useEffect, useState } from 'react'
import Quote from './Quote.jsx'
import axios from 'axios'

function Hero() {

    const [data,setData] = useState('');
    const[getNew,setGetNew] = useState(0)

    const handleNewQuote = () =>{
        setGetNew(oldData => oldData + 1);
    }

    useEffect(()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then(response => setData(response.data.slip))
        .catch(error => console.log('this is an error!!', error))
    },[getNew])

  return (
    <div className='bg-f-dark-blue min-h-screen text-white flex items-center justify-center px-[16px]'>
        
        <Quote data = {data} handleNewQuote={handleNewQuote}/>
    </div>
  )
}

export default Hero