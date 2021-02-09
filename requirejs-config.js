var config = {
	deps:['Magento_Swatches/js/custom-swatch'],
	paths: {            
		fontawesome: "js/fontawesome",
		bootstrapjs: "js/bootstrap.min",
		'owlcarousel': "js/owl.carousel.min"
	},   
	shim: {
		'owlcarousel': {
            deps: ['jquery']
        },
		'fontawesome': {
			deps: ['jquery']
		}
	}
};