module.exports = function (Folder, args) {

    if (args.file.length === 0) {
        args.file = ["ap-operators.md", 
                "ap-ops2.md",
                "ap-web.md",
                "slp-simple.md",
                "sp-load.md"]; 
    }

    args.src = ".";

    args.build = ".";


    if (!Folder.prototype.local) {
        Folder.prototype.local = {};
    }

    require('litpro-jshint')(Folder, args);

    var jade = require('jade');
    
    Folder.sync("jade" , function (code, args) {
        options = args.join(",").trim();
        if (options) {
            options = JSON.parse(options);
        } else {
            options = {'pretty':true};
        }
        return jade.render(code, options); 
    });
    
    var md = require('markdown-it')({
        html:true,
        linkify:true
    });
    
    
    Folder.prototype.local.md = md; 
    
    Folder.sync( "md", function (code, args) {
        return  md.render(code);
    });

};    
