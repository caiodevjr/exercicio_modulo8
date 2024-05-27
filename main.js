

function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    if(nome && telefone) {
        let table = document.getElementById("contatos");
        let newRow = table.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;
        document.getElementById("formContato").reset();
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}