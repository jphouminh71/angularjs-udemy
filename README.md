# Getting Started

- To run different lessons just type in **live-server** on command prompt

### Introduction

- Most people find this tough to learn because it uses concepts and vocabulary that is hard to understand.
- Dont mimic code learn how and why something works. He will teach fundamental Javascript Principals.

### Big Words In AngularJS

As you are learning this course don't be afraid of the crazy vocabluar involved. Smart people who just were bad at expressing something wrote this.

### What is AngularJS trying to solve?

Want websites to feel more fluid and better overall experience. Problem before these frameworks is that Web Developers would always find themselves updating the DOM, doing business logic, handling events making a horrible mess.

Would it be awesome if we can just update one side and everything else updates automatically? This is the basic idea of frameworks like angular js. You just manage the Logic and Data and it will handle manipulating the DOM for you.
<br>

### Model View Whatever

Unlike MVC and MVVM, angularJS is know for MVW. What is MVW

- Suppose we have our data (The Model var firstName='Tony')
- Then we have the view (The things that people see, The html)
- Then you have, something else. This will bind the view and the model together via Controllers, ViewModels, or **whatever**. Essentially the basic principle is that this in effect will bind them together. \* "Angular has something that lets you bind the data to the view."
  <br><br>

# Fundamentals to Know

- Learning these will help us learn AngularJS better.
- Angular AngularJS actually doesn't require node because a competely client side framework. So I guess feel free to use whatever node version you want?
  <br><br>

# HTML Aside

### Custom Attributes

In this example a person created a style attribute that tells the browser to change how it is rendered. Move it 8px

```html
<div>
  <h1 style="8px">Hello World</h1>
</div>
```

Our goal is to know that we can write our own attirbutes that are not part of the html standard.

```html
<div>
  <!-- We want something to happen when we see this attribute -->
  <h1 reply="hello back!">Hello World</h1>
</div>
```

In Angular they do something with their own custom attributes denoted by **ng**. Because these attributes are available on the DOM angularJs is able to see those custom attributes and work with them on its own.

```html
<div>
  <!-- AngularJS will look for these custom attributes. -->
  <h1 ng-reply>hello world!</h1>
</div>
```

**Takeway**: Its important to know what custom attributes are available in AngularJS because they are fundamental to building these applications.
<br><br>

# Javascript Aside

### Global Namespace

One of the issues with Javascript is that it has global namespace. Meaning everything in the entire application can see everything. This becomes a problem when you start working with more people or if the codebase becomes large.

```js
// located in app.js
var person = "Steve";

function logPerson() {
  console.log(person);
}

// located in utility.js
var person = "Steve";

logPerson();
// UH OH
```

Given that we now have an issue here where the value of person is dependant on what file gets loaded last in the HTML. This flaw of JS can lead to terrible situations.

This is a simple containerization way to avoid these potential pitfalls. This is how we don't pollute the global namespace, also known as encapsulation.

```js
var stevesAppContainer = {};
stevesAppContainer.person = "Steve";

stevesAppContainer.logPerson = function () {
  console.log(stevesAppContainer.person);
};
```

By containerizing we can be sure that we are avoiding any global scope issues in other files.

When you build and AngularJS app there are similar concepts like this so that we can't accidentally have conflicts.
<br><br>

# Modules, Apps, and Controllers

### Modules

- AngularJS aims to solve the problem with Global Namespace in JS by allowing you to create modules with its built in _modules_ function

```js
// Example of creating a container
var myApp = angular.module('moduleName', [<'AssociatedDependencies'>])
```

- Now that we have this capability we can be sure that we are minimizing any chances of creating duplicate variables in thes same namespace.

### Controllers

- Controllers are what allow us to begin tying views to our models

```js
// Imagine you had a set of html wrapped in a <div> in the html file.
myApp.controller('controllerName', function(<dependecies that are inject from the container>){
    // What you'll end up seeing is that that there will be a usage of a lot of dependencies coming from the parent container.
    // You place models that you want to have control of in here
    // place any functions that you want to manipulate in here for that view as well.
})
```

<br><br>

# Javascript Aside: Dependency Injection

