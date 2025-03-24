const form = document.getElementById('formTarefa');
const input = document.getElementById("inputTarefa");
const lista = document.getElementById("listaTarefas");


// addEventListner serve para escutar algum evento no nosso caso o evento de click
form.addEventListener('submit', function(event){

    event.preventDefault(); // preventDefalt esta dizendo para o evento esperar um pouco 

    const textoTarefa = input.value.trim(); // remove os espaços iniciais e finais do campo imput


    if(textoTarefa != ""){
        // aki eu crio um elemento li para posteriormente ser colocado na minha ul
        const li = document.createElement("li");
        // adiciono o texto que esta gravado na minha variavel textoTarefa ao meu li 
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');// aki eu crio um botão
        // adiciono um x no meu botão
        botaoRemover.textContent = "x";
        // adiciono a classe remover ao meu botão
        botaoRemover.classList.add("remover");
        // escuto um evento de click no meu botão
        botaoRemover.addEventListener('click', function(){
            // quando o evento é disparado eu acesso a minha variavel lista
                // 1 - que capturou o ul da pagina
                // 2 - mando remover o filho da lista (ul)
                // 3 - que no meu caso é o li
            lista.removeChild(li);
        });
        // aki eu adiciono o botão remover no li
        li.appendChild(botaoRemover);
        // aki eu adiciono o meu li a minha lista (ul)
        lista.appendChild(li);
        // e depois eu limpo o campo input
        input.value = '';
    }
});