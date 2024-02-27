const nodesBox = document.querySelector(".nodes-box");
const addButton = document.querySelector(".add-nodes")


function addSquare () {
    const newNode = document.createElement('div');
    newNode.classList.add("node")   
    nodesBox.appendChild(newNode)
}


addButton.addEventListener('click', addSquare)
