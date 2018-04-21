// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteValuesResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

let dados = [4,6,8,10,12,20];
let inputs = document.querySelectorAll('input');
let rolar = document.querySelector('#rolar');
let recipienteResultados = document.querySelector('#recipienteResultados');
let resultado = document.querySelector('#resultado');

rolar.addEventListener('click', () => {	
	let recipienteValues = ''
	let indice = -1;
	let resultados = [];
        let resultadoFinal = 0;
	
	inputs.forEach(	(x) => {
		indice += 1;
		let maximo = dados[indice];
		for(let i = 0; i < x.value; i++){
			let valor = Math.ceil(Math.random() * maximo)
			resultados.push(valor);
			resultadoFinal += valor; 
		}			
	});
	
	for (let i = 0; i < resultados.length; i++){		
		recipienteValues += resultados[i];
		let length = resultados.length;
		if (i < length - 1){
			recipienteValues += ' + ';
		} else {
			recipienteValues += ' = ';
			recipienteValues += resultadoFinal;
		}
	
	}
	if (resultadoFinal != 0){	
		recipienteResultados.classList.remove('oculto');
	} else {
		recipienteResultados.classList.add('oculto');
	}	
	
	resultado.innerHTML = recipienteValues;
	
});
