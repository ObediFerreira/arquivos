window.addEventListener("load", ()=>{
            urlTab = location.href;
            console.log(urlTab);
            
            eMiSDKTE = document.querySelector('div[class="eMiSDKTE"]');
            
            // REMOVENDO https://elementsenvato.com.br/pt-br/ E TODOS OS CARACTERES ESPECIAIS E DEIXANDO APENAS TEXTO E NUMEROS PUROS
            if (urlTab.includes("https://elementsenvato.com.br/pt-br/")){
                urlTabTagReference = urlTab.substr(36).replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, "");
                console.log("urlTabTagReference: \n" + urlTabTagReference);
            }
            
            //URL ENCODED
            urlTabEncoded = encodeURIComponent(urlTab);
            // alert(urlTabEncoded);
            
            //OCULTANDO DIV DE FILTROS
	        document.querySelector('div[class="i94YxDkb rH92n1nB"]').style.display= "none";
	        
	        // OCULTANDO DIV DE CLASSIFICACAO
	        document.querySelector('div[class="yByqVOIe"]').style.display= "none";
            
            loopLoadingItens = '<div class="b0uVCiJ8" data-test-selector="loading-indicator"><svg class="iJX5Hn7G" viewBox="25 25 50 50" data-test-selector="loading-spinner"><circle class="IL3fX26P" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg></div>';
            $(eMiSDKTE).append(loopLoadingItens);
    	    
    	    // TESTE
    	    var intervalId = setInterval(()=>{
                fetch("https://elementsenvato.com.br/pt-br/json/solicitacoes-pesquisas-novos-itens.json",{
        	    	cache: 'reload'
        	    })
        	    .then((response)=>{
        	    	if(response.ok){
        	        	// return response.text();
        	        	return response.json();
        	      	}
        	      	throw new Error("Fetch error, status code: " + response.status);
        	    })
        	    .then((contentLinks)=>{
        	        console.log(contentLinks);
        	        
        	        var breakk = Object.keys(contentLinks).length;
    	            console.log("breakk: \n" + breakk);
    	            
    	            var i = 0;
    	            for(;;){
    	                console.log(Object.keys(contentLinks[i]));
    	                
    	                if(contentLinks[i].urlOrigin == urlTab || contentLinks[i].urlOrigin+"/" == urlTab || contentLinks[i].urlOrigin == urlTabEncoded || contentLinks[i].urlOrigin == urlTabEncoded+"/"){
    	                    console.log("contentLinks[i].urlOrigin == urlTab");
    	                    
    	                    var contentLinkTagReference = contentLinks[i].tagReference;
    	                    console.log(contentLinkTagReference);
    	                    
    	                    if(contentLinks[i].statusPage == "true"){
    	                        console.log("contentLinks[i].statusPage == true");
    	                        
    	                        clearInterval(intervalId);
    	                        getBodyItens(contentLinkTagReference);
    	                        
    	                    }
    	                    /* else if (contentLinks[i].statusPage !== true){
    	                        getBodyItens(contentLinkTagReference);
    	                    } */
    	                    break;
    	                }
    	                else if(i < breakk){
    	                    i++;
    	                }
    	                if(i >= breakk){
    	                    console.log("contentLinks[i].urlOrigin !== urlTab");
    	                    
    	                    // FAZ POST NOVA SOLICITACAO DE LINK DE PESQUISA CASO AINDA NAO EXISTA
    	                    overKeys(contentLinkTagReference, eMiSDKTE);
    	                    break;
    	                }
    	            }
        	    })
            },1000);
    	    
    	    function getBodyItens(contentLinkTagReference){
    	        console.log(contentLinkTagReference);
    	        
    	        fetch("https://elementsenvato.com.br/pt-br/json/referenciar-pesquisas-e-carregar-lista-itens.json",{
        	    	cache: 'reload'
        	    })
        	    .then((response)=>{
        	    	if(response.ok){
        	        	// return response.text();
        	        	return response.json();
        	      	}
        	      	throw new Error("Fetch error, status code: " + response.status);
        	    })
        	    .then((content)=>{
        	        // console.log(content);
        	        
        	        if(eMiSDKTE){
        	            // alert("eMiSDKTE");
        	            
        	            var breakk = Object.keys(content).length;
        	            console.log("breakk: \n" + breakk);
        	            
        	            var i = 0;
        	            for(;;){
        	                console.log(Object.keys(content[i]));
        	                
        	                if(Object.keys(content[i]) == contentLinkTagReference){
        	                    console.log("contentLinkTagReference == (Object.keys(content[i])");
        	                    
        	                    var keyContent = i;
        	                    getContent(content, keyContent, eMiSDKTE);
        	                    break;
        	                }
        	                else if(i < breakk){
        	                    i++;
        	                }
        	                if(i >= breakk){
        	                    overKeys(content, eMiSDKTE);
        	                    break;
        	                }
        	            }
        	        }
        	    })
        	    .catch((error)=>{
        	        console.log(error);
        	    })
    	    }
            // TESTE
    	        
    	    function getContent(content, keyContent, eMiSDKTE){
    	        console.log(keyContent + "\n" + content);
    	        
    	        //GARANTINDO DIV DE FILTROS ATIVADA
    	        document.querySelector('div[class="i94YxDkb rH92n1nB"]').style.display= "block";
    	        
    	        // GARANTINDO DIV DE CLASSIFICACAO ATIVADA
    	        document.querySelector('div[class="yByqVOIe"]').style.display= "block";
    	        
    	        // REMOVENDO DIV LOADING DE ITENS DEVIDO ERRO NA RESPOSTA DO FETCH
	            var loopLoadingItens = document.querySelector('div[class="b0uVCiJ8"]');
	            if(loopLoadingItens){
	                loopLoadingItens.remove();
	                loopLoadingItens.style.display = "none";
	            }
    	        
    	        var loadContent = Object.values(content[keyContent]);
	            console.log(loadContent);
	            
	            $(eMiSDKTE).append(loadContent);
	            
	            // REMOVENDO ADICIONAR A COLECAO EM TODA LISTA DE ITENS
            	document.querySelectorAll('div[class="EnawCRza wnbOpC0l"]').forEach((el, i)=>{
                    // el.style.display = "none"
                    el.remove();
                })
	            
	            // VERIFICANDO SE É ITEM DETALHADO
	            var pageItemDetail = document.querySelector('div[data-test-selector="page-item-detail"]');{
	                if(pageItemDetail){
	                    // alert("pageItemDetail");
	                    
	                    // REMOVENDO FOOTER ROXO "INTERESSADO NESTE ITEM" EM ITEM DETALHADO
            	        var removeLAGuFQdj = document.querySelector('div[class="LAGuFQdj"]');
            	        if(removeLAGuFQdj){
            	            // alert("removeLAGuFQdj");
            	            
            	            removeLAGuFQdj.remove();
            	        }
            	        
            	        // REMOVENDO DIV DE FILTROS  EM ITEM DETALHADO
            	        document.querySelector('div[class="i94YxDkb rH92n1nB"]').remove();
            	        
            	        // REMOVENDO DIV DE CLASSIFICACAO  EM ITEM DETALHADO
            	        document.querySelector('div[class="yByqVOIe"]').remove();
            	        
            	        // REMOVENDO ADICIONAR A COLECAO EM ITEM DETALHADO
            	        document.querySelector('div[class="AKcJb1sn"]').remove();
	                } 
	            }
    	    }
    	    
    	    function overKeys(content, eMiSDKTE){
    	        console.log("function overKeys(content, eMiSDKTE){}");
    	        
    	        //OCULTANDO DIV DE FILTROS
    	        document.querySelector('div[class="i94YxDkb rH92n1nB"]').style.display= "none";
    	        
    	        // OCULTANDO DIV DE CLASSIFICACAO
    	        document.querySelector('div[class="yByqVOIe"]').style.display= "none";
    	        
    	        fetch('https://elementsenvato.com.br/pt-br/php/solicitacoes-pesquisas-novos-itens.php?urlOrigin=' + encodeURIComponent(urlTab) + "&tagReference=" + urlTabTagReference +'&statusPage=false', {
                  cache: 'reload'
                })
                .then((response)=>{
                    if(response.ok){
                        // return response.text();
                        // return response.json();
                        console.log("fetch('https://elementsenvato.com.br/pt-br/php/solicitacoes-pesquisas-novos-itens.php'... OK!!!");
                        
                        // var loadContent = Object.values(content[2]);
                        // console.log(loadContent);
	            
	                    // $(eMiSDKTE).append(loadContent);
                    }
                    throw new Error("fetch('https://elementsenvato.com.br/pt-br/php/solicitacoes-pesquisas-novos-itens.php'... ERROR CODE: " + response.status);
                })
                .catch((error)=>{
    	            console.log(error);
    	            
    	            var loadContent = Object.values(content[2]);
                    console.log(loadContent);
                    
    	            // REMOVENDO DIV LOADING DE ITENS DEVIDO ERRO NA RESPOSTA DO FETCH
    	            var loopLoadingItens = document.querySelector('div[class="b0uVCiJ8"]');
    	            if(loopLoadingItens){
    	                loopLoadingItens.remove();
    	                loopLoadingItens.style.display = "none";
    	            }
    	            $(eMiSDKTE).append(loadContent);
    	        })
    	    
    	        /* var loadContent = Object.values(content[1]);
                console.log(loadContent);
	            
	            $(eMiSDKTE).append(loadContent); */
    	    }
    	    
    	    /* function showContentPage(key, content, eMiSDKTE){
    	        // REFERENTE A PAGINA ERRO 404
    	        $(eMiSDKTE).append(Object.values(content[key])); 
    	    } */
        })
