import { TroisJSVuePlugin } from 'troisjs';
import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
    apiKey: "AIzaSyC-E-pWbYIJKdGvgT8l9P0KzZsgprfZ6R0",
    authDomain: "vuehue-3cfd0.firebaseapp.com",
    projectId: "vuehue-3cfd0",
    storageBucket: "vuehue-3cfd0.appspot.com",
    messagingSenderId: "252114817997",
    appId: "1:252114817997:web:d60c04f48826df5c426a84",
    measurementId: "G-PL47JLW5NV"
  };
const app = createApp(App);
const gapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(gapp);

app.use(createPinia());
app.use(router);
app.use(TroisJSVuePlugin);

app.mount("#app");
