
function makeQuad(texture){
	
	var geometry = new THREE.PlaneGeometry (1,1);
	
	var material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: true });
	return new THREE.Mesh( geometry, material );
}