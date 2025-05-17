let input = document.querySelector('input')
let btn = document.querySelector('button')
let temp = document.getElementById('d11')
let lat = document.getElementById('d12')
let country = document.getElementById('d13')


async function getData(city) {
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=e4a23b73add04f2c97042140240711&q=${city}&aqi=yes`)

    const data = await result.json()
    console.log(data)
    
    lat.innerText += data.location.lat 
    temp.innerText += data.current.temp_c
    country.innerText += data.location.country
}

btn.addEventListener('click', () => {
    let city = input.value;
    getData(city)
})