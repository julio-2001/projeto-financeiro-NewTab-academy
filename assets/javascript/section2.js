let listaProdutos = [];





function DesenhaTabela(){


for(item in listaProdutos){


    const total = 0;


    console.log(currenLInes =[...document.querySelectorAll(' table.resumo tbody.resumo_extrato .resumo_extrato_item ')  ])
    currenLInes.forEach((element) => {
        element.remove()
    });







    /**/ 
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

}