**THIS IS SUPER IMPORTANT**

**Depedency Injection:**: Giving a function an object, rather than creating an object insid a function, you pass it to the function.

```js
var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

function logPerson() {
  var john = new Person("John", "Doe");
  console.log(john);
}
logPerson();

// Person {firstName: 'John', lastName: 'Doe'}
```

In the example above that function is _dependant_ on the object _John_. Instead what we want is that for the function to have its dependency injected, so it doens't care what it is as long as it can assume it'll have what it needs to work with.

```js
// log person is no longer dependant on anything
// except what comes into its parameters.
var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

function logPerson(person) {
  console.log(person);
}

var john = new Person("John", "Doe");
logPerson(john);

// Person {firstName: 'John', lastName: 'Doe'}
```

- Now that we have this functionality setup we can now inject that person object from anywhere that we want it to come from. Can come from a database, creating a object, or uses that thing in C# where we say if we see this then give it that.

- AngularJS uses dependency injection when it comes to its controller and its other instances. It allows for a lot of decoupling of code so that it makes everything super unit testing.

# AngularJS: Scope Service

This is one of the most important functionalities in AngularJS. It helps us bind the views to our models within our controllers.

```js
var myApp = angular.module("myApp", []);

// The $scope is being injected from angularjs
myApp.controller("mainController", function ($scope) {
  $scope.person = { name: "Jonathan", lastname: "phouminh" };
  console.log($scope); // you can see everything in the scope here
});
```

- All AngularJS services start with the dollar sign, $
- By tying your variables and such in the scope the view can now view whats in that $scope.
  <br><br>

# Javascript Aside: Functions and Strings

- You can take a whole function in Javascript and convert it to a entire string representation. The way the coder actually typed it out.
- Given that you can see all of it you can parse it and make decision on what it says, this is how angularJS handles it.
  <br><br>

# How Dependency Injection works.

- This is just a quick background on how dependency injection truly works behind the scene.

```js
var searchPeople = function (firstName, lastName, height, age, occupation) {
  return "Jane Doe";
};

console.log(angular.injector().annotate(searchPeople));

//  ['firstName', 'lastName', 'height', 'age', 'occupation']
```

- Angular will see what parameteres are required and if it sees a name that it recongizes then it will pass in an object required to satisfy

```js
// angular will see that scope value and pass it in!
myApp.controller("mainController", function ($scope) {});
```

- AngularJS handles its own dependency injection automatically as long as you have stuff in there.
  <br><br>

# AngularJS: Getting Other Services besides $scope

- AngularJS.org has an api reference to all the different services available to be injected, so its important to learn about these.

Here is an example of utilizing the $log service that is provided by angularJS

```js
angularApp.controller("mainController", function ($scope, $log) {
  $log.log("log");
  $log.info("information");
  $log.warn("warning");
  $log.debug("debug");
  $log.error("this is an error");
});
```

Here is an example of the $filter service

- This service filters strings for you

```js
angularApp.controller("mainController", function ($scope, $log, $filter) {
  $log.log("log");
  $log.info("information");
  $log.warn("warning");
  $log.debug("debug");
  $log.error("this is an error");
});
```

These are just a few examples of a lot of services that are available for us as long as we follow the angularJS structure provides us with this functionality.

You can also load different modules that dont come with the base AngularJS package.

```js
// app.js
// Our application module must reference it as a dependency
var angularApp = angular.module("angularApp", ["ngMessages"]);

// index.html
<script src="//code.angularjs.org/1.8.2/angular-messages.min.js"></script>
...
...
...
<div class="container">
      <!-- The controller 'mainController' now controls this view. -->
      <div ng-controller="mainController">
        <form name="myForm">
          <label>
            Enter text:
            <input
              type="email"
              ng-model="field"
              name="myField"
              required
              maxlength="15"
            />
          </label>
          <div ng-messages="myForm.myField.$error" role="alert">
            <!-- Message for when no value is entered -->
            <div ng-message="required">
              Please enter a value for this field.
            </div>
            <!-- Message for when its not a valid email format -->
            <div ng-message="email">
              This field must be a valid email address.
            </div>
            <!-- Message for when its not a 15 character string -->
            <div ng-message="maxlength">
              This field can be at most 15 characters long.
            </div>
          </div>
        </form>
      </div>
```

