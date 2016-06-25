import Ember from 'ember';
import $ from 'jquery';

var Pos = Ember.Object.extend({
  scrollTop: null
});

var pos = Pos.create({
    scrollTop: $(window).scrollTop()
});

export default Ember.Route.extend({
    model() {
        return pos;
    }
});

$(window).scroll(() => {
    pos.set('scrollTop', $(window).scrollTop());
});