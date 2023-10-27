function newElement() {

let inputValue = document.getElementById("myInputField").value;

    if (inputValue === "") {
    alert("Please enter a task!");
  } else {
    
    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    li.appendChild(document.createTextNode(inputValue));

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    li.appendChild(editButton);

    
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    li.appendChild(removeButton);
    document.getElementById("myUL").appendChild(li);

    li.classList.add("new-task");

    removeButton.onclick = function() {
      li.remove();
    };

    editButton.onclick = function() {
      let newText = prompt("Edit the task:", inputValue);
      if (newText !== null) {
        inputValue = newText;
        li.childNodes[2].textContent = inputValue;
      }
    };

    checkbox.onclick = function() {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    };
  }
}
