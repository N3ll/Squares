var LandingPageController = ['SetsService', '$routeParams', function (SetsService, $routeParams) {
    //************** Leave always UNCOMMENTED **********************************
    var self = this;

    //************** Comment in order to test with dummy data and uncommnet the next section **********************************
    self.sets = [];

    self.getSets = function () {
            SetsService.getSets()
                .success(function (sets) {
                    self.sets = sets;
                    console.log(self.sets);
                })
                .error(function (error) {
                    self.status = 'Unable to load customer data: ' + error.message;
                    console.log(self.status);
                });
    }

    self.getSets();

    //************** Uncomment in order to test with dummy data. No DB **********************************
    //self.sets = SetsService.getSets();
}]

