// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#


for (let row = 0; row<8;row++){
    let square = '';
    for (let col = 0; col<8;col++){
        if(row%2 === 0 && col%2 === 0){
            square = square + '#';
        } if((row%2 === 0 && col%2 !== 0)) {
            square = square + '_';
        } if((row%2 !== 0 && col%2 == 0)) {
            square = square + '_';
        } if((row%2 !== 0 && col%2 !== 0)) {
            square = square + '#';
        }
    } 
    console.log(square);
}