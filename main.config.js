require.config({
  baseUrl:'lib',
  paths: {
    "jquery": 'jquery',
    "underscore": "underscore",
    "backbone": "backbone",
    "math":"math"
  },
  shim:{
    'backbone':{
      deps:['underscore','jquery'],
      exports:'Backbone'
    },
    'jquery.scoll':{
      deps:['jquery'],
      exports:'jQuery.fn.scroll'
    }
  }
});

// test jquery
require(['jquery'],function ($) {
  console.log('jquery is ok :)');
});

// rest underscore
require(['underscore'],function (_) {
  _.each([10,20,30],function(num){
    console.log(num);
  });
});

//test math
require(['underscore','math'],function ( _,math ) {
  console.log(math.add(1,2,3,4,5,6,7));
})
