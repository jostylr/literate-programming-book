# Litpro

Here we briefly explain the tool that this book describes in detail. 

The idea of litpro is to write literate programs in markdown. This is not a
new idea. Markdown is a wonderfully simple format where paragraphs are normal
text and indented blocks (or fenced off blocks) are treated as code. 

Markdown has wide support and, in particular, GitHub supports viewing markdown
quite nicely. 

Litpro uses the [CommonMark](http://commonmark.org/) variant. This is a highly
specified version with edge cases laid out in detail. Anything it considers a
heading or a code block is what Litpro considers it to be. Some of the syntax
choices have been constrained by following this format, but for the most part,
these constraints have been most welcomed.

Litpro is written in JavaScript. The command-line tool runs using
[node.js](https://nodejs.org/en/) and can be installed using 
`npm install -g litpro`.  This is good for explorations and initializations.
Use it just as `litpro filename`.

Any serious use of the tool for the project should have litpro as a
development dependency in the package.json file and refer to it that way. When
installed as a dependency, the command can be located from the root directory
as `node_modules/.bin/litpro`

To initiate a package.json file and put litpro as a dev dependency try

    npm init
    npm install litpro --save-dev

You can hook up scripts in the package.json file to make it easier to run.
There are also configuration options and a file that we will get into
eventually. We will also detail setting up a watch system to continuously
compile and test the development. 

Litpro is free and open source. Issue request are most welcome and you can
find its repository at [litpro](https://github.com/jostylr/litpro)

The command-line interface is a thin wrapper around a library which is
platform agnostic (hopefully). The hope is to one day have a browser based
version and the decoupling of the library from that will be most useful. The
library can be found at 
[literate-programming-lib](https://github.com/jostylr/literate-programming-lib)

There are also plugins available. The convention is to call them `litpro-...`
For example `litpro-jshint` implements a jshint command for applying that
library to JavaScript code in order to find likely errors.

There is an older version called 
[literate-programming](https://github.com/jostylr/literate-programming) In due
time, this will be replaced with a fat litpo command client which will be
suitable for web development with batteries included. 

Much of the inspiration for this tool comes from web development. The number
of different languages and tools involved in web development coupled with best
practices makes web development quite difficult. The hope is that this tool
makes that easier. 

While targeted at web development, it is by no means the only use. It is
language agnostic and can be used for doing any type of text creation. It
takes in markdown files and produces text files. Some languages need much more
from an environment (such as code completion) which is orthogonal to this
issue. 

One possible solution to this is to use named language types for fenced code
blocks and, if the editor is made aware of it, using that to do code
completion, at least of the canonical language features.




