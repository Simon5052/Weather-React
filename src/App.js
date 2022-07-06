import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, SetData] = useState({});
  const [location, SetLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f140e774692949a80bd281d14ddb6b4d`
  const searchLocation = (event) => {
    if(event.key==='Enter')
    {
      axios.get(url)
      .then((response) => {
      SetData(response.data)
      console.log(response.data)
    })

    }
    
  }

  const inputChange = (event) =>{
    SetLocation(event.target.value)
  }


  return (
    <div className="app">
      <div className='search'><input value={location} onChange={inputChange} onKeyPress = {searchLocation}
       placeholder = "Enter your Location" type = "text"/></div>
     <div className='container'>
      <div className='top'>
        <p>{data.name}</p>
        <div>
          <h1>{data.main.temp} &#176;</h1>
        </div>
        <div className='description'>
          <p>{data.weather[0].description}</p>
        </div>
      </div>
      <div className='buttom'>
        <div className='feels'>
          <p> 30 &#176; </p>
          <p>Feels</p>
        </div>
        <div className='humidity'>
          <p>{data.main.humidity}%</p>
          <p>humidity</p>
        </div>
        <div>
          <p>17 MPH</p>
          <p> Wind Speed</p>
        </div>

      </div>
     </div>
    </div>
  );
}

export default App;
