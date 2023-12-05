
// a = d.getDay();

// console.log(d)

// const formattedToday = dd + '/' + mm + '/' + yyyy;

function formattedToday(){
    var d = new Date();
   var a = d.getDay(); 
   var b = d.getMonth();
   var f = d.getFullYear();
     return `${a}/${b}/${f}` ;
};
console.log(formattedToday());

