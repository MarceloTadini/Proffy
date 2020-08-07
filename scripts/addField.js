//Procurar o botão
document.querySelector("#add-time")

//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar a ação
function cloneField(){
    //Duplicar os campos (Quais?)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos (Quais?)
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ""
    })

    //Colocar na página (Onde?)
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)

}
    

    