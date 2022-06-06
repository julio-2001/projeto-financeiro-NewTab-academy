/*Coleta todos os items */
function testaFormulario(ex){
    try{

    
    ex.preventDefault();
   
   const tipoRaw = ex.target.elements['escolha'].value;
   const mercadoriaRaw =  ex.target.elements['nome_mercadoria-input'].value;
   var valorRaw = parseFloat( ex.target.elements['valor_mercadoria_input'].value)



   var listaRaw = localStorage.getItem('item');
   if(listaRaw != null){
       var listaProdutos = JSON.parse(listaRaw);
    }else {
       var listaProdutos =[];
   };

    listaProdutos.push({
        tipo:tipoRaw,
        mercadoria:mercadoriaRaw,
        valor:valorRaw
    })
    
    ;

    localStorage.setItem("item", JSON.stringify(listaProdutos) );
    listagemItem();
    }catch(err){
        alert('Encontrado erro')
        ResetaErro()
    }
};

/**************************************************************************************//**************************************************************************************/
/*Lista todos os items */
function listagemItem(eve){

    //try{

    
    var contaBancaria = 0
    


    var listaRaw = localStorage.getItem('item')
    if(listaRaw != null){
        var listaProdutos = JSON.parse(listaRaw);
    
    }else {
        var listaProdutos =[];
    };


    currenLInes =[...document.querySelectorAll(' table.resumo tbody.resumo_extrato .resumo_extrato_item ')]
    currenLInes.forEach((element) => {
        element.remove()
        
    });


    /**************************************************************************************//**************************************************************************************/
    /* Função que desenha a tabela com os valores informados */

    if(listaProdutos.length >= 1){

    


    for(item in listaProdutos){
        document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML += ( `
        <tr  class="resumo_extrato_item">

            <td >
            
                ${listaProdutos[item].tipo == 'compra'?'-':'+' }
                
            </td>

            <td id="item_nome"  style="width: 70%;">
            
                ${listaProdutos[item].mercadoria}

            </td>

            
            <td  id="item_valor" style="width: 60%;">

               ${formatterCurrency(Number( listaProdutos[item].valor)) }
            
            </td>

        </tr>`);


        /**************************************************************************************//**************************************************************************************/
        /*Função calcula o resultado da transação */
        (

            function(){
                
                let transacao  = Number( listaProdutos[item].valor)
            
                while(listaProdutos[item].tipo == 'compra'){
                    
                    contaBancaria -= transacao
                    console.log(contaBancaria)
                    console.log(`soma  ${console.log(typeof(transacao))}`)
                    break
                    
                }
                while(listaProdutos[item].tipo == 'venda'){
                    
                    contaBancaria += transacao
                    console.log(contaBancaria)
                    console.log(`soma  ${console.log(typeof(transacao))}`)
                    break

                }
            }

        )();
    }


 }else if(listaProdutos.length === 0 ){
    
    /************************************   Caso Nenhuma transação seja feita  **************************************************/

    document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML += ( `
    <tr  class="resumo_extrato_item" style="display:flex;">

    
        <td style="margin:auto ;"   >
        
            <h1 >    
                Suas transações apareceram aqui
            </h1>
            
        </td>
        
    </tr>`);
    };

 /**************************************************************************************//**************************************************************************************/
    (
        /* Funçao auto-chamada  "Inicia antes de iniciar a listagem"
        
        Responsavel por somar o total e desenha na tela
        
        */
        function(){
            
            if(listaProdutos.length >= 1){

            curren = [...document.querySelectorAll(' table.total tfoot.total_resumo .total_resumo_valor     ')];
            curren.forEach((element) =>{
                element.remove()
            });

            document.querySelectorAll('table.total tfoot.total_resumo').item(0).innerHTML = (`

            <tr class="total_resumo_valor">
                <th  id="total_resumo_item_total"> TOTAL </th> 
                <th  id="total_resumo_item_dinheiro">     ${ formatterCurrency(Number(contaBancaria))}    </th> 
                
            </tr>


            <tr>
                <th id="total_resumo_resultado" >    ${(contaBancaria)  >= 1 ? "[LUCRO]":"[PREJUIZO]"}    </th>
            </tr>
   
            `)


            console.log( document.querySelectorAll('table.total tfoot.total_resumo').item(0));
        }else{
            document.querySelectorAll('table.total tfoot.total_resumo').item(0).innerHTML = (`
            `)
        } 
        }
        
    )();
    //}catch(err){
        //alert('Encontrado erro')
        //ResetaErro()
    //}

};

listagemItem();
/**************************************************************************************//**************************************************************************************/
/* Apaga todos os dados  */
function ResetDados(clear){
    
    let clearT = confirm('Deseja LIMPAR todos os DADOS?');
    
    /*Validação para limpar*/
    if(clearT == true){

        /*Limpa o extrato*/
        document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML = '';
        localStorage.clear("item");
        listaProdutos = [];
    }else{ 
    };

   listagemItem();
};


/****************************************************************************************************************************************************************************/
var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
});
formatter.format(2500);


//try{
function formatterCurrency(value) {
    const valueFormat = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits:2,
      
    });
    
    return valueFormat;
}
//}catch(err){
   // alert('Encontrado um erro')
   // ResetaErro()
//}

/****************************************************************************************************************************************************************************/


/*Caso o app apresenta um erro no campo valor por um " emoji" */

function ResetaErro(){
    alert("Encontrado erro, o app resetara os valores para funcionamento") 
    document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML = '';
    localStorage.clear("item");
    listaProdutos = [];
    listagemItem()

}
/****************************************************************************************************************************************************************************/