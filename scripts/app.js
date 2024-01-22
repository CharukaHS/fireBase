// imports
import { Chats } from "./chat.js"
import { ChatUI} from "./ui.js"

// Dom quiries
const chatInp = document.querySelector('.new-chat');
const updateName =document.querySelector('.name-update');
const chatList = document.querySelector('.chat-list');

// instences
const newChat = new Chats('Sangeeth', 'General')
const uiIns = new ChatUI(chatList)

// sending New Chat
chatInp.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg =chatInp.msg.value;
    newChat.addChats(msg)
})

// update Name
updateName.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = updateName.name_update.value;
    newChat.updateName(newName);
})

newChat.getChats((snap) => {
    uiIns.render(snap);
})

