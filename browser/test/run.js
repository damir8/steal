load('steal/rhino/rhino.js')

steal('steal/test/test.js', function(s) {
//	STEALPRINT = false;
	steal.test.module("steal/browser")
	
	steal.test.test("phantomjs", function(){
		load('steal/rhino/rhino.js')
		steal("steal/browser/drivers/phantomjs.js").then(function(){
			var browser = new steal.browser.phantomjs({
				print: true
			});
			browser
				.bind('myevent', function(data){
					s.test.equals(data.foo, 'bar', 'bind works')
					s.test.clear();
					browser.close();
				})
				.open('steal/browser/test/mypage.html')
				
			s.test.expect(1)
//			browser.injectJS('event.js')
//			var result = browser.evaluate(function(){
//				return MyCo.foo
//			})
//			steal.test.equals(result, "bar", "execute works")
		})
	})
})