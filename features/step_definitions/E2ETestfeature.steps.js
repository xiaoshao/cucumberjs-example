module.exports = function(){
    var Browser = require("zombie").Browser;
    var browser = new Browser();
    var time = new Timer();
    this.Given(/^Access a page with (.*)$/, function(argument, callback){
        browser.visit("www.baidu.com", function(){
            Console.log("Access page with " + argument);
            console.log(argument);
            browser.fill("wd", "cucumber-js example");
            browser.pressButton("百度一下");
            console.log(time);
            callback();
        });
    });

    this.When(/^Wait for ajax finish$/, function(callback){
        browser.visit("wwww.baidu.com", function(callback){
            browser.wait(10000, function(){
                console.log(new Timer());
                callback();
            });
        });
    });

    this.Then(/^Check whether the components loaded when ajax finished$/, function(){
        browser.assert.element("#");
    });
};