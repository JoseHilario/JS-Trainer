//Toda vez que a pagina atualiza, essa funcao funciona
window.onload = () => {
  var message = document.getElementById('message')
  var photo = document.querySelector('#photo img')
  var body = document.querySelector('body')
  
  var date = new Date()
  var hour = date.getHours()
  var minutes = date.getMinutes()
  
  message.innerHTML = `Agora são ${hour} horas e ${minutes} minutos!`
  
  if(hour >= 6 && hour < 12) {
    photo.src="photos/Day.png"
    body.style.background="yellow"
  } else if (hour >= 12 && hour < 18 ) {
    photo.src="photos/Afternoon.png"
    body.style.background="orange"
  }
}

/*window.alert('hello man') //alerta
window.confirm('are you 23 years old?') //confirmacao ok or cancel 
window.prompt('type your name') //digitar algo
document.write('your name is...') //aparece no documento HTMl...*/

//variaveis são identificadores. 
//sintaxe: type name = content

/* TIPOS PRIMITIVOS DE DADOS:
  number(int and float);
  boolean(true or false);
  string('conjuntoDeCaracteres') 
*/
  
/*  CONCATENACAO
  var name = window.prompt("what's your name?") 
  window.alert("nice to meet you" + name) 
*/ 
  
/* CONVERTENDO NUMBERS AND STRINGS
  Os comandos com window entende que mesmo que eu coloque numero na resposta/variavel, será uma string, entao preciso converter para ele somar 2 variaveis e nao concatenar.

  Number (convert to int or float)
  Number.parseInt (convert to int)
  Number.parseFloat (convert to float).
  
  ex: var n1 = Number(window.prompt('type a number:')) 
  
  do mesmo modo que n1 agora é number, posso fazer:
  String(n1) ou n1.toString() 
  para converter para string.
  
  FORMATANDO STRINGS 
  name.lenght (quantidade de letras)
  name.toUpperCase() (tudo maiusculo)
  name.toLowerCase() (tudo minusculo)
  
  FORMATANDO NUMBERS
  var number1 = 123.5

  number1.toFixed(2) pega 2 casas decimais dps da virgula
  
  number1.replace('.',',') troca uma coisa por outra 
  
  number1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) diz o valor em reais.  
*/

/* TEMPLATE STRING:
  serve para melhorar meu codigo juntando strings, numbers... sem precisar concatenar, usando crase e o simbolo placeHolder: 
  `My name is ${name}, i'm ${age} years old...`
*/

/* OPERADORES:
  •Aritmeticos: + - * / (divisao real) % (resto da divisao inteira) ** (potencia)
  
  •Atribuicao: 
  Atribuicao simples:
  ex: number = 2 ** 3 + 4 / 5 - 7 * 9 ** 2 % 4
  
  Auto-atribuicao:
  ex: var number = 20 * 2 % 5
    number = number + 4 ** 2
  Se uma variavel recebe ela mesma, eu posso simplificar, por exemplo numa adicao: number += 4 ** 2
  
  Pre-incremento e pos-incremento 
  ex: var number = 5
    number++ 
    = 5
    number
    = 6
  ex2: var number = 10 
    --number
    = 9
    ++number
    = 10 
  
  •Relacionais: < > >= <= == !=
  ex: 6 >= 5
    true
    7 != 7 
    false
  
  relacionais de identidade:
  ex: 6 == 6 
    true
    6 == '6'
    true
  o js n identifica o tipo de dado e sim o valor, porém:
    6 === '6'
    false
  o js tem o operador de identidade para ver se os dados sao identicos.
  
  •Logicos: ! (negacao) && (conjuncao) || (disjuncao/ou) 
  ex: !true (operador unario)
    false
    !false
    true
  pode-se colocar uma expressao tbm que vai dar true or false.
  ex2: true && true = true (operador binario)
    restante das combinacoes é tudo = false
  ex3: true || false = true (operador binario)
    so vai ser false quando n tiver true.
    
  ex4 desafio: n1 = 5; n2 = 2
    
  n1++ >= n2 && 5 * 2 ** n2 == 3
  
  ! 7 ** n1 != n2 / n1 || n1 + 0 / (n2 * 624) < 5** --n1 % n2 && '3' === 0 + n2 || n2 * 0 == 8 % 4 == !true
  
  •Ternario: ? :
    ex: teste logico ? true(o que acontece quando for verdadeiro : false(o que acontecd quando for falso)
    ex2: 3 > 1 * 2 ? '3 é maior : 3 n é maior
*/

/* DOM: Document Object Model 
  •Selecionando elementos:
  document.getElementsByTagName()[0]
  .getElementById()
  .getElementsByName()[1]
  .getElementsByClassName()
  .querySelector()
  .querySelectorAll()
  
  •Function:
  ex: var event1 = document.querySelector(div.a)
     event1.addEventListener(click, 'clicar')
     
  function clicar() {
    event1.document.background = blue;
  }
  
  •Condicoes:
  obs: simples somente um if. composta com if e else. aninhada com if dentro de if, pode juntar else if().
  if(condicao) {
    bloco
  } else {
      if() {
        bloco
      } else {
          if() {
            bloco
          } else {
            bloco 
          }
      }
  }
  codigo de hora
  var hora = new Date()
  var hour = hora.getHours()
  document.write(`A hora é {hour}`)
  
  REPETICOES:
  while() {
    bloco
  }
  and
  do {
    bloco
  } while()
  and 
  for(inicializac;expressao log;increment) {
    bloco
  }
  
  ARRAYS(vetor):
  var number = [5,4,6]
  for(var i = 0; i < number.length; i++) {
    console.log(`O valor ${number[i]} está na osição ${i}`)
  }
  ou
  for(var i in number) {
    console.log(`O valor ${number[i]} está na osição ${i}`)
  }
  
  FUNCTIONS:
  exemplos de funcoes de fatorial:
  1
  function fatorial(num) {
    var fat = 1
    for(var i = num; i > 1; i--) {
      fat *= i
    }
    return fat
  }
  console.log(fatorial(5))
  2
  var fatorial = function(num) {
    return num**2
  }
  console.log(fatorial(3))
  3
  function fatorial(num) {
    if(num == 1) {
      return 1
    } else {
      return num * fatorial(num-1) 
    }
  }
  console.log(fatorial(6))
  
  OBJETOS:
  No Js o array também é do tipo objeto, e temos
  tambémo o proprio objeto:
  ex:
  var dados = {}
  var dados2 = []
  console.log(typeof dados)
  console.log(typeof dados2)
  output= 
  object
  object
  
  ex do que objeto pode guardar:
  var dados = {nome:'jose', idade:23, comer(c){}}
  
  diferente do array que coloca os valores em posições numericas como [0,1,2...] o objeto coloca dentro de nomes pré definidos:
  posição {nome, idade, function()}
*/
