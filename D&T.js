function DateAndTime() {
var today = new Date();
var day = today.getDay();
var daylist = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Today is: " + daylist[day] + ".");

var hr = today.getHours();
var min = today.getMinutes();
var sc = today.getSeconds();

var prepand = (hr >= 12) ? " PM " : " AM ";

hr = ( hr >=12) ? hr - 12 : hr;
if(hr === 0 && prepand === ' PM '){
    if(min === 0 && sc === 0){
        hr = 12;
        prepand = ' Noon ';
    }else{
        hr = 12;
        prepand = ' PM ';
    }
}

if ( hr === 0 && prepand === ' AM ' ) {
    if ( min === 0 && sc === 0) {
        hr = 12;
        prepand = ' Midnight ';
    }else{
        hr = 12;
        prepand = ' AM ';
    }
}

console.log("Current time: " + hr + prepand + " : " + min + " : " +sc);
}

console.log(DateAndTime());