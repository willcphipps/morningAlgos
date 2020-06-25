// the professor will only start class if a certain number of students are on time
// 'ontime' is represented by the integers in array [a] whose value is less then 
// or equal to 0. k represents the number of students required to start class. 
// Return a string 'YES' or 'NO' of that states if is canceled.

function angryProfessor(k, a) {
    let count = 0; 
    for(let i = 0; i < a.length; i++){
        if( a[i] <= 0){
            count++
        }
    }
    if(count >= k){
        return "NO"
    }
    else{
        return "YES"
    }
}

// given a range of numbered days i - j, return the number of days that are 
// determined mathmatically beautiful. Beautiful is defined by integers(days) 
// where there reverse subtracted by its original is divisible by k.


function beautifulDays(i, j, k) {
    let count = 0;
    for(let z = i; z <= j; z++){
        let reverseZ = z + "";
        reverseZ = reverseZ.split("").reverse().join("");
        if((reverseZ-z) % k == 0){
            count++
        }
    }
    return count;
}
