var LoginController = ['$routeParams', '$location', 'LoginService', function ($routeParams, $location, LoginService) {
    var self = this;
    self.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl
    };

    self.login = function () {
        console.log("in login")
        var result = LoginService(self.loginForm.emailAddress, self.loginForm.password, self.loginForm.rememberMe);
        result.then(function (result) {
            if (result.success) {
                if (self.loginForm.returnUrl) {
                    console.log("returnUrl");
                    $location.path(self.loginForm.returnUrl);
                } else {
                    console.log(" no returnUrl")
                    $location.path('/');
                }
            } else {
                console.log("error");
                $location.path('/profile');
            }
        });
    };
}]