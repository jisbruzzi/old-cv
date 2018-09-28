let gulp = require("gulp")
const Combiner=require("gulp-file-combiner");
const regexIncluder=require("file-combiner-regex-includer")
const markdown = require('gulp-markdown');
const rename=require("gulp-rename");
const del=require("del");
const tap=require("gulp-tap")

gulp.task("compilar-es",function(){
    del.sync("es/index.html")
    gulp.src(["*.html","texto.md"])
        .pipe(markdown())
        .pipe(new Combiner([
            regexIncluder("# *include +(\\S+)\\s*",0),
            regexIncluder("// *include +(\\S+)\\s*",0),
            regexIncluder("<!-- *include +(\\S+)\\s*-->",0),
            regexIncluder("!\\s*(\\S+)\\s*!",0)
        ]))
        .pipe(rename(path=>{
            console.log(path);
            path.basename=path.basename.replace("preindex-es","index-es");
        }))
        .pipe(gulp.dest("./es"))
})


var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task("watch",function(){
    gulp.watch(["preindex.html","texto.md"],["compilar"])
})
gulp.task("default",["compilar"])