const DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {
        
        selectedContactIndex: 0,
        newMessage: '',
        filteringString: '',
        classShow: false,
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            }
        ]

    }
},
  methods: {
    // ASSEGNO LA CLASSE 'ms_selected-contact' AL CONTATTO SELEZIONATO
    ifSelected(index){
        return this.selectedContactIndex == index ? 'ms_selected-contact' : '';
    },
    // RESTITUISCO ORA E MINUTI DI INVIO/RICEZIONE DEL MESSAGGIO DEL CONTATTO SELEZIONATO 
    printHourMinute(indexContact, indexMessage){
        return this.contacts[indexContact].messages[indexMessage].date.slice(11, 16);
    },
    // RESTITUISCO IL TESTO DELL'ULTIMO MESSAGGIO DELLA LISTA DI UN SINGOLO CONTATTO
    printLastMsgText(contact){
        return contact.messages[contact.messages.length - 1].message;
    },
    // RESTITUISCO LA DATA DELL'ULTIMO MESSAGGIO DELLA LISTA DI UN SINGOLO CONTATTO
    printLastMsgDate(contact){
        return contact.messages[contact.messages.length - 1].date;
    },
    // CONTROLLO IL VALORE DELLA KEY 'status' DEL MESSAGGIO PER ASSEGNARE LA CLASSE CORRETTA
    sentReceived(messageStatus){
        if(messageStatus == 'sent'){
            return 'ms_sent';
        } else if(messageStatus == 'received'){
            return 'ms_received';
        } 
    },
    // CAMBIO IL VALORE DI 'selectedContactIndex' IN BASE AL VALORE DI INDEX DATO IN INGRESSO
    selectContact(index){
        this.selectedContactIndex = index;
    },
    // SIMULAZIONE DI INVIO DI UN NUOVO MESSAGGIO AL CONTATTO SELEZIONATO.
    // CREAZIONE DI UN MESSAGGIO DI RISPOSTA AUTOMATICO CON SCRITTO 'OK!'
    //  CHE ARRIVA DOPO UN SECONDO DALL'INVIO.
    sendNewMessage(){
        const contactIndex = this.selectedContactIndex;
        this.contacts[contactIndex].messages.push({date: this.currentTime(),
                                                                message: this.newMessage,
                                                                status: 'sent',
                                                                optionsShow: false});
        setTimeout(() => {
            this.contacts[contactIndex].messages.push({date: this.currentTime(),
                                                                    message: 'Ok!',
                                                                    status: 'received',
                                                                    optionsShow: false});
        }, 1000);
        this.newMessage = '';
    },
    // CONTROLLO SE IL VALORE DELLA KEY 'name' INCLUDE AL SUO INTERNO LA STRINGA COLLEGATA
    // ALLA INPUT DI ASIDE PER EFFETTUARE UN FILTRAGGIO DEI CONTATTI MODIFICANDO OPPORTUNAMENTE
    // IL VALORE DELLA KEY BOOLEANA 'visible'
    filterContactsList(){
        this.contacts.forEach(element => {
            if(element.name.toLowerCase().includes(this.filteringString.toLowerCase())){
                element.visible = true;
            } else {
                element.visible = false;
            }
        });
    },
    // SE LA filteringString CONTIENE ALMENO UN CARATTERE AL SUO INTERNO
    // RESTITUISCO UN ARRAY DI CONTATTI CONTENENTE SOLO CONTATTI CHE
    // ABBIANO LA KEY 'visible' UGUALE A 'true', ALTRIMENTI RESTITUISCO
    // L'ARRAY DI CONTATTI PER INTERO 
    filteredContacts(arrayOfContacts){
        if(this.filteringString.length > 0){
            return arrayOfContacts.filter(contact => contact.visible==true);
        } else {
            return arrayOfContacts;
        }
    },
    // INVERTO IL VALRORE DELLA KEY BOOLEANA 'optionsShow'
    showOptions(message){
        message.optionsShow = !message.optionsShow;
    },
    // IMPOSTO IL VALORE DELLA KEY BOOLEANA 'optionsShow' A 'false'
    // NEL CASO IN CUI FOSSE UGUALE A 'true'
    closeOptions(message){
        if(message.optionsShow == true){
            message.optionsShow = false;
        }
    },
    // ELIMINO IL MESSAGGIO NELL'ARRAY 'messages' DEL CONTATTO SELEZIONATO
    // ALLA LOCAZIONE CORRISPONDENTE ALL'INDICE 'index' DATO IN INGRESSO
    deleteMessage(index){
        this.contacts[this.selectedContactIndex].messages.splice(index,1);
    },
    // RESTITUISCO UNA STRINGA CHE INDICA L'ORA ATTUALE NEL FORMATO 
    // GIORNO/MESE/ANNO ORE:MINUTI:SECONDI
    currentTime(){
        return DateTime.now().setLocale('it').toFormat('dd/LL/yyyy HH:mm:ss');
    }
}
}).mount('#app')



