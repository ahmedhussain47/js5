// var multidimentionalarray = [[],[],[],[],[]];

document.write("//Q2"+"<br>"+"<br>")
var _3darray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
 ];
 for(var i=0; i<_3darray.length; i++){
    document.write(_3darray[i] + "<br>")
 }
 document.write("<br>"+"//Q3"+"<br>"+"<br>")

 for(var i=1; i<=10; i++)
 {
     document.write(i+"<br>")
 }
 document.write("<br>"+"//Q4"+"<br>"+"<br>")

var num = +prompt("Enter a number to print Multiplication Table ")
var len = +prompt("Enter a lenth of Multiplication Table ")

for(var i=1; i<=len; i++)
{
    ans = num *i;
    document.write(num +" x "+i+ " = "+ans + "<br>")
}
document.write("<br>"+"//Q5"+"<br>"+"<br>")
  fruits = ["apple", "banana", "mango", "orange", "strawberry"]
  for (var i = 0; i < fruits.length; i++) {
      document.write(fruits[i] + "<br>")
  }

  for (var i = 0; i < fruits.length; i++) {
      document.write("Element at index  " + i + " is " + fruits[i], "<br>")
  }

document.write("<br>"+"//Q6"+"<br>"+"<br>")

for(var i=1; i<=15; i++){
    document.write(i + " , ")

}
document.write("<br>")
for(var i=10; i>0; i--){
    document.write(i + " , ")

}
document.write("<br>")
for(var i=0; i<=20; i++){
    if(i % 2 == 0)
    document.write(i + " , ")

}
document.write("<br>")
for(var i=1; i<=20; i++){
    if(i % 2 != 0)
    document.write(i + " , ")

}
document.write("<br>")
for(var i=1; i<=20; i++){
    if(i % 2 == 0)
    document.write(i + "k"+" , ")

}

document.write("<br>"+"//Q7"+"<br>"+"<br>")

A = ["cake", "applepie", "cookie", "chips", "patties"]
var wel = prompt("Welcome to ABC Bakery! what do you wannna oder sir/ma'am?")
if (wel == "cake") {
 
    document.write("Cake is available at index: "+A.indexOf("cake"))  
}
else if (wel == "applepie") {
 
    document.write("applepie is available at index: "+A.indexOf("applepie"))  
}
else if (wel == "cookie") {
 
    document.write("cookie is available at index: "+A.indexOf("cake"))  
}
else if (wel == "chips") {
 
    document.write("chips is available at index: "+A.indexOf("chips"))  
}
else if (wel == "patties") {
 
    document.write("patties is available at index: "+A.indexOf("patties"))  
}
else {
 
    alert("Wrong Input! ")  
}
document.write("<br>"+"//Q8"+"<br>"+"<br>")
var arr = [24, 53, 78, 91, 12];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write("The largest number is: "+largest)
// console.log(largest);

document.write("<br>"+"//Q9"+"<br>"+"<br>")
var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (smallest > arr[i] ) {
        smallest = arr[i];
    }
}
document.write("The largest number is: "+smallest)

document.write("<br>"+"//Q10"+"<br>"+"<br>")

for(var i=1; i<=100; i++){
    if(i % 5 == 0)
    document.write(i+" , ")

}