var score = -95;
switch(true){
    case (score >= 90 && score <= 100):
        console.log(`Grade : ${score}`);
        break;
    case (score >= 80 && score <= 89):
        console.log(`Grade : ${score}`);
        break;
    case (score >= 70 && score <= 79):
        console.log(`Grade : ${score}`);
        break;
    case (score >= 60 && score <= 69):
        console.log(`Grade : ${score}`);
        break;
    case (score >= 0 && score <= 59):
        console.log(`Grade : ${score}`);
        break;
    default:
        console.log(`Invalid number ${score}`);
        break;
}