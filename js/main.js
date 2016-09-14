var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, document.body.parentNode.clientWidth / document.body.parentNode.clientHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( document.body.parentNode.clientWidth, document.body.parentNode.clientHeight -4 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.matrixAutoUpdate = false;

camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 2;


function render() {
	applyLogics()
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();

var counter = 0;
function applyLogics(){
	
	cube.rotation.x += 0.03;
	cube.rotation.y += 0.03;
	counter++;
	if(counter > 10){
		counter=0;
		//cube.updateMatrix();
	}
}