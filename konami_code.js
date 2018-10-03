const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const alphabet = [65, 66, 67]

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === alphabet[index]) {
    index++;
    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  document.body('keydown'),function(event) {
    alert (event.which)
  })
}

innit ()
  
 