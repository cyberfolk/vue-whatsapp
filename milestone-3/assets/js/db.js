import { Contact } from "./Models/Task.js"; // import of a default export
import { Message } from "./Models/Task.js"; // import of a default export


const micheleMessages = [
  new Message('10/01/2020 15:30:55', 'Hai portato a spasso il cane?', 'sent'),
  new Message('10/01/2020 15:50:00', 'Ricordati di stendere i panni', 'sent'),
  new Message('10/01/2020 16:15:22', 'Tutto fatto!', 'received'),
]


const fabioMessages = [
  new Message('20/03/2020 16:30:00', 'Ciao come stai?', 'sent'),
  new Message('20/03/2020 16:30:55', 'Bene grazie! Stasera ci vediamo?', 'received'),
  new Message('20/03/2020 16:35:00', 'Mi piacerebbe ma devo andare a fare la spesa.', 'sent'),
]

const samueleMessages = [
  new Message('28/03/2020 10:10:40', 'La Marianna va in campagna', 'received'),
  new Message('28/03/2020 10:20:10', 'Sicuro di non aver sbagliato chat?', 'sent'),
  new Message('28/03/2020 16:15:22', 'Ah scusa!', 'received'),
]

const alessandroBMessages = [
  new Message('10/01/2020 15:30:55', 'Lo sai che ha aperto una nuova pizzeria?', 'sent'),
  new Message('10/01/2020 15:50:00', 'Si, ma preferirei andare al cinema', 'received'),
]

const alessandroLMessages = [
  new Message('10/01/2020 15:30:55', 'Ricordati di chiamare la nonna', 'sent'),
  new Message('10/01/2020 15:50:00', 'Va bene, stasera la sento', 'received'),
]

const claudiaMessages = [
  new Message('10/01/2020 15:30:55', 'Ciao Claudia, hai novità?', 'sent'),
  new Message('10/01/2020 15:50:00', 'Non ancora', 'received'),
  new Message('10/01/2020 15:51:00', 'Nessuna nuova, buona nuova', 'sent'),
]

const federicoMessages = [
  new Message('10/01/2020 15:30:55', 'Fai gli auguri a Martina che è il suo compleanno!', 'sent'),
  new Message('10/01/2020 15:50:00', 'Grazie per avermelo ricordato, le scrivo subito!', 'received'),
]

const davideMessages = [
  new Message('10/01/2020 15:30:55', 'Ciao, andiamo a mangiare la pizza stasera?', 'sent'),
  new Message('10/01/2020 15:50:00', 'No, l\'ho già mangiata ieri, ordiniamo sushi!', 'sent'),
  new Message('10/01/2020 15:51:00', 'OK!!', 'received'),
]

const contacts = [
  new Contact('Michele', './assets/img/avatar_1.jpg', true, micheleMessages),
  new Contact('Fabio', './assets/img/avatar_2.jpg', true, fabioMessages),
  new Contact('Samuele', './assets/img/avatar_3.jpg', true, samueleMessages),
  new Contact('Alessandro B.', './assets/img/avatar_4.jpg', true, alessandroBMessages),
  new Contact('Alessandro L.', './assets/img/avatar_5.jpg', true, alessandroLMessages),
  new Contact('Claudia', './assets/img/avatar_6.jpg', true, claudiaMessages),
  new Contact('Federico', './assets/img/avatar_7.jpg', true, federicoMessages),
  new Contact('Davide', './assets/img/avatar_8.jpg', true, davideMessages),
]

export { contacts } // named export