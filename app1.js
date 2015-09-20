(function() {
	var app = angular.module('resumePage', []) ;

	app.controller('PWeb', function(){
		
	}) ;


	app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
    	this.tab = newValue ;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
})() ;

 