### ngResource

- This one is important, it allows us to use $resource object
  <br>

In general, what this lesson is about is that there are tons of services out there and modules that contain more services. What you need to know is really what services you are going to be using and how they work.

1. Grab the script url and place it in the html
2. If it is a module then add is a depedency in the main application module
3. Add any service objects that you want to use from those modules in any controllers that might use them.
   <br><br>
   <br>

# Javascript Aside: Arrays and Functions

Here is just a basic array that you can create.

```js
var things = [1, 2, 3];
console.log([1, 2, 3]);
```

<br>
The oddity about JS arrays is that you can mix anything you want into array since its not strict one what kind of elements you have in the arrays.

```js
var things = [
  1,
  2,
  function () {
    alert("hello");
  },
];

// you can actually call the function given you know where it is.
things[2]();

// alert message appears saying 'hello'
```

<br><br>

# Dependency Injection and Minification

We have currently discussed how AngularJS handles dependency injection, but there is actually another way it does it as well.

**Minification**: This is the process of compressing a file so that it is faster to downloaded. We normal add _.min_ to denote files that have been minified. It will remove open spaces and even rename variables to one letter if they can.

This practice is something you should really do in real life environments so that you can serve clients better! But as you will learn it can cause some problems in AngularJS applications.

The problem is that in AngularJS if it renames our variables and such the dependency injection looks for specific names, but when the minifiers change names of variables it will **break** the angularJS services!
<br><br>

Here is the way you should actually do dependency injection in the real world.

```js
angularApp.controller("mainController", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $log.info("info");
  },
]);
```

- What we have done is pass in the service dependencies and the controller function as an **array**. By doing it this way we are able to continue to utilize minifiers because minifiers will never touch strings.
- The only thing we must really pay attention too is that we must ensure that the order of elements in the array match the order of the function parameters as defined or else we'd get a mix up.
  <br><br><br>

# Scope and Interpolation

**Interpolation**: Creating a string by combining strings and placeholders.

```js
  // In generic JS
  var name = 'steve'
  var greeting = $"hello {name}";
```

In AngularJS in regards to our Views and controllers. Whatever is placed in a scope inside of a controller is visible to the HTML views that reference our controllers.

```js
// app.js controller
angularApp.controller("mainController", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.name = 'Jonathan'
  },
]);


// html subview
<div class="container">
      <!-- The controller 'mainController' now controls this view. -->
      <div ng-controller="mainController">
        <h1>Hello {{name}}</h1>
      </div>
</div>
```

- The way we say in the html that we are trying to access the scope is by using double curly brances `{{}}`

Scope is the glue that ties our controller with our views.

**SideNote:** Inspecting element shows the rendered code but the view source just shows DOM before any post-rendering happened.

### $timeout

This is another dependency that you will encounter in production applications. It functions like setTimeout() but it is a angularJS override that tries to keep it in the applications

```js
angularApp.controller("mainController", [
  "$scope",
  "$log",
  "$timeout", // include the name, and the parameter
  function ($scope, $log, $timeout) {
    $scope.name = "Jonathan";

    // used just let setTimeout
    $timeout(function () {
      $scope.name = "everybody";
    }, 3000);
  },
]);
```

Doesn't go into much more explanation than this but you should read more about this online.
<br><br>

# Directives and Two Way Databinding

This section is hands down the most important section to understand.

- Directives are used all the time and they can sound complex

**Directives:** An instruction to AngularJS to manipulate a piece of the DOM. This could be like 'ADD A CLASS', 'HIDE THIS', 'CREATE THIS', etc. AngularJS prefers that we manipulate the DOM by using directives.
<br>

## The ng-model directive

- This directive `ng-model` is a avaiable directive that will bind elements using the directive to objects of the same name that were set in the scope.
- IMPORTANT: This directive is a TWO-WAY binding directive

```js
// html view
<input type="text" ng-model="handle" />;

// in app.js
$scope.handle = "foo";

// The input will now reflect on the value of 'handle'
```

