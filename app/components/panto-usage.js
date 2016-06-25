import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    didRender() {
        this._super(...arguments);
        const winScrollTop = this.get('scrollTop');
        const thisTop = this.$('#install').position().top;

        if (winScrollTop + $(window).height()/2 > thisTop) {
            this.$('code').addClass('focus');
        } else {
            this.$('code').removeClass('focus');
        }
    }
});