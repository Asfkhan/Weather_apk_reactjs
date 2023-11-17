import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search_icon.png';
import rainy_icon from '../Assets/rainy_icon.png';
import windy_icon from '../Assets/—Pngtree—cartoon fun blue shading linear_4093544.png';
import snowy_icon from '../Assets/snowy_icon.png';
import sunny_icon from '../Assets/sunny_icon.png';

export const WeatherApp = () => {

  let api_key = "9b92c7125d30184495e4b5acafdb3038";
  const search = () =>{
      const element = document.getElementsByClassName("cityInput")
      if(element(0).value==="")
      {
        return 0;
      }
  }
  return (
    <div className='container'>
        <div className='titleBar'>
            <h1>Weather99</h1>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Search' />
            <div className='search-icon' onClick={()=>(search())}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="location"><h1>UttarPradesh</h1></div>
        <div className="sunny-container">
        <div className="Weather-image">
        <img src={sunny_icon} alt="" />
        <h1>Sunny</h1>
        </div>
        <div className="data-container">
        <div className="element">
            <div className="icon"/>
            <div className="data">
              <div className="high-temp">23°C/63°F</div>
              <div className="low-temp">17°C/43°F</div>
              <div className="humidity-percent">64%</div>
              <div className="sunrise-time">06:21 AM</div>
              <div className="sunset-time">05:13 PM</div>
            </div>
          </div>
        </div>
        </div>
        <div className="snowy-container">
        <div className="snowy-Weather-image">
        <img src={snowy_icon} alt="" />
        <h1>Snowy</h1>
        </div>
        <div className="snowy-data-container" >

        <div className="element">
            <div className="icon"/>
            <div className="data">
              <div className="high-temp">23°C/63°F</div>
              <div className="low-temp">17°C/43°F</div>
              <div className="humidity-percent">64%</div>
              <div className="sunrise-time">06:21 AM</div>
              <div className="sunset-time">05:13 PM</div>
            </div>
          </div>
        </div>
        </div>
        <div className="rainy-container">
        <div className="rainy-Weather-image">
        <img src={rainy_icon} alt=""/>
        <div className="rainy-text"><h1>Rainy</h1></div>
        </div>
        <div className="rainy-data-container" >

          <div className="element">
            <div className="icon"/>
            <div className="data">
              <div className="high-temp">23°C/63°F</div>
              <div className="low-temp">17°C/43°F</div>
              <div className="humidity-percent">64%</div>
              <div className="sunrise-time">06:21 AM</div>
              <div className="sunset-time">05:13 PM</div>
            </div>
          </div>
        </div>
        </div>
        <div className="windy-container">
        <div className="windy-Weather-image">
        <div className="windy-text"><h1>Windy</h1></div>
        <img src={windy_icon} alt="" />
        </div>
        <div className="windy-data-container" >
        <div className="element">
            <div className="icon"/>
            <div className="windy-data">
              <div className="high-temp">23°C/63°F</div>
              <div className="low-temp">17°C/43°F</div>
              <div className="humidity-percent">64%</div>
              <div className="sunrise-time">06:21 AM</div>
              <div className="sunset-time">05:13 PM</div>
            </div>
          </div>
        </div>
        </div>
        <div className="rainy2-container">
        <div className="rainy2-Weather-image">
        <div className="rainy2-text"><h1>Rainy</h1></div>
        <img src={rainy_icon} alt="" />
        </div>
        <div className="rainy2-data-container" >

        <div className="element">
            <div className="icon"/>
            <div className="data">
              <div className="high-temp">23°C/63°F</div>
              <div className="low-temp">17°C/43°F</div>
              <div className="humidity-percent">64%</div>
              <div className="sunrise-time">06:21 AM</div>
              <div className="sunset-time">05:13 PM</div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        
        
    </div>
  )
}