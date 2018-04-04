// Implement ReUsable Code for the Application

//Creating ProductService 
app.service('ProductService', function(CalculationsFactory, FormatFactory) {
    //Creating functions for ProductService
    //creating add service
    this.AddProducts = function(prod1, prod2) {
        return CalculationsFactory.Add(prod1, prod2);
    };
    //Performing Multiply Function
    this.GetTotal = function(qty, price) {
        return CalculationsFactory.Multiply(qty, price);
    };
    //Performing Formatting of data
    this.upper = function(str) {
        return FormatFactory.uppercase(str);
    };
});