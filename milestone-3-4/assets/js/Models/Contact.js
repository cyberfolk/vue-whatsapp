export class Contact {
  /**
   * Image Contructor
   * @param {String} name The name of contact
   * @param {String} avatar The root where contained the img of the contact
   * @param {boolean} visible if true the contact is the activeContact
   * @param {Array} messages contains the chronology of the chat
   */
  constructor(name, avatar, visible, messages) {
    this.name = name;
    this.avatar = avatar;
    this.visible = visible;
    this.messages = messages;
  }
}