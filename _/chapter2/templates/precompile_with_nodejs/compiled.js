var Templates = {
    cachedTemplates: {}
};

Templates.cachedTemplates["userLogin"] = function(obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function() {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<ul>\r\n    <li>Username:\r\n        <input type="text" value="' +
            ((__t = (username)) == null ? '' : __t) +
            '" />\r\n    </li>\r\n    <li>Password:\r\n        <input type="password" value="' +
            ((__t = (password)) == null ? '' : __t) +
            '" />\r\n    </li>\r\n</ul>\r\n';
    }
    return __p;
}

Templates.cachedTemplates["userProfile"] = function(obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function() {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<h3>\r\n    ' +
            ((__t = (name)) == null ? '' : __t) +
            '\r\n</h3>\r\n<img src="' +
            ((__t = (avatar)) == null ? '' : __t) +
            '" />\r\n<p>Address :\r\n    ' +
            ((__t = (address)) == null ? '' : __t) +
            '\r\n</p>\r\n';
    }
    return __p;
}
