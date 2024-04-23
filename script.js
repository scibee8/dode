window.onload = () => {
    let testEntityAdded = false;
    let entity = null;

    const el = document.querySelector("[gps-new-camera]");
    const rotate_b = document.getElementById('rotate');

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            entity = document.createElement("a-entity");
            entity.setAttribute('gltf-model', 'url(./assets/venus/scene.gltf)');
            entity.setAttribute("scale", {
                x: 1, 
                y: 1,
                z: 1
            });
            
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);
        }
        testEntityAdded = true;
    });

    let r_c=0;
    rotate_b.addEventListener('click', function() {

        if(r_c==0){
            entity.setAttribute("rotation", { x: 0, y: 90, z: 0});
            r_c++;
        }else if(r_c==1){
            entity.setAttribute("rotation", { x: 0, y: 180, z: 0});
            r_c++;
        }else if(r_c==2){
            entity.setAttribute("rotation", { x: 0, y: 270, z: 0});
            r_c++;
        }else{
            entity.setAttribute("rotation", { x: 0, y: 0, z: 0});
            r_c=0;
        }

        
    });
   
};
