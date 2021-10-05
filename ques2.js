let success = { 'message':'delayed success!' };
let error = { 'error':'delayed exception!' };
function resolvedPromise(){
  const myPromise = new Promise(function(resolvedPromise, rejectedPromise) {
    setTimeout(function(){ resolvedPromise(success); }, 500);
  });

  myPromise.then(
    function(success) {
      console.log(JSON.stringify(success));
    }
  );
}

function rejectedPromise(){
  const myPromise = new Promise(function(resolvedPromise, rejectedPromise) {
  
    setTimeout(function(){ rejectedPromise(error); }, 500);
  });

  myPromise.then().catch(
  	function(error) {
      console.log(JSON.stringify(error));
    }
  );
}

resolvedPromise();
rejectedPromise();