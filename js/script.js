var app = new Vue({
    search: '',
    el: '#app',
    data: {
        newMessage : '',
        counter : 0,
        contacts: [

            {
            name: 'Michele',
            avatar: '_1',
            visible: true,

            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
            },

            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },

            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }

            ],
            
            },

            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,

            messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            
            },

            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },

            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }

            ],
            },
            
        ],
        
    },

    methods :{
        selFriend(item,index){
            this.counter = index;
        },
        
        sendMessage(){
            if(this.newMessage != ''){

                const newMess = {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: this.newMessage,
                    status: 'sent'
                    
                };

                this.contacts[this.counter].messages.push(newMess);
                console.log(newMess);

                this.newMessage = '';
            }

            setTimeout(()=>{

                const risposta = {
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'ok',
                    status: 'received'
                    
                };
                this.contacts[this.counter].messages.push(risposta);
                
            },1000);    
        }

    }
    
})
