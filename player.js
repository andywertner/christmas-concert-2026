(function () {
  var lyrics = document.getElementById("lyrics");
  var smaller = document.getElementById("smaller");
  var bigger = document.getElementById("bigger");
  var label = document.getElementById("size-label");
  if (!lyrics || !smaller || !bigger) return;

  var key = "concert-lyric-size";
  var size = 22;
  try {
    var saved = parseInt(localStorage.getItem(key), 10);
    if (saved >= 16 && saved <= 56) size = saved;
  } catch (err) {}

  function apply() {
    lyrics.style.fontSize = size + "px";
    if (label) label.textContent = size + "px";
    try {
      localStorage.setItem(key, String(size));
    } catch (err) {}
  }

  smaller.addEventListener("click", function () {
    size = Math.max(16, size - 2);
    apply();
  });
  bigger.addEventListener("click", function () {
    size = Math.min(56, size + 2);
    apply();
  });
  apply();

  var audio = document.querySelector("audio");
  var title = document.body.getAttribute("data-track-title");
  if (!audio || !title || !navigator.mediaSession || !window.MediaMetadata) return;
  audio.addEventListener("play", function () {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: "Christmas Concert 2026",
    });
  });
})();
