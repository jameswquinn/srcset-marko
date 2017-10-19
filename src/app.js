var css = require('./Furtive/all.scss');
import lazysizes from 'lazysizes';

var view = require('./template.marko'); // Import `./view.marko`
var result = view.renderSync({});
result.appendTo(document.body);
