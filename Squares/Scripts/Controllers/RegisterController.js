var RegisterController = ['$routeParams', '$location', 'RegisterService', function ($routeParams, $location, RegisterService) {
    var self = this;
    self.registerForm = {
        userName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        img: ''
    };

    self.register = function () {
        var result = RegisterService(self.registerForm.userName, self.registerForm.emailAddress, self.registerForm.password, self.registerForm.confirmPassword,self.img);
        result.then(function (result) {
            if (result.success) {
                $location.path('/');
            } else {
                $location.path('/');
            }
        });
    }
    }]
