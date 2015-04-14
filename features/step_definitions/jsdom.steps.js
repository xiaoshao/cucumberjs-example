module.exports = function(){

	var jsdom = require("jsdom");

	this.Given(/^Login rea$/, function(callback){
			jsdom.env("https://www.realestate.com.au/my-real-estate/login",
				["http://code.jquery.com/jquery.js"], 
				function(error, window){
					var $ = window.$;
					var timmer = setInterval(function(){
						if($.active === 0){
							$("#emailInp").val("zengwei19861029@163.com");
							$("#pass").val("loveyou1314");
							$("rui-button-brand").click();
							clearInterval(timmer);
							callback();
						}
					}, 2000);

					// setTimeout(function(){
					// 	callback.fail();
					// }, 20000);
				});
		});

	this.When(/^Access my profile$/, function(callback){
			jsdom.env("https://www.realestate.com.au/my-real-estate/my-profile", 
				["http://code.jquery.com/jquery.js"], 
				function(error, window){
					var $ = window.$;
					var timmer = setInterval(function(){
						console.log($.active);
						if($.active === 0){
							console.log($("#firstname"));
							clearInterval(timmer);
							callback();
						}
					}, 2000);

					// setTimeout(function(){
					// 	callback.fail();
					// }, 20000);
				});
	});
};