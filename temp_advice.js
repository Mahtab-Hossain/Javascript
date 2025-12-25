var temp;
temp = -45;
if (temp > 40) {
    console.log("Too hot");
}else if (temp >= 30 && temp <= 40) {
    console.log("Hot Weather");
}else if (temp >= 20 && temp <= 30) {
    console.log("Nice Weather");
}else if (temp >= 10 && temp <= 20) {
    console.log("Cold weather");
}else if (temp < 10) {
    console.log("Too cold");
}else{
    console.log("Inavlid Number...");
}