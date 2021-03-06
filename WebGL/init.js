var camera, scene, renderer;
var geometry, material, mesh;
//
function init() {
  //
  camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight, 0.01, 10 );
  camera.position.z = 1;
  //
  scene = new THREE.Scene();
  //
  geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  material = new THREE.MeshNormalMaterial();
  //
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  //
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth-100, window.innerHeight-100 );
  document.body.appendChild( renderer.domElement );
}
//
function animate() {
  requestAnimationFrame( animate );
  mesh.rotation.x += 0.0043;
  mesh.rotation.y += 0.0022;
  renderer.render( scene, camera );
}
//
//
$(document).ready(function() {
  init();
  animate();
});