```js
// html code
<div class="container">
      <!-- The controller 'mainController' now controls this view. -->
      <div ng-controller="mainController">
        <div>
          <label> What is your twitter handle? </label>
          <input type="text" ng-model="handle" />
          <hr />
          <h1>twitter.com/{{lowercasehandle()}}</h1>
        </div>
      </div>
    </div>

// app.js
angularApp.controller("mainController", [
  "$scope",
  "$filter",
  function ($scope, $filter) {
    $scope.handle = "";
    console.log("hellow");

    $scope.lowercasehandle = function () {
      return $filter("lowercase")($scope.handle);
    };
  },
]);
```

<br>

**Okay lets take a step back and recall Model View Whatever**

- Our _Model_ was the code in our `app.js`
- Our _View_ was the code in our `html`

But how does angular really bind these things. We area going to learn how AngularJS binds them together, the _whatever_
<br><br>

# Watchers and the Digest Loop

- Recall that we are familar with the JavaScript event loop, listening for things to respond to like keypress, clicks, mouseovers, change. We manually keep track of these events by adding listeners.
- In AngularJS it will automatically add these listeners without us having to actually implement them. It will also add on what is called _the angular context_ aka everything on that is going in the angularJS architecture that you have created.

As you create elements that are tracked by angular js like `ng-model`. They will be added to the _watchers_ and then go though the _digest loop_. The digest loop goes through the list of watchers and sees if anything has changed, if so then it will update the value and all the elements that use it.

This digest loop is triggered by the event loop.

**IMPORTANT**: When you are working with external APIs that are not apart of AngularJS architecture you need to work with the `$apply` depenedency. So things like `setTimeout` or `JQUERY` when you're writing some code for that you'll need to write you angular funcitonality likes this

```js
// setTimeout example

setTimeout(() => {
  $scope.$apply(function () {
    $scope.handle = "newtwitterhandle";
    console.log("scoped changed");
  }, 3000);
});
```

You have to write the code this way otherwise the digest loop will have no idea to pay attention to anything happening in there during the next digest loop cycle.
<br><br>

Again, the **whatever** part of the part of the **Model, View, Whatever** architecture of AngularJS is this mechanism of the _digest loop_ and the _watchlist_. The whatever part is this 'magic' that glues our views and controlloers together.
<br><br>

# Other Common Directives

API Reference for all other provided built in directives

> https://code.angularjs.org/1.8.2/docs/api

So far you have seen really useful directives such as and they tell the DOM what to do under certain circumstances

- `ng-app`
- `ng-controller`
- `ng-model`

And this small subset of directive already provide us with ton of usefulness to start building apps that bind models and views together. We will dive into other directives that are built in AngularJS that will help us manipulate the DOM futher
<br>

`ng-if`

- Takes in a javascript expression and displays element if true or false.

```js
<div class="alert" ng-if="handle.length !== characters">
  ...
</div>
```

- On each digest cycle this conditional will be checked if it should show itself or not
  <br>

`ng-show`

- Shows element of the DOM if condition is true

```js
<div class="alert" ng-show="handle.length !== characters">
  ...
</div>
```

<br>

`ng-hide`

- Hides element of the DOM if condition is true

```js
<div class="alert" ng-hide="handle.length > characters">
  ...
</div>
```

<br>

`ng-class`

- accepts a javascript object which is the name of the class
- injects class on condition

```js
<div
  class="alert"
  ng-class=" {alert-warning: handle.length < characters, alert-danger: handle.length > characters}"
>
  ...
</div>
```

<br>

`ng-repeat`

- This directive is useful when you want to output the same pieces of html, but specific to an item you want to continue to show for each element in the array

```js
//app.js
...
$scope.Rules = [{ruleName: "5 Characters", ruleName:"firstLetterCapitalized", ruleName: "lastLetterUncapitalized"}]
...

//html file
<ul>
  <li ng-repeat="rule in Rules"> {{rule.ruleName}} <li>
</ul>
```

<br>

`ng-click`

- This directive is for clickable elements, you pass it a function that you want to tie a method too when clicked.
- Remeber that you actually need to add the calling parenthesis when you are assigning it `()` it isn't automatically called like in React etc.

