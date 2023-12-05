
// a = d.getDay();

// console.log(d)

// const formattedToday = dd + '/' + mm + '/' + yyyy;

function formattedToday(date){
    var d = new Date(date);
   var day = d.getDate(); 
   var month = d.getMonth()+1;
   var year= d.getFullYear();
     return `${year}/${month}/${day}` ;
};
console.log(formattedToday('2023-12-05'));
