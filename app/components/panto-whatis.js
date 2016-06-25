import Ember from 'ember';

export default Ember.Component.extend({
    didRender() {
        this._super(...arguments);
        const winScrollTop = this.get('scrollTop');
        const thisTop = this.$('img').position().top;

        if (winScrollTop + $(window).height() > thisTop) {
            this.$('img').addClass('focus');
        } else {
            this.$('img').removeClass('focus');
        }
    }
});