(function (window) {
  var byeSpeaker = {};
  byeSpeaker.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var speakWord = "Good Bye ";
  byeSpeaker.speak = function () {
for (var name in byeSpeaker.name) {

  console.log(speakWord + byeSpeaker.name[name]);
}
}
window.byeSpeaker = byeSpeaker;
})(window);
