var CustomizableContoller = ['SetsService', '$routeParams', '$location', function (SetsService, $routeParams, $location) {
    //************** Leave always UNCOMMENTED **********************************
    var self = this;
    self.movable = [
        sq1 = {}, sq2 = {}, sq3 = {}, sq4 = {}, sq5 = {}, sq6 = {}, sq7 = {}, sq8 = {}, sq9 = {}, sq10 = {}, sq11 = {}, sq12 = {}, sq13 = {}, sq14 = {}, sq15 = {}, sq16 = {}, sq17 = {}, sq18 = {}, sq19 = {}, sq20 = {}, sq21 = {}, sq22 = {}, sq23 = {}, sq24 = {}, sq25 = {}];
    self.setId = $routeParams;

    //************** Comment in order to test with dummy data and uncommnet the next section **********************************
    self.customizableSet = {};

    self.getCustomizableSet = function () {
        if ($routeParams) {
            SetsService.getSet($routeParams)
            .success(function (set) {
                self.customizableSet = set;
                console.log(self.customizableSet);
            })
            .error(function (error) {
                console.log(error);
            });
        }
    }

    self.getCustomizableSet();


    self.save = function () {
        var setTobeSaved = { id: self.setId, squares: [] };

        var count = 0;
        for (var row = 1; row <= 5; row += 1) {
            for (var col = 1; col <= 5; col += 1) {
                setTobeSaved.squares[count] = {
                    img: self.movable[count].img,
                    x: row,
                    y: col
                }
                count += 1;
            }
        }

        console.log(setTobeSaved.squares);
        var result = SetsService.saveCustomizedSet(setTobeSaved)
         .success(function (data) {
             console.log(data.id);
             $location.path('/squares-set/:'+data.id);
         })
          .error(function (error) {
              console.log(error);
          });
    }

    //************** Uncomment in order to test with dummy data. No DB **********************************
    //self.customizableSet = SetsService.getClickedSet();
}]

