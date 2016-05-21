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
    self.rate = function (idRatedSet) {
        var result = SetsService.rateSet(idRatedSet)
         .success(function (data) {
             console.log(data.id);
             console.log("sets"+self.sets);

             for (var i = 0; i < self.sets.length; i++) {
                 console.log("out if" + self.sets[i]);
                 if (self.sets[i].id == data.id) {
                    console.log("in if"+self.sets[i]);
                     self.sets[i].rating++;
                 }
             }
             
         })
          .error(function (error) {
              console.log(error);
          });
    }

    //************** Uncomment in order to test with dummy data. No DB **********************************
    //self.sets = SetsService.getSets();
}]

