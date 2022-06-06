

/*VALIDAÇÃO */
/** Mercadoria */
/* Mercadoria caso esteja vazio*/ 
function  ValiMercadoria(){
    const mercadoria = document.getElementById('nome_mercadoria-input');
  
    if(mercadoria.value == ''){
        mercadoria.style.border=" solid 2px red"
        mercadoria.placeholder = "Digite o nome do produto para cadastrar"
    }else{
        mercadoria.style.border=" solid 1px #979797"
    };
    
    
    
};
/**************************************************************************************/

/*VALOR */
/**Valor  caso esteja vazio */
function ValiValor(){
   
    const valor = document.getElementById('valor_mercadoria_input')
    if(valor.value == ''){
        valor.style.border=" solid 2px red"
      

    }else{
        valor.style.border=" solid 1px #979797"
  };


};


/**************************************************************************************/




/**************************************************************************************/
/* Previnir letras   */
function keylogger(log){

  const numeros = /[^0-9]/;
  if(numeros.test(log.key)){
    log.preventDefault();
    return
  };

  /*Formata o valor  */
  if (!log.target.value) return;
  forma = log.target.value.toString();
  forma = forma.replace(/[\D]+/g, "");
  forma = forma.replace(/([0-9 ]{1})$/g, ",$1");


  if (forma.length >= 6) {
    while (/([0-9]{4})[,|\.]/g.test(forma)) {
      forma = forma.replace(/([0-9]{1})$/g, ",$1");
      forma = forma.replace(/([0-9]{3})[,|\.]/g, ".$1");
    };
  };


  log.target.value = forma;
  
};



/**************************************************************************************/ 

