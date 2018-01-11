// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
 var userChoice="";
$( document ).ready(function() {
$("button").click(function(){
    var message=$("input").val();
    $("#message").append(userChoice + "ay");
});




});

var vowel=["A","E","I","O","U"]

console.log(userChoice.includes(["A","E","I","O","U"]));


	

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


