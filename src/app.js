const css = require('./Furtive/all.scss');
var view = require('./template.marko'); // Import `./view.marko`
var resultPromise = view.render({});

resultPromise.then((result) => {
    result.appendTo(document.body);
});
