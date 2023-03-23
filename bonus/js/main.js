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
                name: 'AI',
                avatar: './img/avatar_AI.png',
                visible: true,
                draft: '',
                messages: [],
            },
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '10/01/2020 16:56:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito, a più tardi!',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:55:55',
                        message: 'Perfetto! Allora ci vediamo questa sera alle 20:00, ti scrivo l\'indirizzo più tardi, comunque ricordati di fare gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:50:00',
                        message: 'Molto volentieri! Dopo potremmo andare anche al cinema!',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:36:55',
                        message: 'Ho saputo che ha aperto una nuova pizzeria, vogliamo provarla?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:35:00',
                        message: 'Certo! cosa ti andrebbe di fare?',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:30:00',
                        message: 'Comunque come stai?',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
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
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        optionsShow: false
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        optionsShow: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                draft: '',
                messages: [
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        optionsShow: false
                    },
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
    // RESTITUISCO LA DATA DI INVIO/RICEZIONE DEL MESSAGGIO DEL CONTATTO SELEZIONATO
    printDate(indexContact, indexMessage){
        return this.contacts[indexContact].messages[indexMessage].date.slice(0, 10);
    },
    // RESTITUISCO UNA STRINGA CONTENENTE LE INFORMAZIONI RELATIVE ALL'ULTIMO MESSAGGIO
    // RICEVUTO DAL CONTATTO SELEZIONATO
    findLastReceivedDate(){
        if(this.contacts[this.selectedContactIndex].messages.length > 0){
            let found = false;
            let i = 0;
            while(!found && i < this.contacts[this.selectedContactIndex].messages.length){
                if(this.contacts[this.selectedContactIndex].messages[i].status == 'received'){
                    found = true;
                }
                i++;
            }
            if(found == true){
                return `Ultimo accesso il ${this.printDate(this.selectedContactIndex, i-1)} alle ${this.printHourMinute(this.selectedContactIndex, i-1)}`;
            } else {
                return "Ultimo accesso non disponibile";
            }
        } else {
            return "Ultimo accesso non disponibile";
        }
    },
    // RESTITUISCO IL TESTO DELL'ULTIMO MESSAGGIO DELLA LISTA DI UN SINGOLO CONTATTO
    // E SE SUPERA I 20 CARATTERI LA TRONCO
    printLastMsgText(contact){
        const lastMessage = contact.messages[0].message;
        if(lastMessage.length > 20){
            return lastMessage.substring(0, 21).trim() + '...';
        } else {
            return lastMessage;
        }
    },
    // RESTITUISCO LA DATA DELL'ULTIMO MESSAGGIO DELLA LISTA DI UN SINGOLO CONTATTO
    printLastMsgDate(contact){
        return contact.messages[0].date;
    },
    // RESTITUISCO LA BOZZA E SE IL TESTO SUPERA I 20 CARATTERI LA TRONCO
    printDraft(contact){
        const draft = contact.draft;
        if(draft.length > 20){
            return draft.substring(0, 21).trim() + '...';
        } else {
            return draft;
        }
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
    // E NEL CASO IN CUI LA CASELLA DI INPUT NON SIA VUOTA SALVO IL SUO VALORE COME BOZZA
    // DEL MESSAGGIO NEL VALORE DELLA KEY 'draft' DEL CONTATTO OPPORTUNO
    selectContact(contact, index){
        if(this.newMessage != ''){
            this.contacts[this.selectedContactIndex].draft = this.newMessage;
        } 
        this.selectedContactIndex = index;
        this.newMessage = contact.draft;
        contact.draft = '';
    },
    // SIMULAZIONE DI INVIO DI UN NUOVO MESSAGGIO AL CONTATTO SELEZIONATO.
    // CREAZIONE DI UN MESSAGGIO DI RISPOSTA AUTOMATICO CON SCRITTO 'OK!'
    // CHE ARRIVA DOPO UN SECONDO DALL'INVIO.
    sendNewMessage(){
        if(this.newMessage.trim() != ''){
            const contactIndex = this.selectedContactIndex;
            this.contacts[contactIndex].messages.unshift({date: this.currentTime(),
                                                                    message: this.newMessage,
                                                                    status: 'sent',
                                                                    optionsShow: false});
            this.contacts[contactIndex].draft = '';                                                                
            this.scrollToElement(); 
            if(this.selectedContactIndex == 0){
             this.chatAI(this.newMessage);   
            } else {
                setTimeout(() => {
                    this.contacts[contactIndex].messages.unshift({date: this.currentTime(),
                                                                            message: 'Ok!',
                                                                            status: 'received',
                                                                            optionsShow: false});
                    if(contactIndex == this.selectedContactIndex){
                        this.scrollToElement();
                    }
                }, 5000);
            }                                                      
            this.newMessage = '';
        }
    },
    // CONTROLLO SE IL VALORE DELLA KEY 'name' INCLUDE AL SUO INTERNO LA STRINGA COLLEGATA
    // ALLA INPUT DI ASIDE PER EFFETTUARE UN FILTRAGGIO DEI CONTATTI MODIFICANDO OPPORTUNAMENTE
    // IL VALORE DELLA KEY BOOLEANA 'visible'
    filterContactsList(){
        if(this.filteringString.length > 0){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.filteringString.toLowerCase())){
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        } else {
            this.contacts.forEach(element => element.visible = true);
        }
    },
    // RESTITUISCI LA STRINGA CON LA CLASSE CORRISPONDENTE IN BASE
    // AL VALORE DELLA KEY BOOLEANA 'visible' DI OGNI CONTATTO
    ifVisible(contact){
        return contact.visible == true ? 'ms_visible':'ms_invisible'; 
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
    },
    // SCROLL DELLA LISTA DEI MESSAGGI FINO IN FONDO
    scrollToElement(){
        element = document.getElementById('message-list');
        if(element){
            element.scrollTo(0, element.scrollHeight);
        }
    },
    chatAI(text){
        const contactIndex = this.selectedContactIndex;
        const openAIKEY = 'A_VALID_OpenAI_SECRET_KEY';

        const client = axios.create({
                headers: {
                Authorization: "Bearer " + openAIKEY,
            },
        });

        const params = {
            prompt: text,
            model: "text-davinci-003",
            max_tokens: 1000,
            temperature: 0,
        };
  
        client
        .post("https://api.openai.com/v1/completions", params)
        .then((result) => {
        console.log(result.data);
        this.contacts[contactIndex].messages.unshift({date: this.currentTime(),
            message: result.data.choices[0].text,
            status: 'received',
            optionsShow: false});
        })
        .catch((err) => {
        console.log(err);
        this.contacts[contactIndex].messages.unshift({date: this.currentTime(),
            message: 'Non ho capito, puoi riformulare la domanda?',
            status: 'received',
            optionsShow: false});
        });
    }
}
}).mount('#app')



