var fs = require('fs'),
    _ = require('../../../lib/underscore.js');

var templateDir = './templates/',
    template,
    tplName,
    // Create a string which when evaluated will create the Template object 
    // with cachedTemplates
    compiledTemplateStr = 'var Templates = {cachedTemplates : {}}; \n\n';

// Iterate through all the templates in templates directory
fs.readdirSync(templateDir).forEach(function(tplFile) {

	// Read the template and store the strng in a variable
    template = fs.readFileSync(templateDir + tplFile, 'utf8');

    // Get the template name
    tplName = tplFile.substr(0, tplFile.lastIndexOf('.'));

    // Add template function's source to cachedTemplate
    compiledTemplateStr += 'Templates.cachedTemplates["' + tplName + '"] = ';
    compiledTemplateStr += _.template(template).source + '\n\n';
});

// Writee all the compiled code in another file
fs.writeFile('compiled.js', compiledTemplateStr, 'utf8');
