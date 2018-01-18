// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 




$( document ).ready(function() {
    
    // Translate Function
    function transPigLatin(userChoice){
        return userChoice + "ay";
    };
    
    // sentenceToPigLatin string => array of words
    function toPigLatin(userChoice){
       var array= userChoice.split(" ");
    };
    function wordPigLatin(toPigLatin){
        return toPigLatin + "ay"
    };
    // Click Listener
    $(".myButton").click(function(){
        $('.stuff').text(transPigLatin($(".UC").val()));
    });
});

