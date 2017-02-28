import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleShowHide() {
      this.toggleProperty('isWide');
    }
  }
});
