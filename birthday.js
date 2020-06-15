// given an array (s) and two integers(d, m), find the number of instances where
// the sum of consecutive numbers in the array is equal to (d) and the number of 
// integers added towards that sum is equal to (m).

function birthday(s, d, m) {
    let result = 0;
    let count = 1;
    if (s.length > 2) {
        for(let i = 0; i < s.length; i++){
        let sum = s[i];
        count = 1;
        for(let j = i+1 ; j < s.length; j++){
            console.log("count", count)
            if(count < m){
                sum += s[j];
                count++
            }
        }
        if(sum == d ){
                result += 1;
            }
        }
    }else if (s[0] == d && s.length == m){
        result++
    }
    
    return result;
}