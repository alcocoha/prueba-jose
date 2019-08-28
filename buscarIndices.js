function findSum(arr, sumValue) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            
            if((arr[i] + arr[j]) === sumValue) return `${i}, ${j}`;
            
        }
        
    }
}
console.log(  findSum([1, 20, 13, 16], 29) )
console.log(   findSum([3, 15, 18, 8, -1], 17) )