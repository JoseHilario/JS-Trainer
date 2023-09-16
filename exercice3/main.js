function click() {
  let valorInicio = document.getElementsByTagName('input')[0].value
  let valorFim = document.getElementsByTagName('input')[1].value
  let valorPulo = document.getElementsByTagName('input')[2].value
  
  let resultText = document.querySelector('#result')
  let text = document.createElement('p')
  resultText.appendChild(text)
  
  if(valorInicio.length == 0 || valorFim.length == 0 || valorPulo.length == 0) {
    text.innerText = 'Preencha o campo vazio!'
  } else {
    if (valorPulo == 0) {
      text.innerText = 'Digite um número diferente de 0 em "Valor Pulo"'
    } else {
      valorInicio = Number(valorInicio)
      valorFim = Number(valorFim)
      valorPulo = Number(valorPulo)
      text.innerText = 'Contando...'
      setTimeout(() => {
        text.innerText = ''
        if (valorInicio <= valorFim) {
          while(valorInicio <= valorFim) {
            text.innerText += `${valorInicio} \u{1F449}`
            valorInicio += valorPulo
          }
        } else {
          while(valorInicio >= valorFim) {
            text.innerText += `${valorInicio} \u{1F449} `
            valorInicio -= valorPulo
          }
        }
        text.innerText += `\u{1F3C1}`
      }, 1000)
    }
  }
} 

const button = document.querySelector('button')
button.addEventListener('click', click)