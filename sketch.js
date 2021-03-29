
var api_key="df6a37a03c06acca6b91311ff2d4ea45";
var units = "&units=metric";
var coord_API_endpoint = "http://api.openweathermap.org/data/2.5/weather?"

var join_key = "&appid=" +api_key;

var temp=0;
var city=0;
var description=0;


    var video = document.getElementById('video');



var localstream;


var flag =0;

function turnOnCamera(){
    
// Get access to the camera!
if (navigator.mediaDevices.getUserMedia) {
  localstream = navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      flag=1;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}  

}

function turnOffCamera() {
  //clearInterval(theDrawLoop);
  //ExtensionData.vidStatus = 'off';
        flag =0;

const mediaStream = video.srcObject;

// Through the MediaStream, you can get the MediaStreamTracks with getTracks():
const tracks = mediaStream.getTracks();

// Tracks are returned as an array, so if you know you only have one, you can stop it with: 
tracks[0].stop();
    
}

function blinkCamera(){
     if(flag){turnOffCamera(); }else{ turnOnCamera();}
}

var myVar;

function myFunction() {
  myVar = setInterval(blinkCamera, 1000);
}

function turnOnMicrophone(){
    
    if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
    console.log('your voice is mine');
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}  
    
    
}






window.addEventListener('load',()=>{
    
    let long;
    let lat;
    
    if(navigator.geolocation){
        
        
        navigator.geolocation.getCurrentPosition(position=>{
            
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            console.log(long);
            console.log(lat);
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            
           var lat_long = "lat=" + lat + "&lon=" + long;

           var current_coord_weather_url= coord_API_endpoint + lat_long + join_key + units;
            
            fetch(current_coord_weather_url).then(data=>{return data.json();}).then(data=>{
                
                
                temp=data.main.temp;
                city = data.name;
                description=data.weather[0].description;
                
                console.log(city);console.log(temp);console.log(description);});
            
            
            
    });
        
    }
    
    
});




function GFG_Fun() { 
    
                var body = document.getElementById('body'); 

                body.classList.add("newClass"); 
               // body.innerHTML += "Cursor is removed from body!";  
            } 



const api_url='https://api.ipify.org/?format=json';

var yourIpAddress = null;

var sentence_2='Your Ip Address: '+ yourIpAddress +' is Mine.'
var sentence_3='Your Camera will be mine.';
var sentence_4='Ummmmmmmmmm...You Look Cute.Body is Yours but imagery is Mine.';
var sentence_5='Cursor will be Mine.+';
var sentence_6="Oooooo. It disappeared.No worries.";
var sentence_7="Your Voice is Mine.";
var sentence_8="All Mine.";
var sentence_9="Endless Typing but nothing on the screen is yours.";
var sentence_10="Mine.Mine.Mine.";
var sentence_11="I'm everywhere just like the air. I'm something beyond your reach.";
var sentence_12="Not delusional.";
var sentence_13="All I want is you.";


 var artist_sentence="Hello, Your Keyboard is Mine. Your Screen Displays the message I want you to watch."
  var artist_sentence2="You Bought the Device, But Data is Mine."

 var paragraph=[artist_sentence,sentence_2, artist_sentence2,sentence_3,sentence_4, sentence_5,sentence_6,sentence_7,sentence_8,sentence_9,sentence_10,sentence_11,sentence_12,sentence_13];
 

async function getapi(url){
    
   const response = await fetch(url);
    
    var data = await response.json();
    console.log(data.ip);
    
    yourIpAddress = data.ip;
     sentence_2='Your Ip Address: '+ yourIpAddress +' is Mine.'

 paragraph=[artist_sentence,sentence_2, artist_sentence2,sentence_3,sentence_4, sentence_5,sentence_6,sentence_7,sentence_8,sentence_9,sentence_10,sentence_11,sentence_12,sentence_13];    
}


//fetch('https://api.ipify.org/?format=json').then(results=>results.json()).then(data=>console.log(data.ip));


getapi(api_url);

var i=0;
var j=0;


var currenttext='';

function setupKeyControls() {
    document.onkeydown = function(e) {
        
        if(e.key){ 
            if(paragraph[j][i]=='*'){myFunction();currenttext+='<br />';j++;i=0;}else{
                if(paragraph[j][i]=='+'){GFG_Fun();currenttext+='<br />';j++;i=0;}
                  if(paragraph[j][i]=='-'){turnOnMicrophone();currenttext+='<br />';j++;i=0;} 
                
                 currenttext+= paragraph[j][i];
                i++;
            if(i== paragraph[j].length)
            {currenttext+='<br />';i=0;j++;
              }
            
            if(j==paragraph.length){ j=0;i=0;}
                
            }

        };
        document.getElementById("demo").innerHTML=currenttext;
         document.getElementById("demo").style.color='black';

       document.getElementById("demo").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      };
    
   
                
    }

setupKeyControls();
