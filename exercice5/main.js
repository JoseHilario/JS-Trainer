var aux = 0
var vet = []

var soma = 0

function click() {
  let num = document.querySelector('input').value
  let box2 = document.querySelector('#box2')
  let p = document.createElement('p')
  
  //Remove todos os p dentro de box2, quando já possui necessita colocar outro.
  box2.querySelectorAll('p').forEach((p) => p.remove())
  
  //Primeiro verifica se o value é vazio ou inválido
  if(num.length === 0) {
    box2.appendChild(p)
    p.innerText = 'Preencha o campo vazio!'
  } else {
    num = Number(num)
    if (num < 1 || num > 100) {
      box2.appendChild(p)
      p.innerText = 'Digite um número válido!'
    } else {
      //Senão chama a função 
      fazercoisas()
    }
  }

  
  // faz o texto aparecer no option do meu select
  function fazercoisas() {
    let select = document.querySelector('select')
    let option = document.createElement('option')
    aux = Number(aux) + 1
    
    option.text = `O ${aux}° valor é ${num}`
    select.appendChild(option)
    //E adiciona cada num no final do array com o metodo push.
    vet.push(num)
    console.log(vet)
    
    newButton()
  }
  
  //Como o primeiro valor foi digitado, será criado um novo botão para mostrar o resultado
  function newButton() {
    let button2 = document.createElement('button')
    
    //Se for digitado mais de um num, para o button2 não ser criado novamente, apaga o anterior
    if(vet.length > 1) {
      box2.querySelectorAll('button').forEach((button2) => button2.remove())
    }

    box2.appendChild(button2)
    button2.innerHTML = 'Resultado'
    
    //Quando o novo botão for clicado, chamará a função resultados.
    let click2 = () => resultados()
  
    button2.addEventListener('click', click2)
  }
  
  //Contém 5 resultados 
  function resultados() {
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    box2.appendChild(p1)
    box2.appendChild(p2)
    box2.appendChild(p3)
    box2.appendChild(p4)
    box2.appendChild(p5)

    //quantidade de numeros digitados, usando propriedade length 
    let quantidade = vet.length
    if(quantidade === 1) {
      p1.innerText = 'Você digitou apenas 1 número. Digite mais números para ver mais resultados!'
    } else {
      p1.innerText = `A quantidade de números digitados é: ${quantidade}`
    
      //maior e menor numero digitado num array, usando a função Math.max com operador spread(...)
      let maior = Math.max(...vet)
      p2.innerText = `O maior número digitado é: ${maior}`

      let menor = Math.min(...vet)
      p3.innerText = `O menor número digitado é: ${menor}`

      //soma de todos os numeros
      for(let i = 0; i < quantidade; i++) {
        soma += vet[i]
      }
      p4.innerText = `A soma dos números digitados é: ${soma}`

      //media &&de todos os numeros usando metodo toFixed() para limitar casas decimais
      let media = soma / quantidade
      p5.innerText = `A média dos números digitados é: ${media.toFixed(2)}`
      console.log(typeof media.toFixed(2))
    }
  }
}

var button = document.querySelector('button')
button.addEventListener('click', click)

