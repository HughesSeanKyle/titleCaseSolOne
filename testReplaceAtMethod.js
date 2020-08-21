let myString = 'Hello World';
console.log(myString.substr(0, 2));

String.prototype.replaceAt = function(index, character) {                           
    return (                                                                        
      this.substr(0, index) + character + this.substr(index + character.length)
    );
};

console.log(myString.replaceAt(2, 'M'));
//Output: 'Mello World'

//1. this.substr(0, index)                  ==> "He"
//2. + character                            ==> "HeM"
//3. this.substr(index + character.length)
//   ie this.substr(2 + 1)
//   ie this.substr(3)                      ==> "lo World"
//   final = "HeM"+"lo World"               ==> "HeMlo World"


