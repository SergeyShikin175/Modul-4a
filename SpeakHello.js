(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var speakWord = "Hello ";
  helloSpeaker.speak = function () {
for (var name in helloSpeaker.name) {

  console.log(speakWord + helloSpeaker.name[name]);
}
}
window.helloSpeaker = helloSpeaker;
})(window);
