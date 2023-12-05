var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;   // string length
z=abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
o=abc.lastIndexOf("");        // last occurance
w=abc.slice(3, 6);                // cuts out "def", negative values count from behind
q=abc.replace("abc","123");       // find and replace, takes regular expressions
i=abc.toUpperCase();              // convert to upper case
u=abc.toLowerCase();              // convert to lower case
p=abc.concat(" ", "123");          // abc + " " + str2
k=abc.charAt(1);                  // character at index: "c"
j=abc[8];                         // unsafe, abc[2] = "C" doesn't work
g=abc.charCodeAt(2);              // character code at index: "c" -> 99
f=abc.split(",");                 // splitting a string on commas gives an array
d=abc.split("");                  // splitting on characters
var s = 125
console.log(s.toString(5));