import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import App from '../ui/App.vue';


Meteor.startup(() => {
  new Vue({
        el: '#app',
        render: h => h(App)
      });
});
