var count = 0

$('#tab_opener').click(function() {
  window.open('open.html');
})

$('#reset_counter').click(function() {
  resetCounter();
})


function resetCounter() {
  count = 0;
}

function setContentOnOpener() {
  count = count + 1;
  var countStr = count.toString()
  window.opener.setCounter(countStr);
  setCounter(countStr);
}

function setCounter(countStr) {
  var el = document.getElementById('count');
  el.innerText = countStr;
}
