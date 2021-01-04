// Company model
var Company = Backbone.Model.extend({
    defaults: {
        name: '',
        specialty: ''
    }
});

// Employee model
var Employee = Backbone.Model.extend({
    defaults: {
        name: ''
    }
});

// Employees collection
var Employees = Backbone.Collection.extend({
    model: Employee
});

// Create an ItemView instance for the child items
var EmployeeItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: _.template('<%= name %>')
});

// Create a collection view and pass the item view class
var CompanyView = Marionette.CompositeView.extend({
    template: _.template(['<h2><%= name %> </h2>',
        '<span><%= specialty %> </span>',
        '<ul class="employees"></ul>'
    ].join('')),
    itemView: EmployeeItemView,
    itemViewContainer: '.employees',

    // Add a company details to this view's model and collection
    addCompany: function(data) {
        if (!data) return;

        if (data.employees) {
            this.collection = new Employees(data.employees);
        }

        delete data.employees;
        this.model = new Company(data);
    }
});

var companyView = new CompanyView();

companyView.addCompany({
    name: 'Innofied',
    specialty: 'Team of JavaScript specialists',
    employees: [{
        name: 'Swarnendu De'
    }, {
        name: 'Sandip Saha'
    }]
});

$(document.body).append(companyView.render().el);
