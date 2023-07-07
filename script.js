const apikey= '9143c57eecaf85c074934a7c0b87dc55' ;

const unsplash= 'https://api.unsplash.com/search/photos?page=1&query=vrindavan&client_id=4OT1Sb8VK_-MqDfxwIrM_On0BtVrfaq0LRbl7rrVW-s'

const one= document.querySelector('#one') ;
const two= document.querySelector('#two') ;
const three= document.querySelector('#three') ;
const four= document.querySelector('#four') ;
const five= document.querySelector('#five') ;

const form= document.querySelector('form')

function weather(cityname){

    while(one.firstChild){
        one.removeChild(one.firstChild)
    }

    while(two.firstChild){
        two.removeChild(two.firstChild)
    }

    while(three.firstChild){
        three.removeChild(three.firstChild)
    }

    while(four.firstChild){
        four.removeChild(four.firstChild)
    }

    while(five.firstChild){
        five.removeChild(five.firstChild)
    }
    
    const imgurl= `https://api.unsplash.com/search/photos?page=1&query=${cityname}&client_id=4OT1Sb8VK_-MqDfxwIrM_On0BtVrfaq0LRbl7rrVW-s`

    const url= `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}` ;

    fetch(imgurl)
        .then(res=>{
            return res.json() ;
        })
        .then(data=>{
            let image= data.results[0].urls.full 
            // console.log(data.results[0].urls.full)
            document.body.style.backgroundImage= `url('${image}')`
        })

    fetch(url)
        .then(res=>{
            return res.json() ;
        })
        .then(data=>{

            if(data.sys.country){
                // console.log(data)
                const name= data.name ;
                const countryname= data.sys.country ;

                const temperature= Math.round(data.main.temp - 273.15) ;
                const max_temperature= Math.round(data.main.temp_max - 273.15) + 3 ;
                const min_temperature= Math.round(data.main.temp_min - 273.15) - 2 ;

                const wind_speed= Math.round(data.wind.speed) ;
                const weather_type= data.weather[0].description ;


                const p1= document.createElement('p') ;
                p1.innerText = `${name}, ${countryname}`
                p1.style.margin= '5px'
                one.append(p1) ;


                const bighead= document.createElement('h1') ;
                bighead.innerText= `${temperature}°C`
                bighead.style.fontSize= '2rem'
                bighead.style.margin= '12px'
                two.append(bighead)



                const other_temp= document.createElement('p')
                other_temp.innerText= `${min_temperature}°C(min)/${max_temperature}°C(max)`
                other_temp.style.margin= '5px'
                three.append(other_temp)


                const windy= document.createElement('p')
                windy.innerText= `${wind_speed} kms`
                windy.style.margin= '5px'
                four.append(windy)

                const weather_des= document.createElement('p')
                weather_des.innerText = weather_type
                weather_des.style.margin= '5px'
                five.append(weather_des)

            }
            

        })
        .catch(err=>{
            console.log(err)
        })
        
}


form.addEventListener('submit', (e)=>{
    e.preventDefault() ;
    const inpVal= form.elements[0].value ;

    weather(inpVal) ;
    
    form.elements[0].value= "";
})


const imgackey= '4OT1Sb8VK_-MqDfxwIrM_On0BtVrfaq0LRbl7rrVW-s' ;
const imgsckey= 'vjBf_XBmpo-1Xu7rdPY0Rr2CUeav3nzd0tyyvSVwJAw'