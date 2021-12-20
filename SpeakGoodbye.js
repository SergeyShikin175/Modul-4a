(function (window) {
    var byeSpeaker = {};    
  byeSpeaker.speakWord = "Good Bye ";
    
    byeSpeaker.speak = function () {

  console.log(byeSpeaker.speakWord + window.names[i]);
}
window.byeSpeaker = byeSpeaker;
})(window);
