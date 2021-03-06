const ax2Page = document.getElementById('ax2');
const bxPage = document.getElementById('bx');
const cPage = document.getElementById('c');
const answer = document.getElementById('answer')

const filedData = (a, b, c) => { 

    if (a.length === 0 || b.length === 0 || c.length === 0 )  return false // Se algum Dos campos não estiver preenchido será retornado false
     
    else   return true  
    
}

function bhaskara() {

    if (filedData(ax2Page.value, bxPage.value, cPage.value)) { // Verificando se todos os campos estão preenchidos
    const a = Number(ax2Page.value)
    const b = Number(bxPage.value)
    const c = Number(cPage.value)
    

    const bSquare = b ** 2 
    const aTimesC = a * c
    const times4 = 4 * aTimesC
    const delta = bSquare - times4

    const deltaTheSquare = Math.sqrt(delta)
    const calculatingA = 2 * a

    const xLineAccount = -b +  deltaTheSquare 
    const xLineResult = xLineAccount / calculatingA

    const xTwoLineAccont = -b - deltaTheSquare
    const xTwoLineResult = xTwoLineAccont / calculatingA

    if (deltaTheSquare) { // Se  a raiz quadrada conseguir ser fatorada ela é positiva, então o calculo será feito.
    document.getElementById('page-center').style.height ='90vh' //Como é gerado html no script quando clicar no botão o calculo iria sair pra 
                                                               // fora da caixa laranja, com isso quando apertar o botão a div irá aumentar


    /* 
    * Aqui eu gero a div space pra dar um espaço em algumas partes do calculo.
    * Também eu crio a div line para traçar uma linha na parte da bhaskara.  
    * Na parte que precisamos multiplicar o divisor eu também dou ums espaços, no multiplicationAdjustment dentro dele eu coloco o 2 * a e 
    * arrumo onde ele tem que ficar no arquivo account.css.
    * Também crio um multiplicationAdjustmentResult que é o resultado da multiplicação do divisor, dentro dele eu coloco o resultado e ajusto 
    * onde ele tem que ficar no account.css.
    */

    answer.innerHTML = `Δ = (b)² -4 * a * c <br>
                        Δ = (${b})² -4 * ${a} * ${c} <br>
                        Δ = ${bSquare} - 4 * ${aTimesC} <br>
                        Δ = ${bSquare} - ${times4} <br>
                        Δ = ${delta} <br>
                        <br>
                        x' = -(${b}) +√${delta}  = <div id="space"></div> ${xLineAccount.toFixed(3).replace('.' , ',')} =  <div id= "space"></div> ${xLineResult.toFixed(3).replace('.' , ',')} 
                        <div id="line"> </div>
                        <div id= "multiplicationAdjustment">2 * ${a} =</div> <div id="multiplicationAdjustmentResult">${calculatingA}</div> 
                        <br>
                        <br>
                        x'' = -(${b}) - √${delta} = <div id="space"></div> ${xTwoLineAccont.toFixed(3).replace('.' , ',')} = <div id="space"></div> ${xTwoLineResult.toFixed(3).replace('.' , ',')} 
                        <div id="line"></div>
                        <div id= "multiplicationAdjustment">2 * ${a} =</div> <div id="multiplicationAdjustmentResult">${calculatingA}</div> 
                        </div>
                        `                   
    } else {
        answer.innerHTML = 'Delta negativo'
        document.getElementById('page-center').style.height = '35.5vh'
    }

    } else {
        alert('[ERRO] Preencha os valores para continuar')
    }
 


    // Limpando as caixinhas
    ax2Page.value = ''
    bxPage.value = ''
    cPage.value = ''   
}