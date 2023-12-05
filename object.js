    
    var student = {                 // object name
        firstName:"Jane",           // list of properties and values
        lastName:"Doe",
        age:18,
        height:170,
        weight:80,
        result:{
            bangla:80,
            math :78,
            test: [
                {
                    test: 12
                },
                {
                    test: 14
                }
            ]
        },
        fullName : function() {   
            return this.firstName + " " + this.lastName;
        }
    }; 

    console.log(!false)


// 1 -> integer  
// '1' -> string 
// [1] -> array  
// {1} -> object   