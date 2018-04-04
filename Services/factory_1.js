//// Implementing ReUsable Code for the Application
//Creating CalculationsFactory for Arithmetic Operations

app.factory('CalculationsFactory', function() {
    //Creating Object for CalculationsFactory
    var fact_Obj1 = {};
    //Creating functions through the reference of fact_Obj1
    //Creating add function
    fact_Obj1.Add = function(a, b) {
        return a + b;
    };
    //Creating Multiply function
    fact_Obj1.Multiply = function(a, b) {
        return a * b;
    };

    //Finally Return fact_Obj1
    return fact_Obj1;
});

//Creating FormatFactory for formatting the data
app.factory('FormatFactory', function() {
    //Creating Object for FormatFactory
    fact_Obj2 = {};
    //Creating functions through reference of fact_Obj2
    fact_Obj2.uppercase = function(str) {
        return str.toUpperCase();
    };

    //Finally Return fact_Obj2
    return fact_Obj2;
});