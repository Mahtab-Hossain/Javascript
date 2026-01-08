function AreaOfTriangle(sd1,sd2,sd3) {
sd1 = 5;
sd2 = 6;
sd3 = 7;

s = (sd1 + sd2 + sd3)/2;
area = Math.sqrt(s * ((s -sd1) * (s - sd2) * (s - sd3) ));

console.log(area);
}

console.log(AreaOfTriangle(5,6,7));