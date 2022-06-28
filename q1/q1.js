

var n=51

console.log("Cash owes to customer: "+n);

var a=n/20
resA=parseInt(a)
n=n%20
var b=n/10
resB=parseInt(b)
n=n%10
var c=n/5
resC=parseInt(c)
n=n%5
var d=n/1
resD=parseInt(d)
n=n%1
var result=resA+resB+resC+resD


console.log("No. of 20s : "+resA);
console.log("No. of 10s : "+resB);
console.log("No. of 5s : "+resC);
console.log("No. of 1s : "+resD);

console.log("Total coins: "+result);