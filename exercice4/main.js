function click() {
  let input = document.querySelector('input').value
  let box2 = document.querySelector('#box2')
  let p = document.createElement('p')

  box2.querySelectorAll('p').forEach((p) => p.remove())
  
  if(input.length === 0) {
    box2.appendChild(p)
    p.innerText = 'Campo não pode estar vazio!'
  } else {
    input = Number(input)
    if(input === 0) {
      box2.appendChild(p)
      p.innerText = 'Digite um número válido'
    } else {
      let select = document.querySelector('select')
      select.innerText = ''
      for(let i = 1; i <= 100; i++) {
        let option = []
        option[i] = document.createElement('option')
        option[i].text = `${input} x ${i} = ${input*i}`
        select.appendChild(option[i])
      }
    }
  }

}

let button = document.querySelector('button')
button.addEventListener('click', click)