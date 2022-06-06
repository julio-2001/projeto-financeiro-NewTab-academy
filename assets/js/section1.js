
/*********************************************************//*********************************************************/
/*Valida antes de enviar*/
function testaFormulario(sub){
    sub.preventDefault()
    
    var listaProdutosRaw = localStorage.getItem('item')
    if(listaProdutosRaw != null){

        var listaProdutos = JSON.parse(listaProdutosRaw)


    }else {
        var listaProdutos =[]
        alert('-1')

    }

    listaProdutos.push({

        tipo: sub.target.elements['escolha'].value,
        mercadoria:sub.target.elements['nome_mercadoria-input'].value,
        valor:sub.target.elements['valor_mercadoria_input'].value,
        

    })
    
   

    localStorage.setItem('item', JSON.parse( item))
   

}

/*********************************************************//*********************************************************/
/*VALIDAÇÃO*/ 

/*Mercadoria*/ 
function ValiMercadoria(e){
    const MaskMercadoria = document.getElementById('nome_mercadoria-input')
   
    /* Caso mercadoria esteja vazio*/
    if(MaskMercadoria.value == ''){
        MaskMercadoria.style.border = ' solid 2px red';
        MaskMercadoria.placeholder = 'Digite um nome para cadastrar';
        return false

    }else{
        MaskMercadoria.style.border = ' solid 1px #979797';
        return true

    };
};

/*valor*/ 
function ValiValor(e){
    const MaskValor = document.getElementById('valor_mercadoria_input');

    /* Caso valor esteja vazio*/
    if(MaskValor.value == ''){
        MaskValor.style.border = ' solid 2px red';
        return false

    }else{
        MaskValor.style.border = ' solid 1px #979797';
        return true
    };
};


function ValiValorNumeros(es){
    es.preventDefault();

    /*Previne comando copiar e colar   "CTRL + V "   */ 
    const MaskValor = document.getElementById('valor_mercadoria_input').onpaste = function(){
        return false
    };

    /*Previne letras*/ 
    if((/[0-9]+/g  ).test(es.key)){

      const money = es.target.value += es.key
          /*Formatação Valor*/  
        while(money){
            const format = new Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency:'BRL',
                maximumFractionDigits: 2 }).format(money)
            
                             
                console.log(format)
           
            break
        }
    };

    






};

/*********************************************************//*********************************************************/



/**/ 

/*********************************************************//*********************************************************/
/*Local Storage*/




var listaProdutosRaw = localStorage.getItem('item')
if(listaProdutosRaw != null){
    var listaProdutos = JSON.parse(listaProdutosRaw)
}else {
    var listaProdutos =[]
}



/*Pega os items no localstorage*/





/*TOTAL*/





/*********************************************************//*********************************************************/
/*EXTRATO*/
/*Função de listagem na tabela*/
function listagemItem(event){

    const TotalD = 0

    console.log(currenLInes =[...document.querySelectorAll(' table.resumo tbody.resumo_extrato .resumo_extrato_item ')  ])
    currenLInes.forEach((element) => {
        element.remove()
    });

    for(item in listaProdutos){

        document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML += ( `
        <tr  class="resumo_extrato_item">

            <td >
            
                ${( listaProdutos[item].tipo? '+':'-')}
            
            </td>

            <td id="item_nome"  style="width: 70%;">
            
                ${listaProdutos[item].mercadoria}

            </td>

            <td  id="item_valor" style="width: 60%;">

               R$ ${listaProdutos[item].valor}
            
            </td>

        


        </tr>`)

       

    }


};

listagemItem()





/*Função Calcular no total*/

function DesenhaTotal(){

    

  console.log(`  

    <tr class="total_resumo_valor">
        <th  id="total_resumo_item_total">Total</th> 
        <th  id="total_resumo_item_dinheiro"> </th> 
    </tr>


    <tr>
        <th id="total_resumo_resultado" >[  LUCRO  ]</th>
    </tr>   

    }`)

}








/*********************************************************//*********************************************************/
/*Limpar DADOS*/
function ResetDados(clear){
    
    let clearT = confirm('Deseja LIMPAR todos os DADOS?')
    
    /*Validação para limpar*/
    if(clearT == true){

        /*Limpa o extrato*/
        document.querySelectorAll( 'table.resumo tbody.resumo_extrato ').item(0).innerHTML = ''
        localStorage.clear()

        /* Colocar Animação  */

        return true
        listagemItem()

    }else{

        return false
    };

   
};



/*********************************************************//*************************************************/



