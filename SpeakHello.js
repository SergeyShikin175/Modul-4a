(function (window) {
  var helloSpeaker = {}; 
  helloSpeaker.speakWord = "Hello1 ";

  helloSpeaker.speak = function () {

  console.log(helloSpeaker.speakWord + window.names[i]);
}
window.helloSpeaker = helloSpeaker;
})(window);
