// Função para adicionar um item à lista de compras
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
        deleteButton.onclick = function() {
            removerItem(listItem);
        };
        listItem.appendChild(deleteButton);
        
        itemList.appendChild(listItem);
        input.value = "";
        
        // Após adicionar o item, atualize os dados no localStorage
        atualizarLocalStorage();
    } else {
        alert("Por favor, insira um item válido.");
    }
}

// Função para limpar a lista de compras
function limparLista() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    // Após limpar a lista, atualize os dados no localStorage
    atualizarLocalStorage();
}

// Função para remover um item específico da lista de compras
function removerItem(itemToRemove) {
    itemToRemove.remove();
    // Após remover o item, atualize os dados no localStorage
    atualizarLocalStorage();
}

// Função para atualizar os dados no localStorage
function atualizarLocalStorage() {
    var itemList = document.getElementById("itemList");
    var items = [];
    // Iterar sobre os itens na lista e adicioná-los ao array items
    itemList.querySelectorAll(".item").forEach(function(item) {
        items.push(item.textContent);
    });
    // Armazenar o array de itens no localStorage como uma string JSON
    localStorage.setItem("listaDeCompras", JSON.stringify(items));
}

// Função para carregar os dados da lista de compras do localStorage
function carregarListaLocalStorage() {
    var itemList = document.getElementById("itemList");
    var items = localStorage.getItem("listaDeCompras");
    // Verificar se existem itens salvos no localStorage
    if (items) {
        // Converter a string JSON de volta para um array
        items = JSON.parse(items);
        // Iterar sobre os itens e adicionar à lista de compras
        items.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item;
            listItem.classList.add("item");
            
            // Adicionar botão de exclusão
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Remover";
            deleteButton.classList.add("deleteButton");
            deleteButton.onclick = function() {
                removerItem(listItem);
            };
            listItem.appendChild(deleteButton);
            
            itemList.appendChild(listItem);
        });
    }
}

carregarListaLocalStorage();
