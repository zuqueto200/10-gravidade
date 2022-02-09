const q = document.getElementById('move')
const c = document.getElementById('campo')
var q_b_baixo = 0
var c_b_baixo = 0
var trava = false

var posicao = 1;
var velocidade = 1;
var gravidade = 9.81;

var aux_des = 0; // aceleracao descina
var aux_sub = 0; // aceleracao subida




  


function inicio() {

  q.onmousedown = function() { 
    velocidade = window.event.y-50
    aux_sub = 2
    trava=true
    aux_des = 0
  }



    q_b_baixo = q.getBoundingClientRect().y + 50
    c_b_baixo = c.getBoundingClientRect().y + 500

    if (posicao > 449) {
        posicao = 449;
        trava = true;
    }
    q.style.top = posicao + 'px'

    if (aux_sub < 0) { aux_des = 0; trava = false }

    // descida
    if (trava === false) {
        aux_des = aux_des + 0.01;
        velocidade = velocidade + aux_des;
        posicao = velocidade;
        aux_sub = aux_des;
    }
    // subida
    if (trava === true) {
        aux_sub = aux_sub - (0.01 + ((gravidade) / 1000));
        velocidade = velocidade - aux_sub;
        posicao = velocidade;
    }
}
setInterval(inicio, 1)


