window.addEventListener("load",()=>{
    
    // div[class="brjUfGeW CTPdOQUgl"] PARA QUANDO O FILTRO DE ITENS ESTIVER ATIVADO
    // div[class="brjUfGeW"] PARA QUANDO O FILTRO DE ITENS ESTIVER DESATIVADO
    // AMBOS APARECEM EM TODAS AS PAGINAS QUE CONTENHAM CONTEUDOS PARA VISUALIZAR EM LISTA COM FILTROS
    setInterval(()=>{        
        var filtroItensAtivado = document.querySelector('section[class="brjUfGeW CTPdOQUg"]');
        var filtroItensDesativado = document.querySelector('section[class="brjUfGeW"]');
        
        if(filtroItensAtivado){
            // alert('section[class="brjUfGeW CTPdOQUgl"] OK');
            
            removerPopupFiltroItens();
        }
        else if(filtroItensDesativado){
            // alert('section[class="brjUfGeW"] OK');
        
            removerPopupFiltroItens();
        }
        else{
            // alert('section[class="brjUfGeW CTPdOQUgl"] || section[class="brjUfGeW"] NOT FOUND');
            console.log('section[class="brjUfGeW CTPdOQUgl"] || section[class="brjUfGeW"] NOT FOUND');
        }
        
        function removerPopupFiltroItens(){
            document.querySelectorAll('div[class="updateItens"]').forEach((el, i)=>{
                // setTimeout(()=>{
                    el.remove();
                // },1000)
            })
            clearInterval();
        }
    },1000)
})
