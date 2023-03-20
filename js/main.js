const DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {
        
        selectedContactIndex: 0,
        newMessage: '',
        filteredContacts: [],
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
    ifSelected(index){
        return this.selectedContactIndex == index ? 'ms_selected-contact' : '';
    },
    printHourMinute(indexContact, indexMessage){
        return this.contacts[indexContact].messages[indexMessage].date.slice(11, 16);
    },
    printLastMsgText(contact){
        return contact.messages[contact.messages.length - 1].message;
    },
    printLastMsgDate(contact){
        return contact.messages[contact.messages.length - 1].date;
    },
    sentReceived(messageStatus){
        if(messageStatus == 'sent'){
            return 'ms_sent';
        } else if(messageStatus == 'received'){
            return 'ms_received';
        } 
    },
    selectContact(index){
        this.selectedContactIndex = index;
    },
    sendNewMessage(){
        this.contacts[this.selectedContactIndex].messages.push({date: this.currentTime(),
                                                                message: this.newMessage,
                                                                status: 'sent',
                                                                optionsShow: false});
        setTimeout(() => {
            this.contacts[this.selectedContactIndex].messages.push({date: this.currentTime(),
                                                                    message: 'Ok!',
                                                                    status: 'received',
                                                                    optionsShow: false});
        }, 1000);
        this.newMessage = '';
    },
    filterContactsList(){
        this.contacts.forEach(element => {
            if(element.name.toLowerCase().includes(this.filteringString.toLowerCase())){
                element.visible = true;
            } else {
                element.visible = false;
            }
        });
    },
    isVisible(contact){
        if(contact.visible == true){
            return true;
        } else {
            return false;
        }
    },
    showOptions(message){
        message.optionsShow = !message.optionsShow;
    },
    closeOptions(message){
        if(message.optionsShow == true){
            message.optionsShow = false;
        }
    },
    deleteMessage(index){
        this.contacts[this.selectedContactIndex].messages.splice(index,1);
    },
    currentTime(){
        return DateTime.now().setLocale('it').toFormat('dd/LL/yyyy HH:mm:ss');
        
    }
}
}).mount('#app')



