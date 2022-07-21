let noteInput = document.getElementById("note-input");
let addNoteButton = document.getElementById("addNote");
let notesContainer = document.getElementById("n-container");
let fullMessageContainer = document.getElementById('full-message-container');

let counter = 1;

let buttonList = [];
let pList = [];



addNoteButton.addEventListener('click', function () {

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let button = document.createElement('button');

    div.classList = "note";
    h2.classList = "note-number";
    p.classList = "note-content";
    button.classList = "view-detail";

    h2.innerText = "Node " + (counter);
    p.innerText = noteInput.value;
    button.innerText = "View Detail"
    div.append(h2, p, button);

    buttonList.push(button);
    notesContainer.appendChild(div);

    noteInput.value = "";
    pList.push(p);
    counter++;
});


notesContainer.addEventListener('click', function (event) {
    if (event.target.matches("button")) {
        let button = event.target;
        for(let i = 0; i < buttonList.length; i++){
           
            if(buttonList[i] === button){
                let noteMessageP = pList[i];
                let messageContainer = document.createElement('div');
                let closeButton = document.createElement('i');
                let fullMessage = document.createElement('p');

                fullMessageContainer.classList = "full-message-container";
                fullMessageContainer.style.display = "block";
                messageContainer.classList = "message-container";
                closeButton.classList = "faa fa-solid fa-xmark";
                fullMessage.classList = "full-message";

                fullMessageContainer.appendChild(messageContainer);
                messageContainer.append(closeButton,fullMessage);

                
                fullMessage.innerText = noteMessageP.innerText;
                console.log(fullMessageContainer);
                break;
            }
        }
    }
});


fullMessageContainer.addEventListener('click',function(event){
    if(event.target.matches('i')){
        fullMessageContainer.style.display = "none";
        fullMessageContainer.innerHTML = "";
    }
});
