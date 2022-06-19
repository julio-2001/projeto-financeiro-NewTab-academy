/*VALIDAÇÃO */


/** Mercadoria */
function  ValiMercadoria(){
  
  let mercadoria = document.getElementById('nome_mercadoria-input');
  let botao = document.getElementById('botao_estilo');

  if(mercadoria.value == ''){
    
    /* Mercadoria caso esteja vazio*/ 
    mercadoria.style.border=" solid 2px red";
    mercadoria.placeholder = "Digite o nome do produto para cadastrar";

    /* Desabilita o botao */
    botao.disabled = true;
    botao.style.background = 'red';
    botao.style.color = 'black';
    botao.style.cursor = 'not-allowed';

  }
  
  else{

    /* Abilita o button */
    mercadoria.style.border=" solid 1px #979797";
    botao.disabled = false;
    botao.style.cursor = 'pointer';
    botao.style.background = '#333333';
    botao.style.color = 'white';

  };
};
/**************************************************************************************/

/*VALOR */
function ValiValor(){
  
  const valor = document.getElementById('valor_mercadoria_input');
  let botao = document.getElementById('botao_estilo');

  if(valor.value == '' ){
    
    /**Valor  caso esteja vazio */
    valor.style.border=" solid 2px red";

     /* Desabilita o botao */
    botao.disabled = true;
    botao.style.background = 'red';
    botao.style.color = 'black';
    botao.style.cursor = 'not-allowed';

  }
    
  else{
    valor.style.border=" solid 1px #979797";

    /* Abilita o button */
    
    botao.disabled = false;
    botao.style.cursor = 'pointer';
    botao.style.background = '#333333';
    botao.style.color = 'white';

  };
};


/**************************************************************************************/




/**************************************************************************************/
function keylogger(log){
  
  /* Previnir letras   */
  const numeros = /[^0-9]/;

  if(numeros.test(log.key)){
    log.preventDefault();
    return
  };

  if (!log.target.value) return;
  forma = log.target.value.toString();
  forma = forma.replace(/[\D]+/g, "");
  forma = forma.replace(/([0-9]{1})$/g, ",$1");

  
  if (forma.length >= 6) {
    while (/([0-9]{4})[,|\.]/g.test(forma)) {
      forma = forma.replace(/([0-9]{1})$/g, ",$1");
      forma = forma.replace(/([0-9]{3})[,|\.]/g, ".$1");

    };
  };
  
  log.target.value = forma;
};