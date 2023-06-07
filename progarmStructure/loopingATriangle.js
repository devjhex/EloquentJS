/* Looping a triangle eloquent JS exercise 1 */

// Write a loop that makes seven calls to console.log to output the following

// #
// ##
// ###
// ####
// #####
// ######
// #######

/* Pseudo code */
// Make a for loop that calls the log function.
// Initialize the iterator with the string ("#")
// In the condition part of the loop the loop should iterate only if the string i is less than 8 as the condition states.
// Otherwise the loop should continue to add on hashes to the i variable.


for (let i = "#"; i.length < 8; i+="#") {
    console.log(i);
}