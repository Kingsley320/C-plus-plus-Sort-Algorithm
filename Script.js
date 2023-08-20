let arr =[];
let newArr = [];
let temp = 0;
let num = prompt("Enter a number ");

for(i = 0; i<num; i++){
    let rand = Math.ceil(Math.random()*100)
    arr.push(rand)
    console.log("Random Array: " , rand)
    console.log(arr)
}

for(j=0; j<arr.length; j++){
    for(k=j+1; k<arr.length; k++){
        if(arr[k] < arr[j]){
            temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        newArr.push(arr[k])
        }
    }
    console.log("Sorted Array: " , arr[j])

}
// console.log (arr,newArr);
