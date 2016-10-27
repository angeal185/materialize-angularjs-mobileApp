var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
	.when("/", {
        templateUrl : "assets/partials/index.html",
		controller : "myCtrl"
	})
	.when("/index", {
        templateUrl : "assets/partials/index.html",
		controller : "myCtrl"
	})
	.when("/article", {
        templateUrl : "assets/partials/article.html",
		controller : "myCtrl"
    })
    .when("/article-news", {
        templateUrl : "assets/partials/article-news.html",
		controller : "myCtrl"
    })
	.when("/angularTemplate", {
        templateUrl : "assets/partials/angularTemplate.html",
		controller : "myCtrl"
	})
	.when("/blog", {
        templateUrl : "assets/partials/blog.html",
		controller : "myCtrl"
	})
	.when("/chat", {
        templateUrl : "assets/partials/chat.html",
		controller : "myCtrl"
	})
	.when("/contacts", {
        templateUrl : "assets/partials/contacts.html",
		controller : "myCtrl"
	})
	.when("/login", {
        templateUrl : "assets/partials/login.html",
		controller : "myCtrl"
	})
	.when("/messages", {
        templateUrl : "assets/partials/messages.html",
		controller : "myCtrl"
    })
	.when("/news", {
        templateUrl : "assets/partials/news.html",
		controller : "myCtrl"
    })
	.when("/portfolio", {
        templateUrl : "assets/partials/portfolio.html",
		controller : "myCtrl"
    })
	.when("/profile", {
        templateUrl : "assets/partials/profile.html",
		controller : "myCtrl"
    })
	.when("/project", {
        templateUrl : "assets/partials/project.html",
		controller : "myCtrl"
    })
	.when("/signup", {
        templateUrl : "assets/partials/signup.html",
		controller : "myCtrl"
    })
	.when("/timeline", {
        templateUrl : "assets/partials/timeline.html",
		controller : "myCtrl"
    })
	.when("/todo", {
        templateUrl : "assets/partials/todo.html",
		controller : "myCtrl"
    })
	.when("/badges", {
        templateUrl : "assets/partials/badges.html",
		controller : "myCtrl"
    })
	.when("/buttons", {
        templateUrl : "assets/partials/buttons.html",
		controller : "myCtrl"
    })
	.when("/breadcrumbs", {
        templateUrl : "assets/partials/breadcrumbs.html",
		controller : "myCtrl"
    })
	.when("/cards", {
        templateUrl : "assets/partials/cards.html",
		controller : "myCtrl"
    })
	.when("/chips", {
        templateUrl : "assets/partials/chips.html",
		controller : "myCtrl"
    })
	.when("/collections", {
        templateUrl : "assets/partials/collections.html",
		controller : "myCtrl"
    })
	.when("/footer", {
        templateUrl : "assets/partials/footer.html",
		controller : "myCtrl"
    })
	.when("/forms", {
        templateUrl : "assets/partials/forms.html",
		controller : "myCtrl"
    })
	.when("/icons", {
        templateUrl : "assets/partials/icons.html",
		controller : "myCtrl"
    })
	.when("/navbar", {
        templateUrl : "assets/partials/navbar.html",
		controller : "myCtrl"
    })
	.when("/pagination", {
        templateUrl : "assets/partials/pagination.html",
		controller : "myCtrl"
    })
	.when("/preloader", {
        templateUrl : "assets/partials/preloader.html",
		controller : "myCtrl"
    });
});

app.controller('myCtrl', function($scope) {
    $scope.jsv = "javascript:void(0)";
	$scope.css = "assets/css/";
	$scope.js = "assets/js/";
	$scope.img = "assets/img/1.jpg";
});

app.run(function ($templateCache, $http) {
	$http.get('assets/partials/todo.html', { cache: $templateCache });  $http.get('assets/partials/timeline.html', { cache: $templateCache }); 
	$http.get('assets/partials/article.html', { cache: $templateCache });  $http.get('assets/partials/article-news.html', { cache: $templateCache });
	$http.get('assets/partials/badges.html', { cache: $templateCache });  $http.get('assets/partials/blog.html', { cache: $templateCache });
	$http.get('assets/partials/chat.html', { cache: $templateCache });  $http.get('assets/partials/buttons.html', { cache: $templateCache });
	$http.get('assets/partials/login.html', { cache: $templateCache });  $http.get('assets/partials/messages.html', { cache: $templateCache });
	$http.get('assets/partials/news.html', { cache: $templateCache });  $http.get('assets/partials/portfolio.html', { cache: $templateCache });
	$http.get('assets/partials/project.html', { cache: $templateCache });  $http.get('assets/partials/signup.html', { cache: $templateCache });
});



