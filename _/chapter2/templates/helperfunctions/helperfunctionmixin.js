var templateHelperMixin = function(templateString){
	var tplFunction = _.template(templateString);
	return function(data){
		return tplFunction(_.extend({}, templateHelperFunctions, data));
	}
}

