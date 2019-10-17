# Reflection

## Question 1 
#### When and why should you use a function like `carefulSubract` rather than `subtract`? 
If the values inputted into ‘subtract’ are not numbers then the function will not have a number answer and will not work as intended. Careful subtract ensures that this problem does not occur as it has been told to subtract only if the inputted values belong to the number datatype. If not, it will tell the user that the function can only subtract numbers. This will ensure that there is less confusion as the problem is clearly defined. 

## Question 2 
#### What are `data types`, and how does data typing work in JavaScript? Name at least 4 built-in data JS data types. 
Data types are types of data that can be manipulated. JavaScript has two types of data; primitive and objects. Primitive data types are data types that are not objects and define immutable values, those that cannot be changed. Objects are data types that are referenced by an identifier. Data types allow the computer to properly read the information being presented. 
Four built-in data types are: 
1.	Number type 
2.	String type 
3.	Undefined type 
4.	Symbol type 

## Question 3 
#### What is the advantage to storing information as an object (`{firstName: 'Italo', lastName: 'Calvino', profession: 'novelist' }`) rather than as an array (`['Italo', 'Calvino', 'novelist']`)? Are there any disadvantages?
Storing information as an object means that it is easier to access and retrieve the specific values when inputting into the function as each value is defined. When a user uses the function they know exactly what values they should be inputting as the object properties clearly state what kind of information it wants: ‘firstName’, ‘lastName’, and ‘profession’. Properties within the object can also be accessed, changed, or added to through the use of the dot notation. However, this does have its disadvantages, as it is a little bit more complicated than creating an array and then using the index number to plainly denote what item would be accessed. 

## Question 4 
#### The function `sentences` transforms a data structure (in this case, a list of object literals) into a sequence of sentences. If the data structure were less predictable (e.g., if some properties of each object were occasionally missing, or if their data type was not always the same), what programming techniques could you use to ensure that your function produced a coherent output? Also, can you think of a more interesting "transform" that could be done with the same data structure?
If some properties of each object were occasionally missing, an if/else statement can be used.
This will ensure that a sentence or a specific word will be in place to replace the missing properties and that the function’s output is coherent. This will require that there be an if/else measure in place for every property that has the possibility of being omitted from the data structure. 
This same data structure can also be transformed into a sequence of sentences in a different format. For example, in a cascading form that puts a larger indent at the beginning of each consecutive sentence or in a line of sentences. They could also be transformed into a table format that will allow each property to be compared, as they will be placed next to one another. 
