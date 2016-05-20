var RegisterService = ['$http', '$q',function ($http, $q) {
    return function (userName,emailAddress, password, confirmPassword,img) {

        var deferredObject = $q.defer();

        $http.post(
            '/Account/Register', {
                UserName: userName,
                Email: emailAddress,
                Password: password,
                ConfirmPassword: confirmPassword,
                Img: img
            }
        ).
        success(function (data) {
            if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}]