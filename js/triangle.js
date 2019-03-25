function triangle(){
  const base = document.getElementById('base').value;
  const height = document.getElementById('height').value;
  const hypotenuse = document.getElementById('hypotenuse').value;
  
  if(base == "" || hypotenuse == "" || height == ""){
    alert("please enter values!!!");
  }else if (isNaN(base)|| isNaN(height)|| isNaN(hypotenuse)) {
    alert("must enter a number!!!");    
  }else if (base <= 0 || height <= 0 || hypotenuse <= 0) {
    alert("values must be greater than 0 !!!"); 
       
  }else if(height===base && height===hypotenuse && base === hypotenuse){
    alert("Triangle is Equilateral!");
   
  }else if(height===base || height===hypotenuse || base === hypotenuse) {
    alert("Triangle is isoscles!");
   
  }else if (height!==base && height!==hypotenuse && base !== hypotenuse){
   
   if (height + hypotenuse > base || hypotenuse + base > height || height + base > hypotenuse) {
     if (height+hypotenuse<=base || hypotenuse+base<=height || height+base<=hypotenuse) {
       alert("Can not form a triangle!");
       
     }else {
       alert("Triangle is scalene!");
     }  
   }
 }
} 