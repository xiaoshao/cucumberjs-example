"use strict";

module.exports = function(){
    var Browser = require("zombie");
    var browser = new Browser();
    var time = new Date();
    
    this.Given(/^Access a page with (.*)$/, function(argument, callback){
        
        browser.visit("http://127.0.0.1:8000/", function(){
            // console.log("visiting...");
            // console.log(browser.document.body);
            // callback();
            // callback();
            // var begining = new Date().now();
            // console.log(begining);

            var begining = Date.now();
            browser.waitDuration = "5s";
            browser.wait(function(activeWindow, waitfor) {
                    // console.log(browser.document.body.innerHTML);
                return activeWindow.document.querySelector("#vvv1000") != null;
                // return false;
             }, function(error){
                if(error){
                    callback.fail(new Error(error));
                    browser.close();
                }
                // console.log(arguments.length);
                console.log("###########");
                console.log(error);
                console.log(Date.now() - begining);
                console.log("###########");
                // console.log("complete....");
                // console.log(browser.document.body.innerHTML);
                // console.log(browser.document.html);
                // console.log(browser.document);
                // return browser.document.getElementById('fgdsyufgasjg') != null;
                callback();
                // return false;
            });
            // console.log (browser.error);
        });
        
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
        // console.log(browser.document.body.innerHTML);
        browser.close();
        // browser.assert.element("#");
        callback();
    });
};