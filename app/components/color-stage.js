import Component from '@ember/component';
import { colors } from '../data/colors';

export default Component.extend({
  count: 2000,
  structure: null,
  currentColor: null,
  interval: null,
  init() {
    this._super(...arguments);
    this.createStruture();

    setInterval(() => { this.createStruture(); }, 150);
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
    },
    alertJoke () {
      alert(`What did the Monster have for dessert? EYES cream!`);
    }
  }
});
