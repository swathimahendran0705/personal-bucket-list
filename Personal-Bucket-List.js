function markComplete(button){
    const listItem=button.parentElement;
    listItem.classList.toggle('completed');
  }
// Add a new bucket list item
function addItem() {
    let input = document.getElementById("input");
    let text = input.value.trim();
    
    if (text) {
        let list = document.getElementById("list");
        let li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        input.value = ""; 
    }
}