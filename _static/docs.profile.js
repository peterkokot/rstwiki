var profile = {
	action: "release",
	basePath: "_static",
	releaseName: "trunk",
	copyTests: false,
	mini: false,
	cssOptimize: "comments.keepLines",
	optimize: "",
	layerOptimize: "",
	selectorEngine: "acme",

	packages:[{
		name: "dojo",
		location: "../dojo"
	},{
		name: "dijit",
		location: "../dijit"
	},{
		name: "dojox",
		location: "../dojox"
	},{
		name: "docs",
		location: "../docs"
	}],

	layers: {
		"docs/wiki": {
			include: []
		},
		"docs/guide": {
			include: []
		}
	},
	
	staticHasFeatures: {
		"dojo-firebug": false,
		"host-browser": true
	}
};

