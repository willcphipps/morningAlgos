// find the which cat (x, y) is closest to the mouse (z).
// if cats are equadistant from mouse, the mouse escapes
// print which cat or mouse wins.

function catAndMouse(x, y, z) {
    let catA = 0;
    let catB = 0;
    if( x > z ){
        catA = x - z;
    }
    else{
        catA = z - x;
    }
    if (y > z){
        catB = y - z;
    }
    else{
        catB = z - y;
    }
    if ( catB == catA ){
        return "Mouse C";
    }
    if ( catB < catA ){
        return "Cat B";
    }
    if ( catB > catA ){
        return "Cat A";
    }
}



// Given an array of integers, find and print the maximum number of integers you
// can select from the array such that the absolute difference between any two
// of the chosen integers is less than or equal to 1. 


// find out how much 'k' needs to increase to be >= height[max]
// Complete the hurdleRace function below.


function hurdleRace(k, height) {
    let max = 0;
    for(let i = 0; i < height.length; i++){
        if (height[i] > max){
            max = height[i];
        }
    }
    if(k > max){
        return 0;
    }
    else{
        let result = max - k;   
        return result;
    }
}

// create a function that finds the largest word height ( represented as integers in array [h])
// return what would be the height and length of the 'fill-space' where the lenth is 
// determined by length of the word multiplied by the height of the tallest letter. 

function designerPdfViewer(h, word) {
    const letters = word.split('');
    let alphabet = ["a","b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let max = 0;
    for(let i = 0; i < letters.length; i++){
        for(let j = 0; j < alphabet.length; j++){
            if (letters[i] == alphabet[j]){
                if (h[j] > max){
                    max = h[j];
                }
            }
        }
    }
    let wordSize = letters.length;
    return max * wordSize
}

// utopia trees grow by doubling size in spring cycle, and adding one meter in summer cycle.
// given n number of cycles, how tall will the tree be?

function utopianTree(n) {
    let treeTopia = 1;
    let i = 1;
    let summer = false;
    while( i <= n){
        if(summer == true){
            treeTopia += 1
            summer = false;
        }
        else{
            treeTopia = treeTopia * 2;
            summer = true;
        }
        i++
    }
    return treeTopia;
}
