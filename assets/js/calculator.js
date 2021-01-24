(function () {
    var firstnumber;
    var secondnumber;
    var choose;
choose=prompt("what operation do you want +,-,*, / ?")
    if (choose=="+"  | choose=="-"){
        let array=[];
        size=prompt("write your amount of numbers?")
        for (let i = 0; i < parseInt(size); i++) {
            array[i]=Number(prompt("numbers?"+(i+1)));
            
        }
        if (choose="+"){
        console.log(add(array));
        }
        else {
            console.log(multiply(array));
        }
    }
    if (choose=="-"){
        firstnumber= Number(prompt("write your num:"));
        secondnumber= Number(prompt("write your num:"));
        console.log(sub(firstnumber,secondnumber));
    }
    if (choose=="/"){
        firstnumber= Number(prompt("write your num:"));
        secondnumber= Number(prompt("write your num:"));
        if (secondnumber==0){
            console.log("undefined")
        }
        else{
            console.log(division(firstnumber, secondnumber));
        }
    } 
})();
function add(numbers) {
 var sum=0;
 numbers.forEach(number => {
     sum=sum+number
 });
    return sum;
}
function multiply(numbers) {
    var mult=1;
    numbers.forEach(number=> {
        mult=mult*number
});
 return mult;
}
 function division(firstnumber,secondnumber) {
     return firstnumber/secondnumber;
 }
 function sub(firstnumber,secondnumber) {
    return firstnumber-secondnumber;
}
