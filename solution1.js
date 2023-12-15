let arr=[12,100,5,6,800];
function findMaxMinNumber(arr){
    let max=arr[0];
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }else if(min>arr[i]){
            min=arr[i];
        }
    }
    return [max,min];
}
console.log(findMaxMinNumber(arr));
