(function (window) {
  var helloSpeaker = {};
  helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var speakWord = "Hello ";
  helloSpeaker.speak = function () {
for (var name in helloSpeaker.names) {

  console.log(speakWord + helloSpeaker.names[name]);
}
}
window.helloSpeaker = helloSpeaker;
})(window);