```js
//app.js

$scope.alertClick = function() {
  alert("clicked!");
}

//html file
<div>
  <input input="button" ng-click="alertClick()" />
</div>
```

<br>

`ng-cloak`

- This directive means that any element that is uses interpolation and I guess angular logic to NOT show the element on the client browser until AngularJS has had a chance to work on it.
- So you'll never have something on the client that looks like this for a split second

```html
Hello my name is {{ name }}
```

- So its probably best practice to use it so that you don't expose internals, trade-off is load time.

```js
//app.js

$scope.name = "jonathan";

//html file
<div>
  <span ng-cloak> {{ name }} </span>
</div>;
```

<br>

# Javascript Aside:

- We will talk about the way modern browsers communicate

### XMLHTTPRequest Object

- This is a client native object that lets us make HTTP requests to get data.
- This is a browser client native standard so standard browsers will support it.
- Its a bit complicated so most libraries that you use like `AJAX` utilize it but wrap a friendlier interface around it.

<br>

Heres how it looks under the hood

```js
var rulesRequest = new XmlHttpRequest();
rulesRequest.onreadystatechange = function () {
  $scope.apply(function () {
    if (rulesrequest.readystate == 4 && rulesrequest.status == 200) {
      $scope.rules = JSON.parse(rulesRequest.responseText);
    }
  });
};

rulesRequest.open("GET", "http://localhost:5000", true);
rulesRequest.send();
```

Turns out we don't have to do any of this. AngularJS provides us with a dependency that will handle all of this for us.
<br>

# External Data and the $http Service

- This is the way you should make HTTP request using angular so you dont have to use `$apply` when fetching data from a external server

```js
var apiRequestString = "https://localhost:7245/Demo/getRules";
$http({
  method: "GET",
  url: apiRequestString,
}).then(
  function successCallback(response) {
    console.log(response);
    $scope.rules = response.data.rules;
  },
  function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  }
);
```

<br>

# HTML / JS Aside Single Page Elements and the Hash

A Single Page Application is an application that truly fetches the html contents from the server once, then utilizes backend utilities to re-configure th page that was initially loaded.
<br><br><br>

# Routing / Templates and Controllers

To handle routing we use the `ngRoute` package that we download so we must import this package since its not natively provided.

```js
<script src="//code.angularjs.org/1.8.2/angular-route.min.js"></script>
```

First we include the new module in our dependencies like so

```js
var angularApp = angular.module("angularApp", ["ngRoute"]);
```

Then we actually have to configure it in the `.config` section of our module.

```js
angularApp.config(function ($routeProvider) {
  // behind the scenes JS will go get these elements, but we need to tie it in the view
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })
    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});
```

Then in our `index.html` page or where we want this behavior to be we will declare that it will be rendered with the `ng-view` directive.

```js
<div class="container">
  <div ng-view></div>
</div>
```

Every page is rendered view route will be rendered in that position of the `ng-view` directive.
<br><br>

# Javascript / Angular Aside: Singletons and Services

A **singleton** is a anti-pattern where there is one and only one copy of an object.

- When you create you're own service. They are singtons. The only exception to this rule is that the `$scope` is not a singleton a new one is created for each controller.
  <br><br>

# Creating your own service

**important**: Services we create are singletons.

Heres how you can create one with its own methods and variables.

```js
// Creating a Service
app.service("nameService", function () {
  // method contains everything you want in the service.
  var self = this;
  this.name = "John Doe";
  this.nameLength = function () {
    return self.name.length;
  };
});
```

So how do you get access to this service? Dependency Injection! Its automatically configured in AngularJS

```js
angular.controller("myController", [
  "$scope",
  "nameService",
  function () {
    console.log(nameService.name);
    console.log(nameService.nameLength);
  },
]);
```

What is the value of creating our own services? Because we are on a single page application all of our services can be stateful such that even on different page loads we can have services store data and contain data that we want to reference throughout the application.

Will AngularJS include any variables inside of the digest loop for my custom services? NO! Recall that the digest loop only is fired when things change inside of the `$scope` and our new services don't have one, so we need to add anything we would like to automatically be tracked and updated to the `watchlist` for th digest loop to look at.

