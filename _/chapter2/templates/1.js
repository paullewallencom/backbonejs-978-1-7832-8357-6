var TplManager = {
    templates: {}
};

TplManager.templates.userProfile = [
    '<h3> <%= name %> </h3>',
    '<img src="<%= avatar %> />"',
    '<p>Address : <%= address %></p>'
].join('\n');

TplManager.templates.userLogin = [
    '<ul>',
    '<li>Username: <input type="text" /></li>',
    '<li>Password: <input type="password" /></li>',
    '</ul>'
].join('\n');


/************************ Caching *************************/

var TplManager = {
    templates: {},
    cachedTemplates: {},

    getCachedTemplate: function(tplName) {
        // If compiled template already exists, return that
        if (this.cachedTemplates.hasOwnProperty(tplName)) {
            return this.cachedTemplates[tplName];
        }

        if (this.templates.hasOwnProperty(tplName)) {
            // Store the template functions 
            this.cachedTemplates[tplName] = _.template(this.templates[tplName]);
        }

        return this.cachedTemplates[tplName];
    }
};

TplManager.getCachedTemplate('userProfile');


/************************* With Node.js ***********************/

var fs = require('fs'),
    _ = require('underscore.js');

var templateDir = './templates/',
    template,
    tplName,
    compiledTemplateStr = 'var Templates = {}; \n\n';

fs.readdirSync(templateDir).forEach(function(tplFile) {
    template = fs.readFileSync(templateDir + tplFile, 'utf8');
    tplName = tplFile.substr(0, tplFile.lastIndexOf('.'));

    result += 'Templates."' + tplName + '" = ';
    result += 

});

fs.writeFile('compiled.js', result, 'utf8');
