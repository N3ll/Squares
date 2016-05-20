var LoginService =['$http', '$q', function ($http, $q) {
    return function (emailAddress, password, rememberMe) {

        var deferredObject = $q.defer();

        $http.post(
            '/Account/Login', {
                Email: emailAddress,
                Password: password,
                RememberMe: rememberMe
            }
        ).
        success(function (data) {
            if (data == "True") {
                console.log("true true");
                deferredObject.resolve({ success: true });
            } else {
                console.log("true false");
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            console.log("error");
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}]
