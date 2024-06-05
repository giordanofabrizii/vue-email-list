// const { createApp } = Vue;

// Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// createApp({
//     data() {
//         return {
//             arrayEmail: [],
//         }
//     },
//     methods: {
//         /**
//          * Return a random email
//          * 
//          */
//         async generateEmail: function(){
//             axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//             .then(function (risultato) {
//                 let email = risultato.data.response;
//                 console.log(email);
//                 return email;
//             });
//         }
//     },
//     async created() {
//         for (let i = 0; i < 10; i++) {
//             let newEmail = this.generateEmail();
//             console.log(newEmail, "ciao");
//             this.arrayEmail.push(newEmail);
//         } 
//     }
// }).mount('#app');

let arrayEmail = [];
let email = '';

function generateEmail(){
    for (let i = 0; i < 10; i++) {    
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                email = response.data.response;
                console.log(email)
                arrayEmail.push(email)
            });
    }
}

generateEmail()