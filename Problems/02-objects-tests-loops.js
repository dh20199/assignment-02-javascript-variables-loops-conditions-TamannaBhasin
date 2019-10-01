// in this exercise we explore objects (briefly), as well as
// conditionals (if & switch) and looping (while & for)



// Problem 1
// Write a function that returns  simple "Object Literal" when passed
// a set of 3 values
// so, returnObject("Italo", "Calvino", "novelist")
// should return
// { firstName : 'Italo',
//   lastName  : 'Calvino',
//   profession: 'novelist' }

/**
 * construct an object using the three inputs FIRST, LAST, and PROF
 * @param {string} first
 * @param {string} last
 * @param {string} prof
 * @returns {object} should have the properties FIRSTNAME, LASTNAME, and PROFESSION
 */
function returnObject (first, last, prof) {
  // it might be easiest here to declare a variable
  // var o = {};
  // and then add properties to it one by one
  // o.firstName = first
  // etc.
  // don't forget to return the object
}



// Problem 2
// Write a function that takes an "object literal" with the properties
// firstName, lastName, and profession
// and returns a sentence
// "firstName lastName was a profession"

// so for instance, we could write
// objectToSentence({firstName : 'Italo', lastName : 'Calvino', profession : 'novelist'})
// which would return
// "Italo Calvino was a novelist."

// Fun Fact:
// note that the following would produce the same result:
// objectToSentence(returnObject("Italo", "Calvino", "novelist""))
// (hold that thought for later!)


/**
 * construct a sentence from the name and profession of the person represented by OBJ
 * @param {object} obj 
 * @param {string} obj.firstName - first name of the represented person
 * @param {string} obj.lastName - last name of the represented person
 * @param {string} obj.profession - profession of that person
 * @returns {string} a sentence constructed from the object parameters 
 */
function objectToSentence (obj) {
  // remember you can refer to object properties using either of 2 methods
  // obj['propertyname']
  // or
  // obj.propertyname
  // note the quotes in the first options
  // also note: you need to change this next line!!
  return 'RETURNVALUE';
}


// Problem 3
// Write a function that takes an object as a parameter. If the object
// has a property "profession" with the value "novelist"
// then it will return the sentence
// "object.firstName object.lastName was a writer."
// otherwise it will return the sentence
// "object.firstName object.lastName was not a writer."

// so, if passed the parameter
// { firstName:"Italo", lastName: "Calvino", profession: "novelist"}
// it will return the now-familiar
// "Italo Calvino was a writer."
// but if passed
// {firstName: "Frida", lastName:"Kahlo", profession:"artist"}
// it will return
// "Frida Kahlo was not a writer."

/**
 * use OBJ.PROFESSION to construct a sentence telling us whether or not a
 * person was a writer
 * @param {} obj
 * @param {string} obj.firstName - first name of the represented person
 * @param {string} obj.lastName - last name of the represented person
 * @param {string} obj.profession - profession of that person
 * @returns {string} a sentence constructed from the object parameters
 */
function wasWriter (obj) {
  // in an if/else statement
  // it is acceptable to put the
  // "return" statement inside the conditional braces
  // so you can, e.g.,
  // if (...) {return A} else {return B}
}


// Problem 4
// Write a function that, when passed a string and an integer as parameters,
// will repeat the string "integer" times

// so if passed as parameters ("Oh Canada!", 5)
// it will return
// "Oh Canada!Oh Canada!Oh Canada!Oh Canada!Oh Canada!"

/**
 * repeat ASTRING ANUMBER times, and return
 * @param {string} aString
 * @param {number} aNumber
 * @returns {string}
 */
function stringIterator (aString, aNumber) {
  // remember a basic "for" loop has this structure:
  // for (var i = 0; i< SOMETHING; i++) {...statements...  };
}


// Problem 5
// Improve upon the above function by adding the iteration number in
// parentheses after the strng, and adding a line break between iterations.

// so, if passed as parameters ("Reconciliation before Celebration", 150)
// it should return
// Reconciliation before Celebration(1)
// Reconciliation before Celebration(2)
// Reconciliation before Celebration(3)
// ...
// ...
// Reconciliation before Celebration(150)

/**
 * return ASTRING iterated ANUMBER times on separate lines, with each line ending in a number from 
 * from 1 to ANUMBER
 * @param {string} aString
 * @param {number} aNumber
 * @returns   {string}
 */
function prettyIterator (aString, aNumber) {
  // be sure to check your results on this one; it has a trick. maybe 2. 
}



// Problem 6
// Write a function that, when passed an object 
// with attributes "fullName", "from", and "to", returns the string
// "object.fullName's reign was N years long."
// where "N" is the difference between from and to.

// so, if passed the parameter
// {
//    fullName : "Wilfred Laurier",
//    party    : "Liberal",
//    from     : 1896,
//    to       : 1911
// }

// it should return
// "Wilfred Laurier's reign was 15 years long."
// note: when you're testing, it will be easier to read your code if
// you assign the object to a variable, and then
// pass the variable to the function
// e.g.
// var willy = {
//    fullName : "Wilfred Laurier",
//    party    : "Liberal",
//    from     : 1896,
//    to       : 1911
// }
// computeReign (willy);

/**
 * 
 * @param {object} pm
 * @param  {string} pm.fullName
 * @param {string} pm.party
 * @param {number} pm.from
 * @param {number} pm.toparty
 * @returns {string} 
 */
function computeReign (pm) {
  // declare a variable, setting it equal to the
  // length of reign. Now declare another variable,
  // and construct the desired sentence using the appropriate
  // attributes and variables. remember that you may need to
  // "escape" the ' with \'
  // finally, makre sure you return the sentence as the value of the function
}



// Problem 7
// Write a function that takes as a parameter an ARRAY OF OBJECTS
// and returns a set of reign-computing sentences, one for each object.

// so, if invoked as follows:

// var ministers = [ {
// fullName: "Wilfred Laurier",
// party: "Liberal",
// from: "1896",
// to: "1911"
// }, {
//   fullName: "Robert L. Borden",
//   party: "Conservative/Unionist",
//   from: "1911",
//   to: "1920"
// }, {
//   fullName: "Arthur Meighen",
//   party: "Conservative",
//   from: "1920",
//   to: "1921"
// }, {
//   fullName: "William Lyon Mackenzie King",
//   party: "Liberal",
//   from: "1921",
//   to: "1926"
// }];
// 
// sentences (ministers);

// it should return:
// Wilfred Laurier's reign was 15 years long.
//   Robert L. Borden's reign was 9 years long.
//   Arthur Meighen's reign was 1 years long.
//   William Lyon Mackenzie King's reign was 5 years long.
//

/**
 * return a group of sentences written on separate lines.
 * @param {Array} list - each element of this array should be an
 * object with properties `fullName`, `party`,`from`, and `to`
 * @returns {String} a set of sentences, each on its own line, constructed from
 *  the properties of the individual objects comprising `list`
 */
function sentences(list) {
  // Hint: "ministers" is an ARRAY of OBJECTS. The simplest way to solve this problem
  // is to use the "for...of" loop syntax to loop through the array,
  // and the object[attribute] or object.attribute reference format to access
  // the internal components of the objects.
}

// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var exports = module.exports = {};
}
else {
  var exports = window.skeleton = {};
}


exports.returnObject = returnObject;
exports.objectToSentence = objectToSentence;
exports.wasWriter = wasWriter;
exports.stringIterator = stringIterator;
exports.prettyIterator = prettyIterator;
exports.computeReign = computeReign;
exports.sentences = sentences;
