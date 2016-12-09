function AdminDldTaskService() {

	var ROUTE = apiRoutePrefixNoSlash() + '/admin/dld-tasks';

	this.getAll = function(func) {
		$.get(ROUTE, func).fail(showAppModelForJqError);
	}

	this.disable = function(id, func) {
		$.post(ROUTE + id + '/disable', func).fail(showAppModelForJqError);
	}

	this.enable = function(id, func) {
		$.post(ROUTE + id + '/enable', func).fail(showAppModelForJqError);
	}

}
