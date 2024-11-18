//copiar código de barras
function cdgb(codigo){
    navigator.clipboard.writeText(codigo).then (() => {
        alert('Código copiado, paga ai pa noiz 😁');
    }).catch(err =>{
        console.error('Erro ao copiar código',err);
    });
}

//mostar e esconder meses
var ano24 = document.querySelector('#ano24');
var mes24 = document.querySelector('#mes24');

var botoesAnos = [
    {
        ano: '#ano24', 
        meses: '#mes24'
    }
]

var botoesMeses = [
    {
        mes:'#maio24',
        calendario: '#maio24tbl',
    },
    {
        mes:'#jun24',
        calendario: '#Jun24tbl',
    },
    {
        mes:'#Jul24',
        calendario: '#Jul24tbl',
    },
    {
        mes: '#Ago24',
        calendario: '#Ago24tbl',
    },
    {
        mes: '#Set24',
        calendario: '#Set24tbl',
    },
    {
        mes: '#Out24',
        calendario: '#Out24tbl'
    },
    {
        mes: '#Nov24',
        calendario: '#Nov24tbl',
    },
    {
        mes: '#Dez24',
        calendario: '#Dez24tbl',
    }
]


botoesAnos.forEach(b=>{


    document.querySelector(b.ano).addEventListener('click', function() {

        let mes = document.querySelector(b.meses)
 
        if(mes.style.display === 'flex'){
            mes.style.display = 'none';
        } else {
            mes.style.display = 'flex';
        }

    });

})

botoesMeses.forEach (b=>{

    document.querySelector(b.mes).addEventListener('click', function() {


        let calendario = document.querySelector(b.calendario)
        
        if(calendario.style.display === 'block'){
            calendario.style.display = 'none';
        } else {

            botoesMeses.forEach(m=>{
                document.querySelector(m.calendario).style.display = 'none'
            })

            calendario.style.display = 'block';
        }

    });

})

