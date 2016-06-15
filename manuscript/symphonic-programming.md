# Symphonic Programming

Here we want to explore reordering code. And to discuss it, let's first talk
about this. 

    a, b ....
    if (crazy) {
        // lots of lines
        c = D;
    } else if (slightlyCrazy) {
        // fewer lines
        c = D;
    } else {
        // very few lines
        c = D;
    }

So we have a conditional with some complicated bodies. And maybe we want to
move those complications elsewhere to make it easier to understand the
conditional flow. Typically, we would only have functions to do that role: 

    a, b, ...
    if (crazy) {
        c = lots(a, b);
    } else if (slightlyCrazy) {
        c = fewer(a, b); 
    } else {
        c = few(a, b);
    }

    function lots (a, b) {
        // lots of lines
        return D;
    } 
    
    function fewer(a,b) {
        // fewer lines
        return D;
    } 

    function few(a,b) {
        // very few lines
        return D;
    }

That works. But notice that we have introduced functions solely for the
convenience of human reading. It adds in the complexity of new scopes and makes
it harder to deal with error conditions effectively. It also means we never get
to see the compiled code in its context. 

In contrast, we can do the following with litpro.

    a, b ....
    if (crazy) {
        \_"lots"
        c = D;
    } else if (slightlyCrazy) {
        \_"fewer"
        c = D;
    } else {
        _"few"
        c = D;
    }

    ## Lots

    Here we ...
        
        //lots of lines

    ## Fewer

    And with less code we do 

        // fewer lines

    ## Few
   
        // very few lines

This will compile to the first block. It allows us to see in the literate
program the outline of that section and see the other bits separated. But if we
want to see all the context together as the computer sees it, we can do that as
well. We also do not lose the surrounding scope or placement in the flow. These
are powerful tools at times. 

## Syntax

The syntax for different blocks, at its simplest, is a header block making a
new section and then referencing that section with `\_"section name"` in a
code block. For example, 

    Some text

    ## Awesome details-jack

    We have some awesome code

        Yay

     but what? 

     ```
     yeah
     ```

     ## Importing

     Here we put in the awesome

        So jack says

        \_"awesome details-jack"

        And we get what we want

The above snippet will create


        So jack says
        
        Yay
        yeah

        And we get what we want


Note that for blank lines, if you want trailing or leading newline from a code
block, you need to use the fenced blocks.

Some symbols are allowed in the heading. Given how it is used in the syntax,
pipes are not allowed and quotes can lead to conflicts (obviously `## "Quote"`
has problems with `\_""quote""` but should be fine with `\_'"Quote"'`

This syntax works pretty well, but there are a couple of more tricks to learn.
In particular, it demonstrates that colons are not allowed in headings either
as they have been co-opted for something else. 

The available headers are those that convert into h1 to h4 headers, namely 
`#, ##, ###, ####` or either of the underline heading syntax. h5 and h6
headers are reserved for something else which is discussed later.

Header names should be unique. No guarantees as to what happens with repeated
header names is given though most likely it will concatenate the code blocks.

One can refer to the same block as many times as one likes.

One can use any of the quotes to start and the matching style to end: `"`,
`'`, `` ` ``

### Minor blocks

A minor block is designed for little snippets that seem to minor to create
another section heading, but that one wants to move out of the way anyway. In
a markdown toc, these will not appear nor do they need to be unique. 

A minor block is initiated with either a link whose title starts with a colon
or one whose target is completely empty. Let's assume this is in section
`bob`.

`[jane](# ":")` would create section `bob:jane` while
`[jack 2]()`  would create section `bob:jack 2`

Within section bob, we can reference it as `\_":jane"` or `\_":jack 2"` and
outside of bob, we need the full syntax of `\_"bob:jane"` and `\_"bob:jack 2"`

We can also do a save directive using section names as such 
`[whatever](#:jane "save:")` if we are in the bob section or
`[whatever](#bob:jane "save:")` if not. 

This works quite nicely in terms of being an actual link on GitHub version if
it is just the heading. For example, 

`[whatever](#bob-is-cool "save:")` will save the section "Bob is cool" and
link to. 

### Other literate program files

To use other literate program files, we use the load directive. We then use a
double colon syntax to refer to it. Let's assume we have a file called
`cool.md`. Then we can load it in a litpro document using 
`[great](cool.md "load:")`  and then reference section `bob:jane` in it using 
`\_"great::bob:jane"` The load syntax has the alias as the linkname (bit in
square brackets) but it can be omitted. In either case, the filename itself
can be referenced. That is, in the above example we can also use
`\_"cool.md::jane"`   


### Full Example

Here we have a full example with the different syntaxes being used. We will
load from two files and save to three.

load.md is the main entry point. One would compile it with `litpro -s . load.md` The `-s` says to look for any other loaded in the current directory (rather than the default of `src`. 

    _"| example load.md"

load2.md has some nice bits.

    _"| example load.md"

widget.js has some simple javacsript code. 

    _"| build -s . load.md, widget.js"

widget.css has some css styling for the widget

    _"| build -s . load.md, widget.css"

full.html has a full html with a widget embedded. In later sections, we will
see how to embed something useful inside such code, but for now we just take
the widget as a black box and put it in our code. 

    _"| build -s . load.md, full.html"


## Functions or reordering

A common point of debate is whether this reordering is significant. They often
argue that in modern languages, the ability to define functions in different
places allowed one to shift the code elsewhere. 

While true, this muddles the role of functions a bit. Functions are best used
to be repeated bits of code that are called over and over. In old JavaScript,
functions are also the only way to have scoped variables, but with the `let`
keyword, that has changed. Both are considerations for the computer and are
good reasons to use functions. 

But to use functions solely for human readable purposes at the expense of
increased complexity and cognitive load seems like a poor trade. Reordering
using literate programming allows one complete freedom in how to cut up the
code without any extra programming complexity. There is no wrestling with
scope because of that reordering. There is no increased levels of redirection
nor restrictions from redirecting from within the local code. It simply shifts
the placement for the sole purpose of humans reading the code. 

It is separation of concerns at its best. We have computer needs and we have
human needs. We need to cater to both. Most paradigms try to balance the two
needs simultaneously with various costs and trade-offs. This approach allows us
to satisfy both constituents with the small price of an extra compile (or
transpile) step. 

