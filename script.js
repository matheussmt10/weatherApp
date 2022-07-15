const input = document.getElementById('inputLocation')

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
    
        console.log(temp)
        console.log(city)
        console.log(country)
        console.log(weatherDetails)
    }
    catch(err) {
        alert('Cidade Inválida')
    }
}