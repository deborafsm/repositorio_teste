/** 
    Essa solução é referente ao bootcamp da Digital Invation One 
    MRV Front End SPA Developer
    Modulo: Soluções Aritméticas em JavaScript
    Mentor: Digital Invation One 
    Aluna: Debora Freire
*/
/**Desafio 1 
 * Descrição: Crie um programa que leia um número e mostre os números pares até esse número,
 *  inclusive ele mesmo.
 */
/**
 * Minha Resposta
 * let  a = gets(); //gets() utilizando para auxiliar na entrada de dados
    for (let num = 1; num <= a; num+= 1) { //Num = auxiliar
        if(num % 2 === 0  ){ //Se o resto da divisão for igual a 0
        console.log(num); //Mostrará na tela o número par
  }
}
 */

/**
 * Desafio 2 
 * Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km)
 *  e o total de combustível consumido (em litros).
 */

/**
 * //Doi valores KM e o total de combustivel
 *  let  x = gets(); //distancia total
    let  y = gets(); //km
    let res = x / y; //distancia_total / km
    console.log((res.toFixed(3))+" km/l"); //Mostra na tela ((3 casas após a vírgula)
*/

/**
 * Desafio 3
 * Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas domésticas.
 *  Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada
 *  item na mesma hora que percebe a falta dele em casa.
  O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a
 lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua
  os itens duplicados da lista de compras e que os ordene alfabeticamente.
 */

  /**
let totalItems =  gets(); //pega total de itens
for (var i = 0; i < totalItems; i++) { //Conta itens
  let itens = gets();//variavel itens para orderar
  let itensOrdenados = itens.split(" ").sort(); //Faz a ordenação retorna array e coloca em ordem alfabetica
  let itensUnicos = itensOrdenados; // Implemente aqui a lógica para ter os itens unicos
  let resposta = [...new Set(itensUnicos)].join(" ");
  console.log(resposta);
}
   */