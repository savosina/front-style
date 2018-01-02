var handlebars  = require('handlebars');

handlebars.registerHelper('upper', function(str){
    return str.toUpperCase();
});

module.exports = handlebars;