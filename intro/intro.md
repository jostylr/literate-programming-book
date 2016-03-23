
{frontmatter}

# Introduction

This is a book that specifically covers the author's tool for doing literate
programming. The tool is [freely available via npm](https://www.npmjs.com/package/litpro), with [source code available on github](https://github.com/jostylr/litpro).

The tool implements a version of Don Knuth's idea of literate programming. The
basic idea of is to write code for being read and maintained rather than for
the need of the computer. One can reorder code, cut up code into different
snippets, promote comments to a top level, and do arbitrary transformations to
the input text before outputting for the code. 

This book covers both the idea and the tool. Most of it is about what this
specific tool does. 

Part I, which is The Basics, covers the 80% of needs and uses. It is a fairly
simple and straightforward concept. The freedom to break code up arbitrarily
is quite nice and this part goes into that quite a bit. 

Part II details more about what I term "artistic programming". This is very
much concerned with arbitrary actions and transformations of the compilation
phase. At its core, it takes input text, does some stuff to it, and gives an
output that is then arranged into the final code. The transformation is the
artistic part, the assembling of small snippets is the symphonic part. 

Transformations opens a wide world of possibilities and Part II delves into
various scenarios and how to deal with them. This is a bit of a cookbook
approach. 

Part III focuses on this as a tool for the web environment. The web stack is a
mess of different technologies, optimizations, and many files. The tool can
handle all of this and this is the place to explain it in detail. We conclude
the part with an explanation of the [writeweb service](https://writeweb.net),
which is an experimental tool to allow literate programming compiling on a
server. This is dangerous as the compilations can run arbitrary code, but
hopefully sufficient precautions have been taken. 

Part IV is a reference section. Every piece of syntax is
documented, from the format to the commands, directives, and subcommands. 

Part V is not included, but links are provided to PDFs of the various literate
programs that make up this tool. Yes, the tool compiles itself.


{mainmatter}

