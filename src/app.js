function getImage(image) {return require('./uploads/' + image)};

// loaded via srcset loader as specified in the webpack config
/*
['logo.jpeg', 'villianess.jpeg', 'villianess2.jpeg', 'villianess3.jpeg', 'villianess4.jpeg', 'villianess5.jpeg', 'villianess6.jpeg', 'villianess7.jpeg', 'villianess8.jpeg', 'villianess9.jpeg', 'villianess10.jpeg'].map(img => getImage(img)).forEach((src) => {
  const image = new Image();
  image.className = 'lazyload'
  image.srcset = src.srcSet;
  image.src = src.sources['800w'];
  image.sizes = '(max-width: 1400px) 100vw, 1400px';
  image.style = 'width: 100%';
  const container = document.getElementById ("container");
  container.appendChild(image);
});
*/


var view = require('./template.marko'); // Import `./view.marko`
var result = view.renderSync({});

result.appendTo(document.body);
