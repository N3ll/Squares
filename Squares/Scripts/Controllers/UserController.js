var UserController = ['LoggedUserService', function (LoggedUserService) {
    //************** Leave always UNCOMMENTED **********************************
    var self = this;

    //************** Comment in order to test with dummy data and uncommnet the next section **********************************
    self.user = {};
    self.squares = [];
    self.setName = "";

    self.getUser = function () {
            LoggedUserService.getLoggedUser()
            .success(function (user) {
                self.user = user;
                console.log("clicked " + JSON.stringify(self.user.name));

            })
            .error(function (error) {
                console.log(error);
            });
    }
    self.getUser();


    self.upload = function () {
        console.log(self.setName);
        console.log(self.squares);

        var setTobeUploaded = {name: self.setName, squares: [] };

        var count = 0;
        for (var row = 1; row <= 5; row += 1) {
            for (var col = 1; col <= 5; col += 1) {
                setTobeUploaded.squares[count] = {
                    img: self.squares[count].img,
                    x: row,
                    y: col
                }
                count += 1;
            }
        }

        console.log(setTobeUploaded.squares);

        var result = LoggedUserService.uploadSet(setTobeUploaded)
         .success(function (data) {
             console.log(data.id);
             $location.path('/squares-set/:' + data.id);
         })
          .error(function (error) {
              console.log(error);
          });
    }


    //************** Uncomment in order to test with dummy data. No DB **********************************
    //self.user = LoggedUserService.getLoggedUser();
}];