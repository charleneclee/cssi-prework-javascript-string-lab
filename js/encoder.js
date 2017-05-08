var encode = function(userString){
  var userString = userString.toLowerCase()
  var userString = "userString".replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/ /g, "$")
  return userString
}
