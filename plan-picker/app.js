const app = Vue.createApp({
    data(){
        return {
            plans: ['The Single', 'The Curious', 'The Additct']
        }
    }
})
.component('plan', {
    template: '#plan-template',
    props: {
        name: {type: String, required: true}
    }
})
.mount('#app')