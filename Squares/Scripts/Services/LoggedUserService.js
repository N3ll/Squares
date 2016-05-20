var LoggedUserService = ['$http', function ($http) {


    //************** Comment in order to test with dummy data and uncommnet the next section **********************************
    var LoggedUserService = {};
    LoggedUserService.getLoggedUser = function () {
        return $http.get('/UserProfile/GetLoggedUser');
    };
    return LoggedUserService;

    LoggedUserService.uploadSet = function (uploadedSet) {
        return $http.post(
              '/Set/UploadSet', {
                  set: customizedSet
              }
          );
    }

    //************** Uncomment in order to test with dummy data. No DB **********************************
    //var LoggedUserService = {};

    //LoggedUserService.getLoggedUser = function () {
    //    return {
    //        name: "Bradley Cooper",
    //        description: "Cooper garnered consecutive Oscar nominations from 2013 to 2015 for his roles in the romantic comedy Silver Linings Playbook.",
    //        address: "New York, USA",
    //        email: "cooper@mail.com",
    //        web: "www.bradleycooper.com",
    //        img: "/Content/images/profile.jpg",
    //        sets: [
    //            {
    //                id: 1,
    //                name: "MERILIN",
    //                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    //                rating: 89,
    //                thumbnail: "/Content/images/square.png"
    //            }, {
    //                id: 2,
    //                name: "FREAKS",
    //                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    //                rating: 49,
    //                thumbnail: "/Content/images/square-2.png",
    //            }, {
    //                id: 3,
    //                name: "CLOWN",
    //                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    //                rating: 100,
    //                thumbnail: "/Content/images/square-3.png",
    //                comments: [{
    //                    user: "Bob",
    //                    img: "/Content/images/bob.jpg",
    //                    text: "Those colors are amazing!"
    //                }, {
    //                    user: "Agnes",
    //                    img: "/Content/images/agnes.jpg",
    //                    text: "I would like to buy a unicorn with this pattern! "
    //                }],
    //                squares: [{
    //                    img: "/Content/images/square-3/1.jpg",
    //                    x: 1,
    //                    y: 1
    //                }
    //                   , {
    //                       img: "/Content/images/square-3/2.jpg",
    //                       x: 1,
    //                       y: 2
    //                   }, {
    //                       img: "/Content/images/square-3/3.jpg",
    //                       x: 1,
    //                       y: 3
    //                   }
    //                , {
    //                    img: "/Content/images/square-3/4.jpg",
    //                    x: 1,
    //                    y: 4
    //                }
    //                , {
    //                    img: "/Content/images/square-3/5.jpg",
    //                    x: 1,
    //                    y: 5
    //                }
    //               , {
    //                   img: "/Content/images/square-3/6.jpg",
    //                   x: 2,
    //                   y: 1
    //               }
    //                , {
    //                    img: "/Content/images/square-3/7.jpg",
    //                    x: 2,
    //                    y: 2
    //                }
    //                , {
    //                    img: "/Content/images/square-3/8.jpg",
    //                    x: 2,
    //                    y: 3
    //                }
    //                , {
    //                    img: "/Content/images/square-3/9.jpg",
    //                    x: 2,
    //                    y: 4
    //                }
    //                , {
    //                    img: "/Content/images/square-3/10.jpg",
    //                    x: 2,
    //                    y: 5
    //                },
    //                    {
    //                        img: "/Content/images/square-3/11.jpg",
    //                        x: 3,
    //                        y: 1
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/12.jpg",
    //                        x: 3,
    //                        y: 2
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/13.png",
    //                        x: 3,
    //                        y: 3
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/14.jpg",
    //                        x: 3,
    //                        y: 4
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/15.jpg",
    //                        x: 3,
    //                        y: 5
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/16.jpg",
    //                        x: 4,
    //                        y: 1
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/17.jpg",
    //                        x: 4,
    //                        y: 2
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/18.jpg",
    //                        x: 4,
    //                        y: 3
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/19.jpg",
    //                        x: 4,
    //                        y: 4
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/20.jpg",
    //                        x: 4,
    //                        y: 5
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/21.jpg",
    //                        x: 5,
    //                        y: 1
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/22.jpg",
    //                        x: 5,
    //                        y: 2
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/23.jpg",
    //                        x: 5,
    //                        y: 3
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/24.jpg",
    //                        x: 5,
    //                        y: 4
    //                    },
    //                    {
    //                        img: "/Content/images/square-3/25.jpg",
    //                        x: 5,
    //                        y: 5
    //                    }
    //                ]
    //            },
    //            {
    //                id: 4,
    //                name: "FREAKS2",
    //                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    //                rating: 21,
    //                thumbnail: "/Content/images/square-4.png",
    //            },
    //            {
    //                id: 5,
    //                name: "Puzzel",
    //                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    //                rating: 124,
    //                thumbnail: "/Content/images/square-5.jpg",
    //            },
    //            {
    //                id: 6,
    //                name: "GRANNY",
    //                description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    //                rating: 124,
    //                thumbnail: "/Content/images/square-6.jpg",
    //            }
    //        ]

    //    };
    //}

    //************** Leave always UNCOMMENTED **********************************
        return LoggedUserService;

    }];