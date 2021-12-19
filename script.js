(function (window) {
  var greetings = {};
  greetings.names = ["Yaakov", "John", "Jen", "Jason", "Paul",
  "Frank", "Larry", "Paula", "Laura", "Jim"];
  greetings.speak = function () {
 for (var i = 0; i < greetings.names.length; i++) {

  var firstLetter = greetings.names[i].charAt(0);
  if (firstLetter === "J") {
    console.log(byeSpeaker.speak(i));
   } 
   else {
     console.log(helloSpeaker.speak(i));
   }
}
}
window.greetings = greetings;
})(window);
greetings.speak();