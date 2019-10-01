// use this helper function to create <a> tags inside a given node
function addLink(node, text, url) {
    // clear the node of text; create a new "a" node; add the appropriate attributes;
    // append the new node as a child; return the original node.  
    return node;
}

// another helper function, if you want to replace spaces w/ "_"
function wikify(text) {
    // replace spaces w/ "_"; concatenate w/ Wikipedia prefix; return concatenated string
    return;
}


// take a class name as parameter, and linkify all such classes.  
function linkifyClass (c) {
    // get all elements of class c; loop through elements;
    // add link to each element
    
    // no need for a return value. 
}

// to actually do the work, we would call the function
// linkifyClass("PM");

// You can probably link all of the fields if you want:
var classesToWikify = ["PM", "Party", "From", "To"];

// what would you need to do next? Solution is left for the reader. 

// regardless, we'll create a meta-function that will be called when
// index.html hs finished loading entirely


function updatePage() {
  linkifyClass("PM");
}


// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var exports = module.exports = {};
}
else {
  var exports = window.exports = {};
}

exports.addLink = addLink;
exports.wikify = wikify;
exports.linkifyClass = linkifyClass;
exports.updatePage = updatePage;

