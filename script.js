//fs module in node


const fs = require('fs');

//writefile
fs.writeFile("test.txt" , "hey kaise ho", function(err){
   if(err) console.log(err);
   else console.log("done");
})

//copyfile
// fs.copyFile("hello.txt", "./copy/copy.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })


//appendfile
// fs.appendFile("test.txt" , "hey kaise ho", function(err){
//     if(err) console.log(err);
//     else console.log("done");
//  })

 //rename
// fs.rename("test.txt","hello.txt" , function(err){
//    if(err) console.log(err);
//    else console.log("done");
// })

//unlink
fs.unlink("hello.txt", function(err){
    if(err) console.log(err);
    else console.log("removed");
})