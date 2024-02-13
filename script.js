function adicionarItem() {
    var input = document.getElementById("itemInput");
    var item = input.value;
    if (item.trim() !== "") {
        var itemList = document.getElementById("itemList");
        var listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.classList.add("item");

        // Adicionando botão de exclusão do item
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Remover";
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function () {
            listItem.remove();
        };
        listItem.appendChild(deleteButton);

        itemList.appendChild(listItem);
        input.value = "";
    } else {
        alert("Por favor, insira um item válido.");
    }
}

function limparLista() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
}
