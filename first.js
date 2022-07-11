var str = "hello-world";


var obj = {
    authorname : "Knaitkar",
    language : "C++"
}
console.log(str);
console.log(obj);
console.log(obj.authorname)


//nodejs -- modules --in nodejs we show know How to create a nodule -- HOW TO export a module -- HOw to import a module -- inside the code is javascript only

// module -- it is a file --eg : filename.js --inside javascript code only -- module can be shared and imported

// A module can share variables /objects/functions to other modules 

// we have to export these modules
/*

exports{
    var1,function1.Obj1
}

module1.js
var1,var2,function1,function2,Obj1,Obj2

*********
How to use the module1 in module2 

module2.js

var nri = require("./module1.js")
nri.var1 
nri.function1 
nri.obj1


******************

1) NOdejs had buffer datatype (not available in javascript) - used to store binary datatype while reading from a file or recieving packets over the network

2) process Object 

akv@akv-Inspiron-3576:~$ node
Welcome to Node.js v16.16.0.
Type ".help" for more information.
> process.pid
41235
> 

3) Defaults to local
NOdejs javascript is different from browsers Javascript when it comes to global scope
In the browsers javascript variable declared without var keyword become global
In node.js everthing becomes local by default

4) Access global scope 
IN a browser , global scope is the window object
IN nodejs , global object represent the global scope



*/