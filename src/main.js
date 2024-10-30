import { createApp } from 'vue';

import App from './App.vue';
import CustomerContact from './components/CustomerContact.vue';
import NewCustomer from './components/NewCustomer.vue';

const app = createApp(App);

app.component('customer-contact', CustomerContact);
app.component('new-customer', NewCustomer);

app.mount('#app');
