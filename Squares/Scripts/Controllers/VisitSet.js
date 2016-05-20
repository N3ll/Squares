var VisitSet = ['SetsService', '$routeParams', function (SetsService, $routeParams) {
    //************** Leave always UNCOMMENTED **********************************
    var self = this;


    //************** Comment in order to test with dummy data and uncommnet the next section **********************************
    self.clickedSet = {};

    self.getClickedSet = function () {
        if ($routeParams) {
            SetsService.getSet($routeParams)
            .success(function (set) {
                self.clickedSet = set;
                console.log("clicked"+JSON.stringify(self.clickedSet.squares));

            })
            .error(function (error) {
                console.log(error);
            });
        }
    }

    self.getClickedSet();


    //************** Uncomment in order to test with dummy data. No DB **********************************
    //self.clickedSet = SetsService.getClickedSet();


    //************** Leave always UNCOMMENTED **********************************
    self.getGridSize = function () {
        var num = Math.floor(Math.sqrt(self.clickedSet.squares.length));
        var arr = [];
        for (var i = 1; i <= num; i += 1) {
            arr.push(i);
        }
        return arr;
    };

    self.getSquare = function (row, col) {
        var temp = "";
        self.clickedSet.squares.forEach(function (sq) {
            if (sq.x === row && sq.y === col) {
                temp = sq.img;
            }
        });
        return temp;
    };
}];

