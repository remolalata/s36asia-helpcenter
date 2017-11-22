/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",
  "dragMap": false,
  "allowClickOnSelectedObject": false,
  "showBalloonOnSelectedObject": false,
  "zoomOnDoubleClick": false,
  "titles": [{
    "text": "WELCOME TO S36BET",
    "color": "#fba601",
    "size": 20
  }, {
    "text": "Please choose a language to continue",
    "bold": false,
    "color": "#fba601"
  }],

  "imagesSettings": {
    "rollOverColor": "#dcc09f",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#dcc09f",
    "color": "#dcc09f",
  },

  "areasSettings": {
    "unlistedAreasColor": "rgba(162, 162, 162, 0.65)",
    "autoZoom" : false,
    "unlistedAreasOutlineColor": "#000",
  },

  "zoomControl": {
    "zoomControlEnabled": false,
    "homeButtonEnabled": false
  },

  "dataProvider": {
    "map": "worldLow",
    "zoomLevel":1.5,
    "zoomLongitude": 85,
    "zoomLatitude": 25,
    "images": [ {
      "title": "China",
      "latitude": 40.86166,
      "longitude": 104.19539699999996,
      "img": "assets/img/lang/flag/china.png",
      "url": "http://s36asia.com/index.html"
    }, {
      "title": "United Kingdom",
      "latitude": 60.378051,
      "longitude": -1.43597299999999,
      "img": "assets/img/lang/flag/uk.png",
      "url": "http://s36asia.com/en/"
    }, {
      "title": "Japan",
      "latitude": 43.204824,
      "longitude": 139.252924,
      "img": "assets/img/lang/flag/japan.png",
      "url": "http://s36asia.com/jp/"
    }, {
      "title": "India",
      "latitude": 28.593684,
      "longitude": 78.96288000000004,
      "img": "assets/img/lang/flag/india.png",
      "url": "http://s36asia.com/in/"
    }, {
      "title": "Indonesia",
      "latitude": 5.789275,
      "longitude": 121.92132700000002,
      "img": "assets/img/lang/flag/indo.png",
      "url": "http://s36asia.com/id/"
    }, {
      "title": "Malaysia",
      "latitude": 12.110484,
      "longitude": 102.97576600000002,
      "img": "assets/img/lang/flag/malaysia.png",
      "url": "http://s36asia.com/my-bm/"
    }, {
      "title": "Taiwan",
      "latitude": 31.69781,
      "longitude": 120.96051499999999,
      "img": "assets/img/lang/flag/taiwan.png",
      "url": "http://s36asia.com/tw/"
    }, {
      "title": "Thailand",
      "latitude": 26.870032,
      "longitude": 99.99254100000007,
      "img": "assets/img/lang/flag/thai.png",
      "url": "http://s36asia.com/th/"
    }, {
      "title": "Vietnam",
      "latitude": 23.008324,
      "longitude": 109.277199,
      "img": "assets/img/lang/flag/vietnam.png",
      "url": "http://s36asia.com/index.html"
    } ]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.id = image.title;
  holder.title = image.title;
  holder.style.position = 'absolute';


  // create url
  var url = document.createElement( 'a' );
    url.setAttribute("href", image.url);
    url.className = 'url';
    holder.appendChild( url );

  // create img
  var img = document.createElement( 'img' );
    img.setAttribute("src", image.img);
    img.setAttribute("width", "304");
    img.setAttribute("height", "228");
    img.className = 'img';
    url.appendChild( img );

    // create name
    // var name = document.createElement( 'div' );
    //   name.className = 'name';
    //   url.appendChild( name );



  // create pulse
  // var pulse = document.createElement( 'div' );
  // pulse.className = 'pulse';
  // holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
