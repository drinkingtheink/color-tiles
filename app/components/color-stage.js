import Component from '@ember/component';
import { colors } from '../data/colors';

export default Component.extend({
  count: 500,
  structure: null,
  currentColor: null,
  init() {
    this._super(...arguments);
    this.createStruture();
  },
  getRandomColor () {
    let colorSet = colors[Math.floor(Math.random()*colors.length)];
    return colorSet;
  },
  createStruture () {
    let structure = [];
    let count = this.get('count');
    let i;
    for (i = 0; i < count; i++) { 
      structure.push(this.getRandomColor());
    }
    this.set('structure', structure);
  },
  actions: {
    resetStructure () {
      this.createStruture();
    }
  }
});
