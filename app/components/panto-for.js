import Ember from 'ember';

export default Ember.Component.extend({
    didRender() {
        this._super(...arguments);
        const winScrollTop = this.get('scrollTop');
        const thisTop = this.$('table').position().top;

        if (winScrollTop + $(window).height() > thisTop) {
            this.$('table').addClass('focus');
        } else {
            this.$('table').removeClass('focus');
        }
    }
});