Here is an example for a variable in our custom service that we tie into a textbox in the UI

```js
// customService
app.service("nameService", function () {
  var self = this;
  this.name = "John Doe";
  this.nameLength = function () {
    return self.name.length;
  };
});

// controller code
app.controller("mainController", [
  "$scope",
  "$log",
  "nameService",
  function ($scope, $log, nameService) {
    $scope.nameServiceName = nameService.name;
    $scope.nameServiceNameLength = nameService.nameLength();

    // input the name of the scope variable that is being tracked
    $scope.$watch("nameServiceName", function () {
      nameService.name = $scope.nameServiceName;
    });

    $scope.displayServiceStuff = function () {
      $log.info(nameService.name);
    };
  },
]);

// View Code
<input type="text" ng-model="nameServiceName" />;
```

Recap this is a very powerful thing because we are able to share state or data across different pages of the application! So an application for this would be to access persistant storage like cookies or local storage and then load them into a service to share across different pages.

- You'll also learn about `Factories`, they are very similar to Services but you'll have to dive into this stuff on your own.

<br><br>

# Javascript / Angular Aside

We will talk about a choice that angular made about Variable name and Normalization

**Normalize**: To make something consistent to a standard. Or making strings of Text consistent to a standard.

# Custom Directives aka Custom Components

One of the big problems with HTML is that you have predefined tags that you are limited to use.

- `div`
- `h1`
- `span`

Modern web architecture is leaning towards creating re-usable components. Custom Directives let us create components that we can inject into the DOM allowing us to re-use a lot of code.

When we write our own directives they must be in

> camelCase

> learn-and-understand-angularjs == learnAndUnderstandAngularjs

format or else it won't convert across to standard HTML format.

```js
// creating a new directive in app.js
app.directive("searchResult", function () {
  return {
    templateUrl: "views/card.html",
    restrict: "E",
  };
});

// how you create it in HTML
<h1>Search Results</h1>
<div>
  <search-result> </search-result>
</div>
```

For the `restrict` parameter there are differnt specificities

- A = Attribute
- E = Element
- C = ClassNames
- M = Comments

Directives by default also also have access to their parent scopes, so you can use anything above it. This can actually be a little bit dangerous because it can cause unknown side effects. Luckily we can isolate the scope of a directive by adding this following property during the directive creation time.

```js
scope: {
  camelCaseAttribute: '@', // text value
  camelCaseAttribute: '@', // text value
}
```

By declaring the scope we have now declared that this directive will have its own scope and it will not be sharing anything from its parent page.

> ‘@’ – Text binding / one-way binding

> ‘=’ – Direct model binding / two-way binding

> ‘&’ – Behavior binding / Method binding

Directives also by default do not allow children elements nested in side of the, so you need to set `transclude` equal to `true`

Heres how you repeat over shit

```js
// creating a new directive
app.directive("searchResult", function () {
  return {
    templateUrl: "directives/card.html",
    scope: {
      person: "=",
    },
    restrict: "E",
  };
});

app.controller("mainController", [
  "$scope",
  "$log",
  "nameService",
  function ($scope, $log, nameService) {
    $scope.nameServiceName = nameService.name;
    $scope.nameServiceNameLength = nameService.nameLength();
    $scope.people = [
      { name: "Jonathan", address: "123 Pinon Way" },
      { name: "Rick", address: "123 Pinon Drive" },
      { name: "Satan", address: "333 Pinon Drive" },
    ];

    // input the name of the scope variable that is being tracked
    $scope.$watch("nameServiceName", function () {
      nameService.name = $scope.nameServiceName;
    });

    $scope.displayServiceStuff = function () {
      $log.info(nameService.name);
    };
  },
]);

// directive code
<div class="card" style="width: 18rem; display: inline-block">
  <div class="card-body">
    <h5 class="card-title">{{ person.name }}</h5>
    <p class="card-text">{{ person.address}}</p>
    <a href="#" class="btn btn-primary">ADD</a>
  </div>
</div>

<h1>Search Results</h1>
<div>
  <input type="text" ng-model="nameServiceName" style="display: block" />
  <label style="display: block"> Searching for: {{ nameServiceName }}</label>
  <div ng-repeat="person in people">
    <search-result person="person"> </search-result>
  </div>
</div>
```

