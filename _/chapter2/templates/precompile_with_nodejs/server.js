var application_root = __dirname,
express = require( 'express' ),
path = require( 'path' ),
fs = require('fs');

var compiledTemplateFile = 'compiled.js',
app = new express();

app.configure( function() {
  app.use( app.router );
  app.use( express.static( path.join( application_root, 'public') ) );
});

// While templates.js file is loaded, it will send the compiled.js file's content
app.get('/templates.js', function(req, res){
	res.type('application/javascript').send(fs.readFileSync(compiledTemplateFile, 'utf8'));
});

app.listen(3000);