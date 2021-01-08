function relogio(){
    function criarHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'

        });
    }

    // console.log(criarHoraDosSegundos(10))

    const relogio = document.querySelector('.relogio')
    // não preciso dessas variaveis
    // preciso apenas quando for usar a segundo opção de código
    // não recomendado
    // const iniciar = document.querySelector('.iniciar')
    // const pausar = document.querySelector('.pausar')
    // const zerar = document.querySelector('.zerar')
    const mensagem = document.querySelector('.mensagem')
    let segundos = 0
    let timer

    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++
            relogio.innerHTML = criarHoraDosSegundos(segundos)
        }, 1000)
    }

    // para diminuir a quantidade de **iniciar.addEventListener('click', function(e)**
    // isso vai fzr alguma coisa quando eu clicar no  
    // botao de iniciar/pausar/zerar no HTML
    document.addEventListener('click', function(e){
        const element = e.target
        
        if(element.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
            mensagem.innerHTML = 'O seu Timer foi iniciado'
            mensagem.style.padding = '20px 10px'
            mensagem.style.border = '3px solid black'
        }

        if(element.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer)
            mensagem.innerHTML = 'O seu Timer foi pausado'
        }

        if(element.classList.contains('zerar')){
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
            relogio.classList.remove('pausado')
            mensagem.innerHTML = 'O seu Timer foi zerado'
        }
    })

    /*
    iniciar.addEventListener('click', function(e){
        
    })

    pausar.addEventListener('click', function(e){
        
    })

    zerar.addEventListener('click', function(e){
        
    })
    */
}

relogio()