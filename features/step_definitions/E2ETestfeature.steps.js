module.exports = function(){
    var Browser = require("zombie");
    var browser = new Browser();
    var time = new Date();
    this.Given(/^Access a page with (.*)$/, function(argument, callback){
        console.log(argument);
        callback();
        // browser.visit("www.google.com", function(){
        //     Console.log("Access page with " + argument);
        //     console.log(argument);
        //     browser.fill("wd", "cucumber-js example");
        //     browser.pressButton("百度一下");
        //     console.log(time);
        //     callback();
        // });
    });

    this.When(/^Wait for ajax finish$/, function(callback){
        callback();
        // browser.visit("wwww.google.com", function(callback){
        //     browser.wait(10000, function(){
        //         console.log(new Timer());
        //         callback();
        //     });
        // });
    });

    this.Then(/^Check whether the components loaded when ajax finished$/, function(callback){
        // browser.assert.element("#");
        callback();
    });
};