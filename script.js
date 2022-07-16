const input = document.getElementById('inputLocation')
const sectionContainer = document.getElementById('sectionContainer')
const iconDiv = document.getElementById('iconWeather')
const info = document.getElementById('infoWeather')

input.addEventListener('keypress', function(e){ 
    if(e.key == 'Enter'){
        weatherApi()
        input.value = ''
    }
 },false);


async function weatherApi() {
    
        const inputWeatherValue = document.getElementById('inputLocation').value
        if (inputWeatherValue.length === 0){
            alert('Insira uma cidade!')
        }
        const apiKey = "cb39e29f8e0465561a1108c543802989"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputWeatherValue}&appid=${apiKey}&units=metric`
        const data = await fetch(url)
        const weatherDatas = await data.json()
        
        showWeather(weatherDatas)    
}


async function showWeather(datas){

    try{
        const temp = datas.main.temp
        const city = datas.name
        const country = datas.sys.country
        const weatherDetails = datas.weather[0].description
        
        const weatherIcon = `https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`

        console.log(temp)
        console.log(city)
        console.log(country)
        console.log(weatherDetails)

        insertInfos(weatherIcon, temp, city, country, weatherDetails)
    }
    catch(err) {
        alert('Cidade Inválida')
    }
}


function insertInfos(weatherIcon, temp, city, country, weatherDetails) {
        sectionContainer.style.display = 'flex'
        sectionContainer.textContent = ''
        const divGeral = document.createElement('div')
        divGeral.setAttribute('id', 'divGeral')

        const elementCity = document.createElement('div')
        elementCity.setAttribute('id', 'infoCity')
        const elementTemp = document.createElement('div')
        elementTemp.setAttribute('id', 'infoTemp')
        const elementCountry = document.createElement('div')
        elementCountry.setAttribute('id', 'infoCoutry')
        const elementDetails = document.createElement('div')
        elementDetails.setAttribute('id', 'infoDetails')
        const elementIcon = document.createElement('div')
        elementIcon.setAttribute('id', 'iconWeather')
        
        divGeral.appendChild(elementIcon)
        divGeral.appendChild(elementCity)
        divGeral.appendChild(elementTemp)
        divGeral.appendChild(elementCountry)
        divGeral.appendChild(elementDetails)
        

        elementIcon.innerHTML = `<img id='imgIcon' src="${weatherIcon}" alt="">`
        elementCity.innerHTML = city
        elementTemp.innerHTML = temp
        elementCountry.innerHTML = country
        elementDetails.innerHTML = weatherDetails
        
        sectionContainer.appendChild(divGeral)   
}

