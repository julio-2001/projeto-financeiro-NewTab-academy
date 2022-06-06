/***************************** Mercadoria *****************************/
/* Caso  mercadoria esteja vazio  * */
function ValiMercadoria(ValiM){
    
    const MaskM = document.getElementById('nome_mercadoria-input')
    if(MaskM.value == ''){
        MaskM.style.border = ' solid 2px red'
        MaskM.placeholder =  'Digite um nome para cadastrar'
        return false
        
    }else{
        MaskM.style.border = ' solid 2px #979797'
        return true
        
    }
    
}
/**********************************************************/

/***************************** Valor *****************************/

/* Caso  valor esteja vazio  * */
function ValiValor(ValiV){
    const MaskV = document.getElementById('valor_mercadoria_input')

    
    if(MaskV.value == ''){
        MaskV.style.border = ' solid 2px red'
        


        return false
        
        
    }else{
        MaskV.style.border = ' solid 2px #979797'
        return true
        
    }
}




function Keylooger(es){
    es.preventDefault()

    if((/[0-9]+/g  ).test(es.key)){
      const money = es.target.value += es.key
          /*Formatação Valor*/  


        if(money.length >= 3){

        
            while(money){
                var format = new Intl.NumberFormat('pt-BR', {
                    style: 'currency', 
                    currency:'BRL',
                    maximumFractionDigits: 2 }).format(money)      
                    console.log(format)

                break

            }
            
            
        }  

    };

};





/**********************************************************/