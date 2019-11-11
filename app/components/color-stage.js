import Component from '@ember/component';
import { colors } from '../data/colors';

export default Component.extend({
  currentColor: null,
  init() {
    this._super(...arguments);
    alert(`GETTING COLORS`);
    this.getRandomColors();
  },
  actions: {
    getRandomColors () {
      let colorSet = myArray[Math.floor(Math.random()*myArray.length)];
      this.set('currentColor', colorSet);
    }
  }
});
