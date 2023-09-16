button = document.querySelector('button')

function click() {
  const birthdate = document.querySelector('#birthdate').value
  const gender = document.getElementsByName('gender') 
  const result = document.querySelector('#result')
  const text = document.querySelector('#result p')
  const img = document.createElement('img')
  result.appendChild(img)
  
  const atualDate = new Date() 
  const atualYear = atualDate.getFullYear()
  const age = atualYear - birthdate
  
  validYear()
  
  function validYear() {
    if(!birthdate || birthdate >= atualYear) {
      text.innerHTML = "Ano inválido!"
    } else {
      genderAndAge()
    }
  }
  
  function genderAndAge() {
    const person = {
      baby: age === 1,
      child: age > 1 && age < 12,
      adole: age > 11 && age < 18,
      young: age > 17 && age < 30,
      adult: age > 29 && age < 60,
      old: age > 59 && age < 123,
      dead: age > 122
    }
    
    const keys = Object.keys(person)
    const check = keys.find(key => person[key] === true)
    
    if(check === 'dead') {
      img.src = 'photos/dead.png'
      text.innerHTML = 'That person is dead!'
    } else {
      whatPerson(check)
    }

    function whatPerson(check) {
      if(gender[0].checked) {
        img.src = `photos/${check}M.png`
      } else {
        img.src = `photos/${check}F.png`
      }
      text.innerHTML = `We found a ${age} year old ${check}`
    }
  }
}
button.addEventListener('click', click)

