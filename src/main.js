import '../style.css'

const apiKey = "71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5"

const temp = document.getElementById("temp")
const desc = document.getElementById("desc")
const temp1 = document.getElementById("temp1")
const desc1 = document.getElementById("desc1")
const temp2 = document.getElementById("temp2")
const desc2 = document.getElementById("desc2")

document.getElementById("city").addEventListener("change", async (city) => {
    
    const forecast = await (await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=${apiKey}&q=${city.target.value}&days=3`)).json()
    setForecast(forecast)
} )


document.getElementById('geo').addEventListener('click', handleClickGeo)

function handleClickGeo(event){
    if(!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const forecast = await (await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=${apiKey}&q=${lat +","+lon}&days=3`)).json()
        setForecast(forecast)
    })
}

async function setForecast(forecast){
    
    temp.innerHTML = await Math.round(forecast.current.temp_c)+'º'
    desc.innerHTML = await forecast.current.condition.text

    temp1.innerHTML = await Math.round(forecast.forecast.forecastday[1].day.avgtemp_c)+'º'
    desc1.innerHTML = await forecast.forecast.forecastday[1].day.condition.text

    temp2.innerHTML = await Math.round(forecast.forecast.forecastday[2].day.avgtemp_c)+'º'
    desc2.innerHTML = await forecast.forecast.forecastday[2].day.condition.text

}