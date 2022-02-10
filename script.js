const q = document.getElementById('move')
const c = document.getElementById('campo')
var q_b_baixo, c_b_baixo, aux_des = 0, aux_sub = 0;
var trava = false
var posicao = 1;
var gravidade = 9.81;
var libera = false;



function inicio() {

  c.onmouseup = function () { libera = false}
  q.onmousedown = function () { libera = true ;}
  c.onmousemove = function () {if (libera === true) {posicao = window.event.y-25; aux_des = 0}}
  
  q.style.top = posicao + 'px'



  if(libera === false){

  q_b_baixo = q.getBoundingClientRect().y + 50
  c_b_baixo = c.getBoundingClientRect().y + 500

  if (posicao > 449) {
    posicao = 449;
    trava = true;
  }

  //////////////

  q.style.top = posicao + 'px'
  
  if (aux_sub < 0) { aux_des = 0; trava = false }
  
  // descida
  if (trava === false) {
    aux_des = aux_des + 0.01;
    posicao = posicao + aux_des;
    aux_sub = aux_des;
  }
  // subida
  if (trava === true) {
    aux_sub = aux_sub - (0.01 + ((gravidade) / 1000));
    posicao = posicao - aux_sub;
    
  }
}
}

setInterval(inicio, 1)


