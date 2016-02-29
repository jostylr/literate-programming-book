# JSHint

This is a plugin for [litpro](https://github.com/jostylr/literate-programming). Install that and then you can use this by requiring it in the lprc.js file. 

It is automatically included in [literate-programming](https://github.com/jostylr/literate-programming). 

This plugin provides a single command: `jshint`.  It takes three
arguments:  options, globals, name

Options should be an object containing [configuration options for
JSHint](http://jshint.com/docs/options/). This can be conveniently created
as an argument using the kv subcommand: `| jshint kv(unused, true() ) `

The second argument is an array for globals. Just write them out. If you
want to be able to write to them without a warning, use `:true` after the
name. So for example `jshint , arr($, console, require, state:true)`
would set those variables as globals and allow module to be written to. 

The third argument is a name to be written associated with it. The default
is roughly of the form `BLOCK: ... FILE: ...`
