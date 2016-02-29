var jshint = require('jshint').JSHINT;
var merge = require('merge');

module.exports = function(Folder, args) {

    var jshintcmd = function (input, args, name) {
        
        var doc = this;
        var options, globals;
    
        var log = [], err, i, lines, line,
            plug, globhash, file, ind, shortname;
    
        options = args[0] || {};
        
        globals = args[1] || [];
        
        if (args[2]) {
           file = '';
           shortname = args[2];
        } else {
            ind = name.indexOf(":");
            file = name.slice(0, ind);
            shortname = name.slice(ind +1, 
                name.indexOf(doc.colon.v, ind) );
        }
        
        options = merge(true, {unused:true}, options);
        
        if ( (plug = doc.plugins.jshint) ) {
            if (plug.options) {
                options = merge(true, plug.options, options);
            }
            if (plug.globals) {
                globals = globals.concat(plug.globals);
            }
        }
        
        if (globals) {
            globhash = {};
            globals.forEach( function (el) {
                var bits; 
                bits = el.trim().split(":");
                bits[1] = bits[1] === "true";
                globhash[bits[0].trim()] = bits[1];
            });
        }
    
        jshint(input, options, globhash);
    
    
        var data = jshint.data();
    
    
        lines = input.split("\n");
        for (i = 0; i < jshint.errors.length; i += 1) {
           err = jshint.errors[i];
           if (!err) {continue;}
           if (err.reason.indexOf("is defined but never used.") !== -1) {
               continue; //this is covered elsewhere. 
           }
           line = lines[err.line-1];
           if (line.trim().length < 4) {
                line = "\n---\n" + lines.slice(err.line-2, err.line+1).join("\n") + 
                    "\n---\n";     
           }
           log.push("E "+ err.line+","+err.character+": "+err.reason +
                "  "+ line.trim());
        }
        if (data.hasOwnProperty("implieds") ) {
            for (i = 0; i < data.implieds.length; i += 1) {
                err = data.implieds[i];
                log.push("Implied Gobal "+ err.line+": "+err.name +
                    "  "+ lines[err.line[0]-1].trim());
         }            
        }
        if (data.hasOwnProperty("unused") ) {
            for (i = 0; i < data.unused.length; i += 1) {
                err = data.unused[i];
                log.push("Unused "+ err.line+": "+err.name +
                "  "+ lines[err.line-1].trim());
         }            
        }
    
        if (log.length > 0 ) {
            doc.log ("!! JSHint:" + shortname+"\n"+log.join("\n"));
        } else {
            doc.log("JSHint CLEAN: " + shortname);
        }
    
        return input;
    };

    Folder.sync("jshint", jshintcmd );

    if (args.file.length === 0) {
        args.file = ["project.md"];
    }
    args.build = ".";
    args.src = ".";


};
