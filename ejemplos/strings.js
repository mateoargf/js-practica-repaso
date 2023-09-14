let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
console.log(s.substring(1,4)) // => "ell": the 2nd, 3rd, and 4th characters.
console.log(s.slice(1,4)) // => "ell": same thing
console.log(s.slice(-3)) // => "rld": last 3 characters
console.log(s.split(", ")) // => ["Hello", "world"]: split at delimiter string
// Searching a string
console.log(s.indexOf("l")) // => 2: position of first letter l
console.log(s.indexOf("l", 3)) // => 3: position of first "l" at or after 3
console.log(s.indexOf("zz")) // => -1: s does not include the substring "zz"
console.log(s.lastIndexOf("l")) // => 10: position of last letter l
// Boolean searching functions in ES6 and later
console.log(s.startsWith("Hell")) // => true: the string starts with these
console.log(s.endsWith("!")) // => false: s does not end with that
console.log(s.includes("or")) // => true: s includes substring "or"
// Creating modified versions of a string
console.log(s.replace("llo", "ya")) // => "Heya, world"
console.log(s.toLowerCase()) // => "hello, world"
console.log(s.toUpperCase()) // => "HELLO, WORLD"
console.log(s.normalize()) // Unicode NFC normalization: ES6
console.log(s.normalize("NFD")) // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
console.log(s.charAt(0)) // => "H": the first character
console.log(s.charAt(s.length-1)) // => "d": the last character
console.log(s.charCodeAt(0)) // => 72: 16-bit number at the specified position
console.log(s.codePointAt(0)) // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
console.log("x".padStart(3)) // => " x": add spaces on the left to a length of 3
console.log("x".padEnd(3)) // => "x ": add spaces on the right to a length of 3
console.log("x".padStart(3, "*")) // => "**x": add stars on the left to a length of 3
console.log("x".padEnd(3, "-")) // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
console.log(" test ".trim()) // => "test": remove spaces at start and end
console.log(" test ".trimStart()) // => "test ": remove spaces on left Also trimLeft
console.log(" test ".trimEnd()) // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
console.log(s.concat("!")) // => "Hello, world!": just use + operator instead
console.log("<>".repeat(5)) // => "<><><><><>": concatenate n copies. ES6