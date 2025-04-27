//Primeiro armazenamos as informações que serão usadas, ou seja, as frases.
const frases = [
  "Alguem lê isso?",
  "Sabia que o número 42 é a resposta para a vida, universo e tudo mais?",
  "Sabia que em Connecticut um homem não pode escrever carta de amor a mulher, caso os pais tenham proibido o relacionamento?",
  "Sabia que todos os relógios no filme Pulp Fiction estão parados no horário de 4:10?",
  "pneumoultramicroscopicossilicovulcanoconiótico",
];

//Aqui, invés de utilizar métodos convencionais como Math.random, Math.floor, decidi mudar um pouco o trajeto. Pensei inicialmente em loops, mas nesse caso, não dava para colocar um for, então o mais adequado foi escolher o While
//Entretanto, surgiu outra questão: Que condição eu adicionaria e que, ainda, pudesse simular, imitar os métodos. Depois de algumas pesquisas e possibilidades que saíram das vozes da minha cabeça (rs), cheguei a: Timestamp
//O Timestamp definirá um comportamento parecido com o Math.Random, onde será usado o tempo atual com critério de parada. Esse método não é famoso, mas é uma "gambiarra' para treinamento
//Por que não é famoso? Bom, é um método ineficiente (em todos os sentidos) e não é gerado "aleatoriamente"

function fraseObtida() {
  const sort = new Date().getMilliseconds() % frases.length;

  return frases[sort];
}

console.log(fraseObtida());
