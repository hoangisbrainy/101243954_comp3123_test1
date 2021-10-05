var input = ['PIZZA', 10, true,25, false, 'Wings'];
var output = [];
let myPromise = new Promise(function(myResolve, myReject) {
	for(var i of input){
    	if(typeof i == 'string'){
        	output.push(i.toLowerCase());
        }
    }
  myResolve(output);
});

myPromise.then(
  function(value) {console.log(output)}
);