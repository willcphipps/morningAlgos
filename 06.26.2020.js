// there is an add that is sent to 5 viewers. each day (n) 
// the add is shared by people who like it 3 times.
// how many likes does the add have after (n) days.

// function viralAdvertising(n) {
//     let likes = Math.floor(5/2);
//     let totalLikes = likes;
//     let shares = 0
//     if(n == 1){
//         return 2;
//     }
//     else{
//         let i = 2;
//         while( i <= n){
//             shares = (likes * 3);
//             likes = Math.floor(shares/2);
//             totalLikes += likes;
//             i++
//         }
//         return totalLikes;
//     }
// }


//some evil javascript magic

function saveThePrisoner(n, m, s) {
    return(m-1+s)%n || n;
}

