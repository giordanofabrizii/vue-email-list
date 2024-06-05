const { createApp } = Vue

createApp({
    data() {
        return {
            arrayEmail: [],
        }
    },
    methods: {
        /**
         * Return a random email
         * 
         */
        generateTenEmail: function(){
            for (let i = 0; i < 10; i++) {    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.arrayEmail.push(response.data.response);
                    });
            }
        },
    },
    created() {
        this.generateTenEmail();
    }
}).mount('#app');