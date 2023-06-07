/* chessboard solution for eloquent JS */
/* 
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
                # # # #
                 # # # #
                # # # #
                 # # # #
                # # # #
                 # # # #
                # # # #
                 # # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height. */

// Pseudo code
// Create an empty string
// Set an outer loop for the rows
// Set an inner loop for the columns
// In the inner loop for each iteration add a " " to the output string if the sum of (i+j) is even and a "#" if the sum is odd.
// After the inner loop then add a newline character to make the string get a new line.


function chessboard(row, column){
    let output = "";

    for (let i = 1; i<=row; i++) {
      
        for (let j = 1; j <= column; j++) {
           
      ((i+j)%2==0? output+=" ":output+="#");
            
        }
        
        output +="\n";
    }
     return output; 
}
console.log(chessboard(8,8));