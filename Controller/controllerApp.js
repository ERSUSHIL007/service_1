//Define Controller for the application

app.controller('ServiceApp_Ctrl', function($scope, ProductService) {
    //Creating Object
    $scope.products = [{ Id: 1, Name: 'MiA1', Price: 15000, Qty: 12 },
        { Id: 2, Name: 'MacBook', Price: 60000, Qty: 5 }
    ];

    //To add the prices of products
    $scope.PriceAmount = ProductService.AddProducts($scope.products[0].Price, $scope.products[1].Price);

    //To calculate MITotal
    $scope.MiTotal = ProductService.GetTotal($scope.products[0].Qty, $scope.products[0].Price);

    //To calculate MacTotal
    $scope.MacTotal = ProductService.GetTotal($scope.products[1].Qty, $scope.products[1].Price);

    //To format the data
    $scope.title = ProductService.upper('product table');

    //Now to calculate total bill amount
    $scope.TotalBillAmount = ProductService.GetTotal($scope.MiTotal, $scope.MacTotal)
});