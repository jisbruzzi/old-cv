let gulp = require("gulp")
const Combiner=require("gulp-file-combiner");
const regexIncluder=require("file-combiner-regex-includer")
const markdown = require('gulp-markdown');
const rename=require("gulp-rename");
const del=require("del");

gulp.task("compilar",function(){
    del.sync("index.html")
    gulp.src(["preindex.html","texto.md"])
        .pipe(markdown())
        .pipe(new Combiner([
            regexIncluder("# *include +(\\S+)\\s*",0),
            regexIncluder("// *include +(\\S+)\\s*",0),
            regexIncluder("<!-- *include +(\\S+)\\s*-->",0),
            regexIncluder("!\\s*(\\S+)\\s*!",0)
        ]))
        .pipe(rename(path=>{
            console.log(path);
            path.basename=path.basename.replace("preindex","index");
        }))
        .pipe(gulp.dest("./"))
        
})
gulp.task("watch",function(){
    gulp.watch(["preindex.html","texto.md"],["compilar"])
})
gulp.task("default",["compilar"])