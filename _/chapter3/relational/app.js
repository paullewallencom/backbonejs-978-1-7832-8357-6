var Company = Backbone.RelationalModel.extend({
    defaults: {
        name: '',
        employees: []
    },
    relations: [{
        // 'type' can be HasOne or HasMany or a direct reference to a relation
        type: Backbone.HasMany,

        // 'key' refer to an attribute name of the related model
        key: 'employees',
        relatedModel: 'Employee',

        // a collection of the related models
        collectionType: 'Employees',

        // defines the reverse relation with this model
        reverseRelation: {
            key: 'worksIn',
            includeInJSON: 'id'
            // 'relatedModel' is automatically set to 'Company'; the 'relationType' to 'HasOne'.
        }
    }]
});

var Employee = Backbone.RelationalModel.extend({
    defaults: {
        name: '',
        worksIn : null
    }
});

var Employees = Backbone.Collection.extend({
    model: Employee
});

// We've now created a fully managed relation. When you add or remove model from `innofied.employees`,
// or update `employee.worksIn`, the other side of the relation will automatically be updated.
var innofied = new Company({
    name: 'Innofied'
});

var john = new Employee({
    name: 'John Doe',
    worksIn: innofied
});

var swarnendu = new Employee({
    name : 'Swarnendu De',
    worksIn : innofied
});

// `animals` in `artis` now contains `lion`
alert(innofied.get('employees').pluck('name'));

// var amersfoort = new Company({
//     name: 'Dierenpark Amersfoort',
//     animals: [lion]
// });

// // `lion` now livesIn `amersfoort`, and `animals` in `artis` no longer contains `lion`
// alert(lion.get('livesIn').get('name') + ', ' + artis.get('animals').length);
