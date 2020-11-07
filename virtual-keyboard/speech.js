window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.onresult = function(e) {
  const idx = event.resultIndex;
  const transcript = event.results[idx][0].transcript + ' ';
  if (e.results[idx].isFinal) {
    for (let i = 0; i < transcript.length; i++) {
      setTimeout(() => updateText(transcript[i], 1), i * 100);
    }
  }
};
recognition.onend = function() {
  if (keyboard.properties.microphone) recognition.start();
};
