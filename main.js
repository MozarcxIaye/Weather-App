/*

const container = document.querySelector('.container');
const input = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container i");
const error404 = document.querySelector(".error404");
const weatherBox = document.querySelector('.weather-container');
const images = document.querySelector('.weather-img img');
const country = document.querySelector('.weather-desc .location');
const temperature = document.querySelector('.weather-desc .temp');
const details = document.querySelector('.weather-desc .weather-details');
const currentDate = document.querySelector('.weather-desc .current-date');

searchBtn.addEventListener('click', () => {
    const APIkey = '8418d80081e4e886d2b37a5a2d16f7c7';
    const city = input.value;
    
    if(city === ''){
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            if(json.cod === '404'){
                container.style.height = '22.5rem';
                weatherBox.style.display = 'none';
                // weatherBox.classList.add = 'noDisplay';
                error404.style.display = 'block';
                // error404.classList.remove = 'noDisplay';
                error404.classList.add('fadeIn');
                return;
            }
            error404.style.display = 'none';
            // error404.classList.add = 'noDisplay';
            error404.classList.remove('fadeIn');
            
            switch(json.weather[0].main) {
                case 'Clear':
                    images.src = 'images/clear.png';
                    break;
                case 'Rain':
                    images.src = 'images/rain.png';
                    break;
                case 'Clouds':
                    images.src = 'images/cloud.png';
                    break;
                case 'Snow':
                    images.src = 'images/snow.png';
                    break;
            }            
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            details.innerHTML = json.weather[0].description;
            country.innerHTML = `${json.name}`;
            
            weatherBox.style.display = 'block';
            weatherBox.classList.remove = 'noDisplay';
            weatherBox.classList.add('fadeIn');
            container.style.height = '21rem';
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });
});



*/

// 9841859803
// Suvashcg@gmail.com


const container = document.querySelector('.container');
const input = document.querySelector(".search-container input");
const searchBtn = document.querySelector(".search-container i");
const error404 = document.querySelector(".error404");
const weatherBox = document.querySelector('.weather-container');
const images = document.querySelector('.weather-img img');
const country = document.querySelector('.weather-desc .location');
const temperature = document.querySelector('.weather-desc .temp');
const details = document.querySelector('.weather-desc .weather-details');
const currentDate = document.querySelector('.weather-desc .current-date');

searchBtn.addEventListener('click', () => {
    const APIkey = '8418d80081e4e886d2b37a5a2d16f7c7';
    const city = input.value.trim(); // Remove leading/trailing white spaces
    
    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(json => {
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            switch (json.weather[0].main) {
                case 'Clear':
                    images.src = 'images/clear.png';
                    break;
                case 'Rain':
                    images.src = 'images/rain.png';
                    break;
                case 'Clouds':
                    images.src = 'images/cloud.png';
                    break;
                case 'Snow':
                    images.src = 'images/snow.png';
                    break;
                case 'Drizzle':
                        images.src = 'images/rain.png';
                        break;
                case 'Thunderstorm':
                    images.src = 'images/thunder.png';
                    break;
                 case 'Atmosphere':
                        images.src = 'images/mist.png';
                        break;
                default:
                image.src ='';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            details.innerHTML = json.weather[0].description;
            country.innerHTML = json.name;

            weatherBox.style.display = '';
            weatherBox.classList.remove('noDisplay');
            weatherBox.classList.add('fadeIn');
            container.style.height = '19.5rem';
        })
        .catch(error => {
            container.style.height = '19.5rem';
            weatherBox.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            console.log('An error occurred:', error);
        });
});
