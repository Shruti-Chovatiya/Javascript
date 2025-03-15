const language = ["python", "Js", "c", "Cpp", "rb"]

// language.forEach(function (val) {
//     console.log(val);
    
// });


// language.forEach( (item) => {
//     console.log(item);
    
// });


// function printMe(item) {
//     console.log(item);
// }
// language.forEach(printMe)


// language.forEach((item, index, arr) =>{
//     console.log(item, index, arr);  
// })

const myCode = [
    {
        fileName : "py",
        fileType : "python"
    },
    {
        fileName : "js",
        fileType : "javascript"
    },
    {
        fileName : "cpp",
        fileType : "c++"
    }
]

myCode.forEach((item) => {
    console.log(item.fileName);
    console.log(item.fileType);
    
    
});