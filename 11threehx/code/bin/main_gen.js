// Generated by Haxe 4.0.0+ef18b627e
(function ($global) { "use strict";
var MainGen = function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
	camera.position.z = 2;
	var renderer = new THREE.WebGLRenderer({ antialias : true});
	renderer.setClearColor("#2E2B40");
	renderer.setSize(window.innerWidth,window.innerHeight);
	window.document.body.appendChild(renderer.domElement);
	var geometry = new THREE.BoxGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial({ color : "#433F81"});
	var cube01 = new THREE.Mesh(geometry,material);
	scene.add(cube01);
	var geometry1 = new THREE.BoxGeometry(3,3,3);
	var material1 = new THREE.MeshBasicMaterial({ color : "#433F81", wireframe : true});
	var cube01_wireframe = new THREE.Mesh(geometry1,material1);
	scene.add(cube01_wireframe);
	var geometry2 = new THREE.BoxGeometry(1,1,1);
	var material2 = new THREE.MeshBasicMaterial({ color : "#A49FEF"});
	var cube02 = new THREE.Mesh(geometry2,material2);
	scene.add(cube02);
	var geometry3 = new THREE.BoxGeometry(3,3,3);
	var material3 = new THREE.MeshBasicMaterial({ color : "#A49FEF", wireframe : true});
	var cube02_wireframe = new THREE.Mesh(geometry3,material3);
	scene.add(cube02_wireframe);
	var geometry4 = new THREE.BoxGeometry(10,0.05,0.5);
	var material4 = new THREE.MeshBasicMaterial({ color : "#00FFBC"});
	var bar01 = new THREE.Mesh(geometry4,material4);
	bar01.position.z = 0.5;
	scene.add(bar01);
	var geometry5 = new THREE.BoxGeometry(10,0.05,0.5);
	var material5 = new THREE.MeshBasicMaterial({ color : "#ffffff"});
	var bar02 = new THREE.Mesh(geometry5,material5);
	bar02.position.z = 0.5;
	scene.add(bar02);
	var render = null;
	render = function(f) {
		window.requestAnimationFrame(render);
		cube01.rotation.x += 0.01;
		cube01.rotation.y += 0.01;
		cube01_wireframe.rotation.x += 0.01;
		cube01_wireframe.rotation.y += 0.01;
		cube02.rotation.x -= 0.01;
		cube02.rotation.y -= 0.01;
		cube02_wireframe.rotation.x -= 0.01;
		cube02_wireframe.rotation.y -= 0.01;
		bar01.rotation.z -= 0.01;
		bar02.rotation.z += 0.01;
		renderer.render(scene,camera);
	};
	render(0);
};
MainGen.main = function() {
	var app = new MainGen();
};
MainGen.main();
})({});

//# sourceMappingURL=main_gen.js.map