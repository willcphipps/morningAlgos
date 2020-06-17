// calculate the bill where k is index of bill that should not be shared
// b is the amount paid, and 'bill' is the array of integers representing 
// items purchased.

function bonAppetit(bill, k, b) {
    let sum = 0;
    for(let i = 0; i < bill.length; i++){
        if(i != k){
            sum += bill[i];
        }
    }
    let charged = sum / 2;
    if (charged == b){
        console.log("Bon Appetit");
    }
    else  
    console.log(b - charged)
}

// find the number of matching integer pairs in the array. 
function sockMerchant(n, ar) {
    let count = 0;
    for(let i = 0; i < ar.length; i++){
        for(let j = i+1; j < ar.length; j++){
            if(ar[i] == ar[j] && ar[j] != undefined){
                count++
                ar.splice(j, 1)
                break;
            }
        }
    }
    return count;
}

console.log(sockMerchant(20,[4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5,]))