import { App } from 'vue';
import  SuperFilter from './src/index.vue';

SuperFilter.install = (app:App) => {
    app.component(SuperFilter.name, SuperFilter)
}

export default SuperFilter