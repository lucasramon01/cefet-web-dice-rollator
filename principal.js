// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

let dados = [4,6,8,10,12,20];
let inputs = document.querySelectorAll('input');
let rolar = document.querySelector('#rolar');

rolar.addEventListener('click', () => {	
	let indice = -1;
	let resultados = [];
	inputs.forEach(	(x) => {
		indice += 1;
		let maximo = dados[indice];
		for(let i = 0; i < x.value; i++){
			resultados.push(Math.ceil(Math.random() * maximo));
		}
		console.log(resultados);		
	});
});
