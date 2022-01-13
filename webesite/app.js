/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API

let baseURL = `http://api.openweathermap.org/data/2.5/forecast?zip`;
let apiKey = 'appid=aa773ac4a917945b45bab5a9c9f00b3a';

// Event listener to add function to existing HTML DOM element
const gen = document.getElementById('generate')
gen.addEventListener('click',Action);


/* Function called by event listener */
function Action(e){
    const newZip = document.getElementById('zip').value;
    const feeling = document.getElementById('feeling').value;
    getWeather(baseURL,newZip,apiKey)

    .then(function(data){
        console.log(data);

        postData('/add',{date:d, temp:data.list[0].main.temp, content:feelings})
        updateUI();
    })
};

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+key)
    try {
        const data = await res.json();
        return data;
    }catch(error) {
        console.log("error", error);
    }
    };


/* Function to POST data */
const postData = async (url='' ,data={})=>{
    console.log(data);
    const response = await fetch(url, {
        method:'post',
        credentials: 'same-origin',
        header: {
            'content-type':'application/json',
        },
        body: JASON.stringify(data)
        
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
  
    }
};



/* Function to GET Project Data */
const updateUI = async ()=> {
    const request = await fectch('/all');
    try{
    document.getElementById('data').innerHTML = `Data: ${allData[0].data}`;
    document.getElementById('temp').innerhtml = `Temperatuer: ${allData[0].temp}`;
    document.getElementById('content').innerHTML = `I feel: ${allData[0].content}`;

}catch(error) {
    console.log("error", error);
}
};

