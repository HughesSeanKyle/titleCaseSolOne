/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

//Solution one

String.prototype.replaceAt = function(index, character) {                           //1
    return (                                                                        //2
      this.substr(0, index) + character + this.substr(index + character.length)     //3
    );
};
  
  function titleCase(str) {                                                         //4
    var newTitle = str.split(" ");                                                  //5
    // console.log(newTitle);                                                       //5.1
    var updatedTitle = [];                                                          //6
    for (var st in newTitle) {
      updatedTitle[st] = newTitle[st]                                               //8
        .toLowerCase()                                                              //9
        .replaceAt(0, newTitle[st].charAt(0).toUpperCase());                        //10
        // console.log(updatedTitle);                                               //10.1
    }
    return updatedTitle.join(" ");                                                  //11
}

console.log(titleCase("I'm a little tea pot"));





//Notes
/*

Lines 1 - 3 Creates a string method to be used later in the function. 


//1, 2, 3 

String.prototype
The String.prototype property represents the String prototype object.
All String instances inherit from String.prototype. Changes to the String prototype object are propagated to all String instances.

String.prototype.constructor
Specifies the function that creates an object's prototype.
Source - [https://devdocs.io/javascript/global_objects/string/prototype]            
            
The String.prototype property allows one to create a method to be used by all instances of strings. The same way we can use a method such as string.length to determine the length of a string. In this case accessing this property allows one to make a "custom" method for all strings. 

This is very useful as each instance of the string does not need to have this function defined each time but will be available inside the strings constructor when needed.

String.prototype.replaceAt____
The replaceAt is the name of the "custom" method being created.

This string method takes in two arguments.
  1. The index of the string 
  2. The character that should be replaced

  Method demonstrated in testReplaceAtMethod.js

The 'this' keyword in //3 refers to the current object the substr is being used in. In this case it is referring to the replaceAt method, which is a function and all functions are objects or has object like characteristics. Therefore, the "this" keyword is referring to the replaceAt function/method.

The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.
Source-[https://devdocs.io/javascript/global_objects/string/substr]


(a)'this.substr(0, index)' will return the input string plus everything before the given index.

(b)'+ character' Will concatenate the given replacement value to the output given in (a)

(c)'+ this.substr(index + character.length)' this will further concatenate the remainder of the input string by adding 1 to the index as character.length will be equal to 1. 

(See testReplaceMethod.js for (a)(b)&&(c))

//4 A function that takes in one argument - a string

The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
Source-[https://devdocs.io/javascript/global_objects/string/split]

//5 Creates a variable 'newTitle' that will split the string into an array. The space in between the quotes indicates that the entire string "I'm a little tea pot" will be split by word.

  newTitle = [ "I'm", 'a', 'little', 'tea', 'pot' ];

//6 updatedTitle - an empty array that will capture the modified string. Note - Strings are immutable.

//7 a for in loop that will loop through each index of the newly created array - newTitle = [ "I'm", 'a', 'little', 'tea', 'pot' ]; 
Indices=  [0, 1, 2, 3, 4]

//8 Each st (or value of said index) will be iterated over and added to the empty array (var updatedTitle = [];)

The toLowerCase() method returns the calling string value converted to lower case.
Source-[https://devdocs.io/javascript/global_objects/string/tolowercase]

//9 All strings within the updatedTitle array will be set to lowercase

The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
Source-[https://devdocs.io/javascript/global_objects/string/charat]

The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
Source-[https://devdocs.io/javascript/global_objects/string/touppercase]

//10 The replaceAt method created above will iterate over each word in the array(every index), which is all lowercase,(newTitle = [ "i'm", 'a', 'little', 'tea', 'pot' ]; ) and grab each first character of every index, via the charAt(0) method and set each one to uppercase. 

The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
Source-[https://devdocs.io/javascript/global_objects/array/join]

//11 the join method will do the opposite of what the split method did in //5 and join each item in the array to a new string. The space between the quotation marks in the join method indicates to join by word(spaces are included). This new string is the updatedTitle array being converted from and array to string (//10.1 [ "I'm", 'A', 'Little', 'Tea', 'Pot' ] ===> "I'm A Little Tea Pot")
*/

