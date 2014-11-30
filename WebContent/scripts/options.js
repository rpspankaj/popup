
Ext.namespace("Inspire.options");


OpenLayers.Util.onImageLoadErrorColor = "transparent";
OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";

Inspire.options.locations = {
	TILBURG: '5.0850, 51.5639',
	LIMBURG: '5.891, 50.775',
	AMERSFOORT: '5.2861, 52.1613',
	LOSSER: '6.84, 52.30'

};

Inspire.options.urls = {
	
		
                GS2_INSPIRE_google:'http://maps.googleapis.com/maps/api/streetview?size=200x200&location=40.720032,%20-73.988354&heading=235&sensor=false'
	};

                    
               
/** All MapPanel options. */

var geographic = new OpenLayers.Projection("EPSG:4326");
            var mercator = new OpenLayers.Projection("EPSG:900913");

            var world = new OpenLayers.Bounds(75.1686248779297, 11.6738004684449,75.9400465993868, 12.2997522354126).transform(
                geographic, mercator
            );
            var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];     
            var vienna_center = new OpenLayers.LonLat(40.65, -73.95).transform(
                geographic, mercator
            );
Inspire.options.map = {
	    settings : {
		allOverlays : true,
		projection: mercator,
                displayProjection: geographic,
	    units: 'm',
		
		maxResolution: 5,
	    //resolutions: [0.0036062896413493],
		//maxExtent:' 776037.8338000001, 2155054.5895000026,782293.1706999997, 2161480.3772',
     	maxExtent: world,
        
	 center: '8420178.761,1303022.784 ', 
             zoom:8, 
	    theme: null
           
		
	},

	layers: [

		
                                                       /*
                                                        * Google Maps
                                                        */
                                                    new OpenLayers.Layer.Google(
                                                                       "Google Streets",
                                                                     
                                                                       // the default
                                                                       {type: google.maps.MapTypeId.ROADMAP, visibility: true},
                                                                       {singleTile: false, buffer: 0,transparent: true, isBaseLayer: true}
                                                       ),

                                                       new OpenLayers.Layer.Google(
                                                                       "Google Satellite",
                                                                       {type: google.maps.MapTypeId.SATELLITE, visibility: false},
                                                                       {singleTile: false, buffer: 0,transparent: true, isBaseLayer: true}

                                                       ),

                                                       new OpenLayers.Layer.Google(
                                                                       "Google Terrain",
                                                                       {type: google.maps.MapTypeId.TERRAIN, visibility: false},
                                                                       {singleTile: false, buffer: 0,transparent: true, isBaseLayer: true}
                                                       ),
                                                       //  new OpenLayers.Layer.OSM(), 
                                                       
                                                       /*
                                                        * Basemap OpenStreetMap
                                                        */
                                                 
                                               

		/*    wheregroupOSM: new OpenLayers.Layer.WMS(
		 "OpenStreetMapEU",
		 Inspire.options.urls.WHEREGROUP_WMS,
		 {layers: 'OSM_basic', format: 'image/png', transparent: false, version: '1.3.0', CRS: 'EPSG:4326'},
		 {singleTile: true, opacity: 0.2, isBaseLayer: false, visibility: false, attribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>", noLegend: true, yx: {'EPSG:4258': true}}
		 ), */

		/*new OpenLayers.Layer.WMS(
				"Block Boundary",
				Inspire.options.urls.TILECACHE,
				{layers: "TIPTM:Block", format: "image/png", transparent: false},
				{singleTile: false, isBaseLayer: false, visibility: false,noLegend: false,featureInfoFormat: "application/vnd.ogc.gml"}
		),
        */
     
     	
	],

	toolbar : [
		{type: "featureinfo", options: {max_features: 40}},
		{type: "-"} ,
		{type: "pan"},
		{type: "zoomin"},
		{type: "zoomout"},
		{type: "zoomvisible"},
		{type: "-"} ,
		{type: "zoomprevious"},
		{type: "zoomnext"},
		//{type: "-"},
		{type: "measurelength"},
		//{type: "measurearea"},
		{type: "-"},
		{type: "ExportPdf"},
                {type:"-"},
                {type:"Print"},
		{type: "search_nominatim",
			// Optional options, see NominatimSearchCombo.js
			options : {
				emptyText: 'Type an address or placename',
				// See http://open.mapquestapi.com/nominatim/
				url: '',
				zoom: 11
			}}
	]
};

