import React, { useState, useEffect } from 'react'

import axios from 'axios';

export default function Weather() {

  const [weather, setWeather] = useState(0)

  const handleWeather = async () => {
    const response = await axios.get("/getToronto")
    setWeather(response.data.temp);
  }

  return (
    <div>
      <button onClick={handleWeather}>Get weather in Toronto</button>
      <h1>The weather in Toronto is: {weather}</h1>
    </div>
  )
}
