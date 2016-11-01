// spec.js

describe('Test 1 For Movie Battle', function() {
	
	it('should enter movies names for Battle and verify result', function() {
	//Navigate to Home page
	browser.get('http://localhost:3000/home');  
	browser.sleep(1000);
	 element(by.id('homeButton')).click();
	  browser.sleep(1000);
	  element(by.id('movieName')).sendKeys('Avatar');
	   browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  element(by.id('movieName')).sendKeys('Gladiator');
	  browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  
	  // var title=element(by.binding('moviesInfo[0].Title'));
	 
	  var movieOneTitle= element(by.xpath("//html/body/m-app/div/undefined/div/movies-iterator[1]/p/li[2]"));
	  expect(movieOneTitle.getText()).toEqual('Title: Avatar');
	   
	   var movieTwoTitle= element(by.xpath("//html/body/m-app/div/undefined/div/movies-iterator[2]/p/li[2]"));
	  expect(movieTwoTitle.getText()).toEqual('Title: Gladiator');
	  browser.sleep(1000);
	  element(by.id('btnInitiate')).click();
	  browser.sleep(1000);
	 
  });
});

describe('Test 2 For Movie Battle', function() {
	
it('should enter movies names for Battle and verify result as tie', function() {
	//Navigate to Home page
	browser.get('http://localhost:3000/home');  
	browser.sleep(1000);
	 element(by.id('homeButton')).click();
	  browser.sleep(1000);
	  element(by.id('movieName')).sendKeys('Sivaji');
	   browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  browser.sleep(1000);
	  element(by.id('movieName')).sendKeys('Simhadri');
	  browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  browser.sleep(1000);
	  // var title=element(by.binding('moviesInfo[0].Title'));
	  
	  element(by.id('btnInitiate')).click();
	  browser.sleep(1000);
	 var tie= element(by.xpath("//html/body/m-app/div/undefined/div/div[1]/h2"));
	  expect(tie.getText()).toEqual('Its a Tie !');
  });
  });
  
  describe('Test 3 For Movie Battle', function() {
	  
	it('should goto movie one page when click on re-select button', function() {
	//Navigate to Home page
	browser.get('http://localhost:3000/home');  
	browser.sleep(1000);
	 element(by.id('homeButton')).click();
	  browser.sleep(1000);
	  element(by.id('movieName')).sendKeys('Kabali');
	   browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  element(by.id('movieName')).sendKeys('Mr perfect');
	  browser.sleep(1000);
	   element(by.id('btnSubmit')).click();
	   browser.sleep(1000);
	  element(by.id('btnReselect')).click();
	  browser.sleep(1000);
	  var url= browser.getCurrentUrl()
	  
	  expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/movieOne');
  });
  
  it('should goto to home page when click on start over button', function() {
	//Navigate to Home page
	browser.get('http://localhost:3000/home');  
	browser.sleep(1000);
	 element(by.id('homeButton')).click();
	  browser.sleep(1000);
	  element(by.id('movieName')).sendKeys('Kick');
	   browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  element(by.id('movieName')).sendKeys('Singam');
	  browser.sleep(1000);
	   element(by.id('btnSubmit')).click();
	   browser.sleep(1000);
	    element(by.id('btnInitiate')).click();
	  browser.sleep(1000);
	  element(by.id('btnStartOver')).click();
	  browser.sleep(1000);
	  var url= browser.getCurrentUrl()
	  expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/home');
  });
  });
  
  describe('Test 4 For Movie Battle', function() {
	  
	it('doesnt allow to navigate movie two page without entering movie one name', function() {
	//Navigate to Home page
	browser.get('http://localhost:3000/home');  
	browser.sleep(1000);
	 element(by.id('homeButton')).click();
	  browser.sleep(1000);
	  // element(by.id('movieName')).sendKeys('Sivaji');
	  element(by.id('btnSubmit')).click();
	  expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/movieOne');
	  browser.sleep(1000);
  });
  
  it('doesnt allow to navigate movie battle page without entering movie Two name', function() {
	//Navigate to Home page
	browser.get('http://localhost:3000/home');  
	browser.sleep(1000);
	 element(by.id('homeButton')).click();
	  browser.sleep(1000);
	  element(by.id('movieName')).sendKeys('I Robot');
	   browser.sleep(1000);
	  element(by.id('btnSubmit')).click();
	  
	  // element(by.id('movieName')).sendKeys('Simhadri');
	   element(by.id('btnSubmit')).click();
	   browser.sleep(1000);
	  expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/movieTwo?firstMovie=I%20Robot');
  });
  });