/**
 * Describes the menu layout and links to content items.
 * This config object is included in the Layout config below.
 *
 */

 // Menu details calling method front view
/*Inspire.options.menuItems = [
	{
		id: 'hr-menu-bar',
		xtype: 'toolbar',
		floating: false,
		items:[
			{
				xtype: 'tbspacer',
				width: 240
				},{
				xtype: 'tbspacer',
				width: 20
			},
			{
				xtype: 'tbbutton',
				text: 'Home',
				card: 'hr-geo-main',
				page: 'home',
			 
				handler: ksrec.widgets.MenuHandler.onSelect
			},{
				xtype: 'tbspacer',
				width: 20
			},
			{
				xtype: 'tbbutton',
				text: 'Registration',
				card: 'hr-content-main',
				page: 'registration_school',
				handler: ksrec.widgets.MenuHandler.onSelect
			},
			{
				xtype: 'tbspacer',
				width: 20
			},
			{
				xtype: 'tbbutton',
				text: 'Map',
				card: 'hr-geo-main',
				handler: ksrec.widgets.MenuHandler.onSelect
			},
			{
				xtype: 'tbspacer',
				width: 20
			},
			{
				xtype: 'tbbutton',
				text: 'Report',
				card: 'hr-content-main',
				page: 'nestedloading',
				handler: ksrec.widgets.MenuHandler.onSelect
			},
			{
				xtype: 'tbspacer',
				width: 20
			},
			 
			
			{
				xtype: 'tbbutton',
				text: 'Help',
				card: 'hr-content-main',
				page: 'display',
				handler: ksrec.widgets.MenuHandler.onSelect
			},
			{
				xtype: 'tbspacer',
				width: 20
			},
			{
				xtype: 'tbbutton',
				text: 'Contact',
				card: 'hr-content-main',
				page: 'contact',
				handler: ksrec.widgets.MenuHandler.onSelect
			},
                        {
				xtype: 'tbspacer',
				width: 20
			},
			{
				xtype: 'tbbutton',
				text: 'About Us',
				card: 'hr-content-main',
				page: 'contact',
				handler: ksrec.widgets.MenuHandler.onSelect
			}
        
                        
                       
		]
	}
];*/
Ext.onReady(function(){
    var win;
    var button = Ext.get('btn_getdirection');

    button.on('click', function(){
        // create the window on the first click and reuse on subsequent clicks
        if(!win){
            win = new Ext.Window({
                applyTo:'hello-win',
                layout:'fit',
                width:500,
                height:300,
                closeAction:'hide',
                plain: true,

                items: new Ext.TabPanel({
                    applyTo: 'hello-tabs',
                    autoTabs:true,
                    activeTab:0,
                    deferredRender:false,
                    border:false
                }),

                buttons: [{
                    text:'Submit',
                    disabled:true
                },{
                    text: 'Close',
                    handler: function(){
                        win.hide();
                    }
                }]
            });
        }
        win.show(this);
    });
});
// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option


Inspire.options.query = [
	{
            
		id: 'hr-info-west',
		xtype: 'hr_htmlpanel',
		floating: false,
                
		items:[
			
                                                                            ]
        }
];
/** Values for ContextBrowser (shortcuts to jump to specific layers/zoom/center on map. */
Inspire.options.contexts = [
	{
		id: 'tilburg',
		name: 'Show Addresses (Tilburg)',
		desc: 'Pan and zoom to show Addresses',
		layers: ['panchayath', 'Ekm_rail'],
		x: 5.0850,
		y: 51.5639,
		zoom: 12
	},
	/*	{
	 id: 'limburg',
	 name: 'Show Cadastral Parcels (Limburg)',
	 desc: 'Pan and zoom to Cadastral Parcels',
	 layers: ['OpenStreetMap', 'INSPIRE Addresses', 'INSPIRE Parcels'],
	 x: 5.891,
	 y: 50.775,
	 zoom: 11
	 },    */
	{
		id: 'losser',
		name: 'Show Cadastral Parcels (Losser)',
		desc: 'Pan and zoom to Cadastral Parcels',
		layers: ['Block Boundary', 'CP.CadastralParcel'],
		x: 7.0377,
		y: 52.2633,
		zoom: 9
	}

];

