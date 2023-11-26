# Whatsapp - Replica web-app

**Initial commit**: 31/03/23

**Tecnologie:** Vue.js, JavaScript, Luxon, HTML, CSS e Bootstrap.

**Info**: 💬 I introduce you to WhatsApp Web Replica for Boolean
In this exercise, I used Vue.js to give my page the responsiveness of a single-page application. I implemented the possibility of sending messages and the simulation of an automatic response, dynamically populating the list of contacts and messages via the `v-for`.

## Video Demo
https://github.com/cyberfolk/vue-whatsapp/assets/114855536/8307e1a7-720b-43a1-a6f0-e61e84042496

## Milestone

- [x] Replicate graphics. Create a CSS class for messages in green those from the user and white those from the interlocutor.
- [x] Dynamically populate the **contacts-list** by displaying the name and image of each contact. Use "v-for".
- [x] Clicking on a contact opens the chat relating to that contact.
- [x] In the selected contact's chat, dynamically displays the conversation history. Use "v-for".
- [x] Sort the contacts-list chronologically.
- [x] **User search**: display only the contacts whose name contains the letters entered (e.g. Marco, Matteo Martina -> I write “mar” only Marco and Martina remain)
- [x] **Add a new contact**: by entering the name and a link to the profile picture. Without these fields registration fails.
- [x] **Send new messages**: the user writes a text in the textarea and by pressing “send” the message will be added to the chat, as a green message.
- [x] **Automatic reply**: Each contact will generate a random reply once a new message is received from the user.
- [x] **Status update**: after sending the message to the contact, his status will be updated with "Writing", and "Online" and finally will return to the time of the last message.
- [x] Whenever a new message is sent/received, the chat window will automatically scroll to the most recent message.
- [x] Block sending blank messages.
- [x] Create a specific class [CStatusList](/assets/js/Models/CStatusList.js) to manage the status of contacts and related timing in responses with FIFO logic.
- [x] **Delete message**: by clicking on the message a drop-down menu appears that allows you to delete the selected message
- [x] **Delete all messages**: You can delete all messages within a chat with a single click. The chat will remain open so you can continue sending messages.
- [x] **Delete chat**: Delete an entire chat, also deleting the related contact.

## TODO

- [ ] Responsive design
- [ ] Welcome page with no chat open.
- [ ] Switch to dark/light mode.
- [ ] Audio messages.
- [ ] Allow you to register a new user by providing just their name. If you do not provide a picture, your contact's initials will be used.
- [ ] If a contact doesn't have a profile picture, you'll see their initials.
- [ ] You can close any chat to return to the welcome page.
- [ ] Management of favorite messages.
- [ ] If you click the Favorite Messages tab but there are no favorite messages, it also displays an information page.
- [ ] Favorite messages can be removed from the chat window or favorite message window, and the "Add to favorites" / "Remove from favorites" message will also alternate.
- [ ] Favorite messages also show, for each message, the name of the contact they came from/to.
- [ ] If you delete a message that was a favorite message, it will also be removed from the favorite messages window.
- [ ] You can insert emojis into your messages.
- [ ] If you want to close the active chat, click the X in the top right corner.
