import '../style.css'

const apiKey = "71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5"

const temp = document.getElementById("temp")
const desc = document.getElementById("desc")
const temp1 = document.getElementById("temp1")
const desc1 = document.getElementById("desc1")

document.getElementById("city").addEventListener("change", async (city) => {
    
    const forecast = await (await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=${apiKey}&q=${city.target.value}`)).json()
    
    temp.innerHTML = await Math.round(forecast.current.temp_c)+'º'
    desc.innerHTML = await forecast.current.condition.text

} )

