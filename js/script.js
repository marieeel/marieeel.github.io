var index = 1;

function start(){

  var list = document.getElementById('col-gifs-list');
  var gifs = list.querySelectorAll('li');
  var fake_gif = document.getElementById('fake-gif');
  var fake_gif_content = document.getElementById('fake-gif-content');
  var gifs_length = gifs.length - 1;
  var arrow_up = document.getElementById('arrow-up');
  var arrow_down = document.getElementById('arrow-down');
  var close = document.getElementById('close');

  var gifs_array = [];
  gifs.forEach(function(gif) {
    gifs_array.push(gif);
    gif.addEventListener('click', function() {
      var gif_index = gifs_array.indexOf(gif);
      fake_gif_content.innerHTML = gif.innerHTML;
      if (gif_index < index) {
        if (gif_index === (gifs_length - 1)) {
          fake_gif.style.top = ((window.innerHeight / 2) * 0) + 'px';
        } else {
          fake_gif.style.top = ((window.innerHeight / 2) * -.5) + 'px';
        }
      } else if (gif_index > index) {
        if (gif_index === 1) {
          fake_gif.style.top = ((window.innerHeight / 2) * 1) + 'px';
        } else {
          fake_gif.style.top = ((window.innerHeight / 2) * 1.5) + 'px';
        }
      } else if (gif_index === index) {
        if (gif_index <= 0) {
          fake_gif.style.top = ((window.innerHeight / 2) * 0) + 'px';
        } else if (gif_index >= gifs_length) {
          fake_gif.style.top = ((window.innerHeight / 2) * 1) + 'px';
        } else {
          fake_gif.style.top = ((window.innerHeight / 2) * .5) + 'px';
        }
      }

      setTimeout(function () {
        fake_gif.classList.add('show-gif');
        setTimeout(function () {
          fake_gif.classList.add('big-gif');
        }, 500);
      }, 500);
    });
  });

  close.addEventListener('click', function() {

    setTimeout(function () {
      fake_gif.classList.remove('big-gif');
      setTimeout(function () {
        fake_gif.classList.remove('show-gif');
      }, 500);
    }, 500);

  });

  arrow_up.addEventListener('click', function() {
    if (index - 1 < 0) { return; }
    index--;
    var top = parseInt(list.style.top);
    if (index <= 0 || index == gifs_length - 1) {
      list.style.top = (top + 25) + 'vh';
    } else {
      list.style.top = (top + 50) + 'vh';
    }
  });

  arrow_down.addEventListener('click', function() {
    if (index + 1 > gifs_length) { return; }
    index++;
    var top = parseInt(list.style.top);
    if (index >= gifs_length || index == 1) {
      list.style.top = (top - 25) + 'vh';
    } else {
      list.style.top = (top - 50) + 'vh';
    }
  });

}
