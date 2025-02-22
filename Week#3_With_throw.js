let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json); // <-- no errors
   if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
alert( user.name );
} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
