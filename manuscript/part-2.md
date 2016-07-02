# Cookbook #

This is where we do a variety of specific examples of use. It mainly focuses on examples from the web stack. In particular, the programming is almost entirely JavasScript. 


### Constants

We can define constants once with explanations and then put them into whatever files need them. 

### Eval

### Boiler Plate

If you have need of boiler pate, then we can do that with some substituions for templating it as well.


### Making a Command

### Making a Directive

### Project Files

Often there are other files needing managing for a project other than just code. For example,  .gitignore, readme, package.json, ... These can all live in a single literate programming document tht generates these files. It could also be setup to have variables that you define once and then use when needed, such as the version number. 

### Making a lprc.js file

### Other languages

If you want to write in your own style or language or whatever, it can do that as well. Write in a way comfortable to you and have it compile it into any target language. 

Example: using hyphens for spaces in javascript. 

Example: math algorithm  

### Making a Plugin

### Data Entry

Dealing with little bits of data is a difficult problem. Here we look at inline data entry using a quick split style as well as reading in data from an external file. This pertains more to generating written output, then code itself, but it could be needed there as well such as if you want to pull in secrets from a file outside of the repo and put it in the compiled code that is also stored outside of the repo. 

### Conditional Compiling

We may want to do one thing or another depending on the compilation context, e.g., development vs production.


### Domain Specific Languages

We can write full blown domain specific languages and have them translated at build time. Or you can use standard languages that get transformed, such as markdown into html. 

### Linting

We can lint pieces of our code. It would even be possible to lint the pieces in isolation to see what shared variables might pop up. 

### Making a Subcommand

### Testing

Testing should be easy. Here we give a strategy for testing little bits of code (unit testing) as well as testing as combine the pieces (integrated testing). 

Having fake data specified as well as expected output is also easy. 

### Debugging

Debugging can be supported by conditional commands. You can set this up as you wish.
