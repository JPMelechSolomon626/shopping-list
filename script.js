window.onload = function () {
    initShoppingList ();
};

function initShoppingList () {
    let form = document.getElementById("item-form");
        form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm (event, formRef) {
    if (event.preventDefault ) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0, 10000000)

    //Creates list item html and appends to page.
    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    console.log("itemHtml: ", itemHtml)
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}



function setDeleteButtonEvent (id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
       console.log("Delete Button Works");
       removeListItem(id);
    });
}

function createListItemHtml (itemName, itemAmount, id) {
    return `<li id="item${id}">
                ${itemName}  - ${itemAmount}
                <button type="button" id="button${id}">Delete Item</button>
            </li>`;
}

function removeListItem (id) {
    let listItem = document.getElementById("item" +id);
    listItem.parentNode.removeChild(listItem)

}

function getRandomInt (min, max) {
    min = Math.ceil (min);
    max = Math.ceil (max);
    return Math.floor(Math.random() * (max-min)) +min;
    }