/*Coleta todos os items e coloca no localStorage */
function testaFormulario(dados){
    dados.preventDefault();
    
    var listaRaw = localStorage.getItem('item')
    if(listaRaw != null && listaRaw != NaN ){
        var listaProdutos = JSON.parse(listaRaw);
    
    }else {
        var listaProdutos =[];
    };

    console.table(listaProdutos)


    listaProdutos.push({
        tipo:dados.target.elements['escolha'].value,
        mercadoria:dados.target.elements['nome_mercadoria-input'].value,
        valor:dados.target.elements['valor_mercadoria_input'].value

        .replaceAll(".", "")
        .replaceAll(",", ".")
    });

    console.log(typeof(valor))
    
 
    localStorage.setItem("item", JSON.stringify(listaProdutos) );
    listagemItem();
   
};

/**************************************************************************************//**************************************************************************************/
/*Lista todos os items com as informações do localStorage */
function listagemItem(){

    var contaBancaria = 0;
    
    var listaRaw = localStorage.getItem('item')
    if(listaRaw != null && listaRaw != NaN ){
        var listaProdutos = JSON.parse(listaRaw);
    
    }else {
        var listaProdutos =[];
    };

    currenLInes =[...document.querySelectorAll(' table.resumo tbody.resumo_extrato .resumo_extrato_item ')]
    currenLInes.forEach((element) => {
        element.remove();
        
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
          
            (function(){
                
                let transacao  = Number( listaProdutos[item].valor);
            
                
                if(listaProdutos[item].tipo == 'compra'){
                        
                    contaBancaria -= transacao;
                    return
                    

                }


                else if(listaProdutos[item].tipo == 'venda'){
                    
                    contaBancaria += transacao;
                    return


                };
        
            }());

        };

    } else if (listaProdutos.length === 0 ){
    
        /************************************   Caso Nenhuma transação seja feita  **************************************************/

        document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML += ( `
            <tr  class="resumo_extrato_item" style="display:flex;">

    
                <td style="margin:auto ;"   >
        
                    <h1 >    
                        Suas transações apareceram aqui
                    </h1>
            
                </td>
            </tr>`

        );   
    };
 /**************************************************************************************//**************************************************************************************/


    
    /*
    Lista as transaçóes cadastradas na pagina
    */
    (function(){
            
        if(listaProdutos.length >= 1){

            curren = [...document.querySelectorAll(' table.total tfoot.total_resumo .total_resumo_valor     ')];
            curren.forEach((element) =>{
                element.remove();
            });


            document.querySelectorAll('table.total tfoot.total_resumo').item(0).innerHTML = (`

                <tr class="total_resumo_valor">
                    <th  id="total_resumo_item_total"> TOTAL </th> 
                    <th  id="total_resumo_item_dinheiro">     ${ formatterCurrency(Number(contaBancaria))}    </th> 
                
                </tr>


                <tr>
                    <th id="total_resumo_resultado" >    ${(contaBancaria)  > 0 ? "[LUCRO]":"[PREJUIZO]"}    </th>
                </tr>`
   

            );

        } else {
            document.querySelectorAll('table.total tfoot.total_resumo').item(0).innerHTML = (``);
     

        };

    })();

};

listagemItem();
/**************************************************************************************//**************************************************************************************/
/* Apaga todos os dados  */
function ResetDados(){
    
    let clearT = confirm('Deseja LIMPAR todos os DADOS?');
    
    /*Validação para limpar*/
    if(clearT == true){

        /*Limpa o extrato*/
        document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML = '';
        localStorage.clear("item");
        listaProdutos = [];
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



function formatterCurrency(value) {
    const valueFormat = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits:2,
      
    });
    return valueFormat;
}

/****************************************************************************************************************************************************************************/


/*Caso o app apresenta um erro no campo valor por um " emoji" */

function ResetaErro(){
    alert("Encontrado erro, o app resetara os valores para funcionamento") 
    document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML = '';
    localStorage.clear("item");
    listaProdutos = [];
    listagemItem();

};
/****************************************************************************************************************************************************************************/