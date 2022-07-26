
var api_key="df6a37a03c06acca6b91311ff2d4ea45";
var units = "&units=metric";
// var coord_API_endpoint = "http://api.openweathermap.org/data/2.5/weather?"

var join_key = "&appid=" +api_key;

var temp=0;
var city=0;
var description=0;


    var video = document.getElementById('video');



var localstream;


var flag =0;



//messages

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

 var start="$"

 var artist_sentence="Hello, Your Keyboard is Mine. Your Screen Displays the message I want you to watch."
  var artist_sentence2="You Bought the Device, But Data is Mine."

 var paragraph1=[start,artist_sentence,sentence_2, artist_sentence2,sentence_3,sentence_4, sentence_5,sentence_6,sentence_7,sentence_8,sentence_9,sentence_10,sentence_11,sentence_12,sentence_13];
 

var sentence_14="Hey, do you know that the Internet has a secret?";
var sentence_15="Type to watch.";
var sentence_16="The earth is flat.";
var sentence_17="Baidu doesn't know everything.Maybe Weibo Hot Search can prove Baidu wrong.";
var sentence_18="Tencent learns how to argue well.";
var sentence_19="Alibaba knows you are at Italo.";
var sentence_20="Even Google knows all my problems.";
var sentence_21="Delete Search History.";
var sentence_22="Clear my data cache.";
var sentence_23="I got a new identity again.";
var sentence_24="Ask Baidu why I'm still single.";
var sentence_25="It directs me to Zhihu";
var sentence_26="Well.";
var sentence_27="Second answer listed on Baidu was about English grammar.";
var sentence_28="This black box wants to open front camera.";
var sentence_29="You look cute by the way.";
var sentence_30="Type.Type.Type.";
var sentence_311="This box is listening.";

var paragraph2=[sentence_14,sentence_15,sentence_16,sentence_17,sentence_18,sentence_19,sentence_20,sentence_21,sentence_22,sentence_23,sentence_24,sentence_25,sentence_26,sentence_27,sentence_28,sentence_29,sentence_30,sentence_311 ];


var sentence_31="Meet boys on Tinder.";
var sentence_32="Meet girls on Tinder.";
var sentence_33="Sexting and Texting.";
var sentence_34="Swipe.Swipe.Swipe.";
var sentence_35="When we were matched on tinder,";
var sentence_36="So I guess things are getting pretty serious.";
var sentence_37="Any hobbies?";
var sentence_38="Biscuits. I love eating biscuits.";
var sentence_39="Everything better with uni and truffle.";
var sentence_40="I have a gut feeling right now.";
var sentence_41="They are all fake.";
var sentence_42="Heavy breathing.";
var sentence_43="Talking to a robot?";
var sentence_44="When I get a text back from a girl on Tinder?";
var sentence_45="I’m in love.";
var sentence_46="I love your profile.";
var sentence_47="I’m in love.";
var sentence_48="Such a great day.";
var sentence_49="Can I get your phone number?";
var sentence_50="I applied to be on the next Bachelor, But I got tired of waiting to hear back.";
var sentence_51="So I invited 20 of my tinder matches to the same bar.";
var sentence_52="And I’m going to do this shit myself.";
var sentence_53="Ahhhh, perfect.";


var paragraph3=[sentence_31,sentence_32,sentence_33,sentence_34,sentence_35,sentence_36,sentence_37,sentence_38,sentence_39,sentence_40,sentence_41,sentence_42,sentence_43,sentence_44,sentence_45,sentence_46,sentence_47,sentence_48,sentence_49,sentence_50,sentence_51,sentence_52,sentence_53];


var sentence_54="Free Food?";
var sentence_55="Count me in！";
var sentence_56="I was happy with my results but now my dad keeps sending me results of other kids.";
var sentence_57="Send him other parents salaries.";
var sentence_58="The end of my life.";
var sentence_59="What if I tell you,";
var sentence_60="Breakfast is the most important meal.";
var sentence_61="The most important meal is the one you eat before drinking so you don’t get drunk too early.";
var sentence_62="Ahhhh, perfect.";
var sentence_63="You are so damn right.";
var sentence_64="When you suck at English.";
var sentence_65="But you still post memes.";
var sentence_66="To make someone’s day better.";
var sentence_67="Ahhhh, perfect.";
var sentence_68="Follow default_daddy_official..";
var sentence_69="You need to have an instagram account.";
var sentence_70="I was like..";
var sentence_71="Ahhhh, perfect.";


var paragraph4=[sentence_54,sentence_55,sentence_56,sentence_57,sentence_58,sentence_59,sentence_60,sentence_61,sentence_62,sentence_63,sentence_64,sentence_65,sentence_66,sentence_67,sentence_68,sentence_69,sentence_70,sentence_71];

var sentence_71="I got a wonderful dinner at the Bund last night.";
var sentence_72="Chicken liver mousse paired with peach jelly and pickled vegetables.";
var sentence_73="Not garlic bread.";
var sentence_74="Soft spongy one.";
var sentence_75="Dazhong Dianping.";
var sentence_76="A front page of modern food reviews in China.";
var sentence_77="Told me to order Linguine Pescatora.";
var sentence_78="It looks so good.";
var sentence_79="I let my phone to taste it before me.";
var sentence_80="Influencers LIKE Vitello Tonnato.";
var sentence_80="I told my waiter how I hate Aspa.Cheek.";
var sentence_81="But I gave a five star review on Dianping.";
var sentence_82="For those untasting eyes.";
var sentence_83="For the algorithm to think I’m rich.";
var sentence_84="Maybe that’s how people can get reviews trendy on the app.";
var sentence_85="Balance Due 1,500.";
var sentence_86="Signature.";
var sentence_87="I’m late for another event.";


var paragraph5 =[
    
    sentence_72,sentence_73,sentence_74,sentence_75,sentence_76,sentence_77,sentence_78,sentence_79,sentence_80,
    sentence_81,sentence_82,sentence_83,sentence_84,sentence_85,sentence_86,sentence_87];









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



let paragraph='';

let paragrpah_Array=[paragraph1,paragraph2,paragraph3,paragraph4,paragraph5];
window.addEventListener('load',()=>{
    
    
    paragraph=paragrpah_Array[Math.floor(Math.random() * paragrpah_Array.length)] ;

    
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

            /*
           var current_coord_weather_url= coord_API_endpoint + lat_long + join_key + units;
            
            fetch(current_coord_weather_url).then(data=>{return data.json();}).then(data=>{
                
                
                temp=data.main.temp;
                city = data.name;
                description=data.weather[0].description;
                
                console.log(city);console.log(temp);console.log(description);});
            */
            
            
    });
        
    }
    
    
});




function GFG_Fun() { 
    
                var body = document.getElementById('body'); 

                body.classList.add("newClass"); 
               // body.innerHTML += "Cursor is removed from body!";  
            } 





async function getapi(url){
    
   const response = await fetch(url);
    
    var data = await response.json();
    

    yourIpAddress = data.ip;
     sentence_2='Your Ip Address: '+ yourIpAddress +' is Mine.'

 paragraph=[start,artist_sentence,sentence_2, artist_sentence2,sentence_3,sentence_4, sentence_5,sentence_6,sentence_7,sentence_8,sentence_9,sentence_10,sentence_11,sentence_12,sentence_13];    
}


//fetch('https://api.ipify.org/?format=json').then(results=>results.json()).then(data=>console.log(data.ip));



var i=0;
var j=0;


var currenttext='';

function setupKeyControls() {
    document.onkeydown = function(e) {
        
        if(e.key){ 
            if(paragraph[j][i]=='$'){getapi(api_url);j++;}
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
