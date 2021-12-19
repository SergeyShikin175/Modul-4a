(function (window) {
  var greetings = {};
  greetings.names = ["Yaakov", "John", "Jen", "Jason", "Paul",
  "Frank", "Larry", "Paula", "Laura", "Jim"];
  greetings.speak = function () {
 for (var i = 0; i < greetings.names.length; i++) {

  var firstLetter = greetings.names[i].charAt(0);
  if (firstLetter === "J") {
    byeSpeaker.speak();
   } 
   else {
     helloSpeaker.speak();
   }
}
}
window.greetings = greetings;
})(window);
greetings.speak();