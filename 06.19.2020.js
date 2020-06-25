// Count the number of 'valleys' elevation is incremented as 'U' == uphill
// && 'D' == downhill. input comes in as string => 'UUDDUDUUUDDDDU'


function countingValleys(n, s) {
    const arr = s.split('');
    let hill = 0;
    let valley = false;
    let hillCount = 0;

    for(let i = 0; i < arr.length; i++){
        if (valley == true){
            if(arr[i] == "U"){
                hill++
                if (hill == 0){
                    hillCount++
                    valley = false;
                }
            }
            else if(arr[i] == "D"){
                hill--
                }
            }
        else if(valley == false){
            if(arr[i] == "D"){
                hill--
                valley = true;
            }
            else{
                hill++
            }
        } 
    }
    return hillCount;
}

// 

function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            if (keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= b){
                max = keyboards[i] + drives[j];
            }
        }
    }
    return max;
}