Here the Directive Code for doing passing methods

```js
// app.js
// creating a new directive
app.directive("searchResult", function () {
  return {
    templateUrl: "directives/card.html",
    scope: {
      person: "=",
      // the ampersand means method
      alertMethod: "&",
    },
    restrict: "E",
  };
});


app.controller("mainController", [
  "$scope",
  "$log",
  "nameService",
  function ($scope, $log, nameService) {
    $scope.nameServiceName = nameService.name;
    $scope.nameServiceNameLength = nameService.nameLength();
    $scope.people = [
      { name: "Jonathan", address: "123 Pinon Way" },
      { name: "Rick", address: "123 Pinon Drive" },
      { name: "Satan", address: "333 Pinon Drive" },
    ];

    // The method we are trying pass down
    $scope.alertSomething = function (text) {
      alert(text);
    };

    // input the name of the scope variable that is being tracked
    $scope.$watch("nameServiceName", function () {
      nameService.name = $scope.nameServiceName;
    });

    $scope.displayServiceStuff = function () {
      $log.info(nameService.name);
    };
  },
]);

// html view
<h1>Search Results</h1>
<div>
  <input type="text" ng-model="nameServiceName" style="display: block" />
  <label style="display: block"> Searching for: {{ nameServiceName }}</label>
  <div ng-repeat="person in people">
    <search-result person="person" alert-method="alertSomething(person)">
    </search-result>
  </div>
</div>


// directive partial
<div class="card" style="width: 18rem; display: inline-block">
  <div class="card-body">
    <h5 class="card-title">{{ person.name }}</h5>
    <p class="card-text">{{ person.address}}</p>
    <a
      href="#"
      class="btn btn-primary"
      ng-click="alertMethod({person: person.name})"
      >ALERT</a
    >
  </div>
</div>

```

<br><br>

# Understanding Compile and Link for Directives

When we build custom directives you may stumble across these terminologies

**Compile**: When building code, the _compiler_ converts code to a lower-level language.

- You are able to change the elements on the fly before they get used. Can do things like remove attributes or removing classes. Prior to it being bounded to the scope. Editing the pure html source code.

**Link**: The linker is reponsible for generating a file that a computer can actually interact with.

- This is run everytime the directive IS used. So if you looped through 3 things against a directive it will run three times
- Prelink: don't play with this, not safe.
- Postlink: Do any edits here if you must. You now have the template and the model to work with in the given scope, the data that will actually go into the rendered html. You might want to do this if you want to do some final pre-processing before anything gets displayed to the user.

Honestly, these are very niche use cases but AngularJS gives you ability just in case you need it.

<br><br>

# Understanding Transclusion

**Transaclution**: Place a copy of one documentat a particuilar point inside another.

To be able to put child elements in a directive you have to use the directive `ng-transclude` for whever you want any child elements to sit inside of a directive.

```js
// app.js
app.directive("searchResult", function () {
  return {
    templateUrl: "directives/card.html",
    scope: {
      person: "=",
      alertMethod: "&",
    },
    restrict: "E",
    transclude: true,
  };
});
// parent html
<h1>Search Results</h1>
<div>
  <input type="text" ng-model="nameServiceName" style="display: block" />
  <label style="display: block"> Searching for: {{ nameServiceName }}</label>
  <div ng-repeat="person in people">
    <search-result person="person" alert-method="alertSomething(person)">
      <span> Results may not be valid </span>
    </search-result>
  </div>
</div>


// partial
<div class="card" style="width: 18rem; display: inline-block">
  <div class="card-body">
    <h5 class="card-title">{{ person.name }}</h5>
    <p class="card-text">{{ person.address}}</p>
    <ng-transclude> </ng-transclude>
    <a
      href="#"
      class="btn btn-primary"
      ng-click="alertMethod({person: person.name})"
      >ALERT</a
    >
  </div>
</div>

```

# Factories and Providers.
