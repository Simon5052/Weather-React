import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, SetData] = useState({"coord":{"lon":-0.1969,"lat":5.556},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":299.71,"feels_like":299.71,"temp_min":299.71,"temp_max":299.71,"pressure":1012,"humidity":77,"sea_level":1012,"grnd_level":1009},"visibility":10000,"wind":{"speed":4.67,"deg":200,"gust":4.88},"clouds":{"all":88},"dt":1657118084,"sys":{"country":"GH","sunrise":1657086743,"sunset":1657131496},"timezone":0,"id":2306104,"name":"Accra","cod":""});
  const [location, SetLocation] = useState('');
  const [icon, setIcon] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f140e774692949a80bd281d14ddb6b4d`
  const searchLocation = (event) => {
    if(event.key==='Enter')
    {
      axios.get(url)
      .then((response) => {
      SetData(response.data)
      console.log(data);
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
        <p className='country'>{data.sys?.country}</p>
        <p className='city'>{data.name}</p>
        <div>
          <h1>{data.main?.temp} &#176;</h1>
        </div>
        <div className='description'>
          <img  src={`http://openweathermap.org/img/w/${data.weather[0]?.icon}.png`} alt='weaher icon' />
          <p>{data.weather[0]?.description}</p>
        </div>
      </div>
      <div className='buttom'>
        <div className='feels'>
          <p> {data.main?.feels_like} &#176; </p>
          <p>Feels</p>
        </div>
        <div className='humidity'>
          <p>{data.main?.humidity}%</p>
          <p>humidity</p>
        </div>
        <div>
          <p>{data.wind.speed} MPH</p>
          <p> Wind Speed</p>
        </div>

      </div>
     </div>
    </div>
  );
}

export default App;
