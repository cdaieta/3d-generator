function createSkybox(scene) {
    skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: sizeOfWorld }, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("resources/textures/skyboxes/skybox03/TropicalSunnyDay", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
    return skybox;
}

function loadMesh(mesh, posX, posZ) {

    let meshLoaded = mapMeshes[mesh.model];
    if (meshLoaded) {
        BABYLON.SceneLoader.LoadAssetContainer(meshLoaded.path, meshLoaded.fileName, scene, function (container) {
            let meshes = container.meshes;
            let materials = container.materials;

            //console.log("Before: mesh.model=" + mesh.model + " - scene.meshes=" + scene.meshes.length + " - container.meshes=" + container.meshes.length);

            // Add meshes to array of meshes loaded
            let meshLoaded = {};
            meshLoaded.name = mesh.model;
            meshLoaded.meshes = [];
            for (let index = scene.meshes.length; index < scene.meshes.length + container.meshes.length; index++) {
                meshLoaded.meshes.push(index);    
            }
            meshLoaded.to = mesh.to;
            meshLoaded.velocity = mesh.velocity;
            meshesLoaded.push(meshLoaded);

            // Scale and move meshes
            for (let index = 0; index < meshes.length; index++) {
                meshes[index].position.x += centroDeCelda(posX);
                meshes[index].position.y += mesh.posY != null ? mesh.posY : 0;
                meshes[index].position.z += centroDeCelda(posZ);

                if (mesh.scale != null) {
                    meshes[index].scaling = new BABYLON.Vector3(mesh.scale, mesh.scale, mesh.scale);
                }

                // if (mesh.rotation != null) {
                //     meshes[index].scaling = new BABYLON.Vector3(mesh.scale, mesh.scale, mesh.scale);
                // }
            }

            // Adds all elements to the scene
            container.addAllToScene();

            //console.log("After: mesh.model=" + mesh.model + " - scene.meshes=" + scene.meshes.length + " - container.meshes=" + container.meshes.length);
        });
    }
}

function centroDeCelda(coordenada) {
    return coordenada < 0 ? coordenada * escala + escala / 2 : (coordenada - 1) * escala + escala / 2;
    //return coordenada < 0 ? coordenada * escala : (coordenada - 1) * escala;
}

function uToPx(u) {
    return u * escala;
}

function loadMaterials(materials) {
    //Creation of a repeated textured material
    var materialPisoDefault = new BABYLON.StandardMaterial("texturePlane", scene);
    materialPisoDefault.diffuseTexture = new BABYLON.Texture("resources/textures/grass-02.jpg", scene);
    materialPisoDefault.diffuseTexture.uScale = widthDefaultFloor;//Repeat 5 times on the Vertical Axes
    materialPisoDefault.diffuseTexture.vScale = heightDefaultFloor;//Repeat 5 times on the Horizontal Axes
    materialPisoDefault.backFaceCulling = false;//Always show the front and the back of an element
    materials["materialPisoDefault"] = materialPisoDefault;

    var viaVertical = new BABYLON.StandardMaterial("texturePlane", scene);
    viaVertical.diffuseTexture = new BABYLON.Texture("resources/textures/rail_road.png", scene);
    viaVertical.diffuseTexture.uScale = 1.0;//Repeat 5 times on the Vertical Axes
    viaVertical.diffuseTexture.vScale = 5.0;//Repeat 5 times on the Horizontal Axes
    viaVertical.backFaceCulling = false;//Always show the front and the back of an element
    materials["viaVertical"] = viaVertical;

    var transparentMaterial = new BABYLON.StandardMaterial("transparentMaterial", scene);
    transparentMaterial.alpha = 0;
    materials["transparentMaterial"] = transparentMaterial;

    generateSquareMaterial("resources/textures/road-horizontal-01.jpg", "horizontalAsphalt", materials);
    generateSquareMaterial("resources/textures/road-vertical-01.jpg", "verticalAsphalt", materials);
}

function generateSquareMaterial(path, name, materials) {
    var horizontalAsphalt = new BABYLON.StandardMaterial("texturePlane", scene);
    horizontalAsphalt.diffuseTexture = new BABYLON.Texture(path, scene);
    horizontalAsphalt.diffuseTexture.uScale = 1.0;//Repeat 5 times on the Vertical Axes
    horizontalAsphalt.diffuseTexture.vScale = 1.0;//Repeat 5 times on the Horizontal Axes
    horizontalAsphalt.backFaceCulling = false;//Always show the front and the back of an element
    materials[name] = horizontalAsphalt;
}