
$(document).keypress(function (e) {
	var code = e.keyCode || e.which;
	if(code == 97) rocket_quad.position.x -= 0.5;
	if(code == 100) rocket_quad.position.x += 0.5;
	if(code == 119) rocket_quad.position.y += 0.5;
	if(code == 115) rocket_quad.position.y -= 0.5;
});

width = 1280.0
height = 720.0

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setSize( width, height );
var ambientLight = new THREE.AmbientLight(0xbbbbbb);
scene.add(ambientLight);
document.body.appendChild( renderer.domElement );

var rocket_quad = makeQuad('rocket.png');
var earth_quad = makeQuad('northpole.png');

earth_quad.scale.y = earth_quad.scale.x = 2;
rocket_quad.scale.y = 0.5;
rocket_quad.scale.x = rocket_quad.scale.y * 0.5

scene.add( earth_quad );
scene.add( rocket_quad );

camera.position.z = 5;

var render = function () {
	requestAnimationFrame( render );
	
	//rocket_quad.position.x+=0.1;
	renderer.render(scene, camera);
};

render();
