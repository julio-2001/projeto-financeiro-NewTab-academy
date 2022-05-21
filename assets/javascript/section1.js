
                                /* VALIDAÇÃO  */ 
/* Validação de mercadoria */ 

function TestaCampoMercadoria(e){

    let MaskMercadoria = document.getElementById('nome_mercadoria-input')

    if(MaskMercadoria.value == ''  ){

        MaskMercadoria.style.border = 'solid 1px red'
        MaskMercadoria.placeholder=' Digite o nome da mercadoria para cadastrar'



    }else{
        MaskMercadoria.style.border= 'solid 1px #979797'
        
    }

   
}

/* Validação de Valor */ 
function TestaCampoValor(es){
    let MaskValor = document.getElementById('valor_mercadoria_input')
    if(MaskValor.value == ''  ){

        MaskValor.style.border = 'solid 1px red'
        



    }else{

        MaskValor.style.border= 'solid 1px #979797'

       
        
    }

}

function TestaCampoValorNumeros(es){
    es.preventDefault()

    if((/^[0-9 ,]+/g  ).test(es.key)){
        es.target.value += es.key
       /* * */
        
    }
    

}



function TestaEnvio(ev){
    let MV = document.getElementById('valor_mercadoria_input')
    let MM = document.getElementById('nome_mercadoria-input')

    if(MV == '' && MM == '' ){
        ev.preventDefault(ev)
        botao_estilo.style.background ='red'
        
    }
   

    

}



/********************************************************************************************************** */