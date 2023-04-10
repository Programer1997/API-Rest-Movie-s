const arr = [10,15,20,25,35,56];

const array = ['hola', 'como', 15, 'estas', 20]



arr.forEach(function(number){

    console.log(number);


});


for (i=0;i<=arr.length-1;i++){

    console.log(arr[i]);

}



array.forEach(number => {
    console.log(number);
});



/*In this example, the forEach() method is called on the numbers array. 
The forEach() method takes a function as an argument that will be called for each element of the array. 
The function takes a parameter that represents the current element being processed.

//In this case, the function simply logs each number to the console. 
You can replace the console.log statement with any other code to perform a different action on each element.*/