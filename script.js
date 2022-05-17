const q = document.getElementById('move')
const c = document.getElementById('campo')
var q_b_baixo, c_b_baixo, aux_des = 0, aux_sub = 0;
var trava = false
var posicaoy = 1;
var posicaox = 225;
var gravidade =9.8;
var libera = false;


document.getElementById('rangeG').value = gravidade
function inicio() {

  gravidade = document.getElementById('rangeG').value
 document.getElementsByClassName("forcaG")[0].innerHTML = gravidade



  c.onmouseup = function () { libera = false }
  q.onmousedown = function () { libera = true; trava = true }

  c.onmousemove = function () { if (libera === true) { posicaoy = window.event.y - 25; posicaox = window.event.x - 25; aux_des = 0 } }

  if (posicaox > 449) { posicaox = 449 }

  q.style.top = posicaoy + 'px'
  q.style.left = posicaox + 'px'



  if (libera === false) {

    q_b_baixo = q.getBoundingClientRect().y + 50
    c_b_baixo = c.getBoundingClientRect().y + 500

    if (posicaox > 449) { posicaox = 449 }
    if (posicaoy > 449) {
      posicaoy = 449;
      trava = true;
    }

    //////////////

    q.style.top = posicaoy + 'px'
    q.style.left = posicaox + 'px'

    if (aux_sub < 0) { aux_des = 0; trava = false }

    // descida
    if (trava === false) {
      aux_des = aux_des + 0.01;
      posicaoy = posicaoy + aux_des;
      aux_sub = aux_des;
    }
    // subida
    if (trava === true) {
      aux_sub = aux_sub - (0.01 + ((gravidade) / 1000));
      posicaoy = posicaoy - aux_sub;

    }
  }
}

setInterval(inicio, 1)


