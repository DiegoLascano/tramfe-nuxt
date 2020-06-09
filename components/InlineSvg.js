class Svg {
  constructor(name) {
    let div = document.createElement('div');
    // dynamic webpack require was configured in the webpack file BE CAREFUL
    div.innerHTML = require('../assets/svg/' + name + '.svg');

    let fragment = document.createDocumentFragment();
    fragment.appendChild(div);

    this.svg = fragment.querySelector('svg');
  }
  classes(classes) {
    if (classes) {
      for (let i = 0; i < classes.length; i++) {
        this.svg.classList.add(classes[i]);
      }
    }
    return this;
  }
  // this returns the object "automatically"
  toString() {
    return this.svg.outerHTML;
  }
}

export default {
  props: ['name', 'classes'],

  render(h) {
    let classes = this.classes.split(" ");
    return h('div', {
      attrs: {
        class: 'inline-block',
      },
      domProps: {
        innerHTML: new Svg(this.name)
          .classes(classes)
      },
    });

  }
}
