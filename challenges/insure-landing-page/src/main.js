import { createApp } from 'vue';
import App from './App.vue';

import VHeading from './components/UI/VHeading.vue';
import VDescription from './components/UI/VDescription.vue';
import VButton from './components/UI/VButton.vue';

const app = createApp(App);

app.component('Heading', VHeading);
app.component('Description', VDescription);
app.component('Button', VButton);

app.mount('#app');
