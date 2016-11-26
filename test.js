var pending = [];
var queue = (function() {

        function next() {
          var fn = pending.shift();
          if (fn) {
            console.log(fn,'FN');
            fn(next);
          }
        }

        return function(fn) {
          pending.push(fn);
          if (pending.length == 1) next();
        };
})();

 queue(function(){
    queue(function(){
      console.log(456);
    });
    console.log(pending);
    console.log(456);
  });
 console.log(pending);
  queue(function(){
    console.log(123);
  });
  console.log(pending);