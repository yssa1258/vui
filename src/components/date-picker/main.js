/*require('../../mixins/locale');*/

import Vue from 'vue'
import App from './app.vue'
import '../../css/components/date-picker.css';
import '../../css/font/iconfont.css';
import '../../css/main.css';

new Vue({
    el: '#app',
    template: '<div class="content"><App/></div>',
    components: { App }
})