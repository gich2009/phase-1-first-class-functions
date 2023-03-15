function receivesAFunction(callBackFunction){
  return callBackFunction();
}



function returnsANamedFunction(){
  const namedFunction = function (){
    return "Hello World.";
  }

  return namedFunction;
}

function returnsAnAnonymousFunction(){
  return () => "Hello World.";
}
