var obtenerGuion = function () {
    let json = {
        velocidad: 2,
        duracion: 10,
        materialDefault: "materialPisoDefault",
        cameraAnimation: [
            {
                duration: 5,
                from: {
                    position: { camX: -25, camY: 50, camZ: -5 },
                    target: { camX: -15, camY: 10, camZ: 20 }
                },
                to: {
                    position: { camX: 1, camY: 5, camZ: -5 },
                    target: { camX: 1, camY: 5, camZ: 1 },
                }
            },
            {
                duration: 15,
                from: {
                    position: { camX: 1, camY: 5, camZ: -5 },
                    target: { camX: 1, camY: 5, camZ: 1 },
                },
                to: {
                    position: { camX: 40, camY: 5, camZ: -5 },
                    target: { camX: 1, camY: 5, camZ: 1 },
                }
            },
            {
                duration: 15,
                from: {
                    position: { camX: 40, camY: 5, camZ: -5 },
                    target: { camX: 1, camY: 5, camZ: 1 },
                },
                to: {
                    position: { camX: 40, camY: 5, camZ: 20 },
                    target: { camX: 1, camY: 5, camZ: 1 },
                }
            },
            {
                duration: 15,
                from: {
                    position: { camX: 40, camY: 5, camZ: 20 },
                    target: { camX: 1, camY: 5, camZ: 1 },
                },
                to: {
                    position: { camX: 1, camY: 5, camZ: 15 },
                    target: { camX: 20, camY: 5, camZ: -1 },
                }
            },
            {
                duration: 15,
                from: {
                    position: { camX: 1, camY: 5, camZ: 15 },
                    target: { camX: 20, camY: 5, camZ: -1 },
                },
                to: {
                    position: { camX: -20, camY: 50, camZ: 10 },
                    target: { camX: 20, camY: 5, camZ: -1 },
                }
            },
        ],

        zones: [
            {
                from: {
                    coordX: 100,
                    coordZ: 1000
                },
                to: {
                    coordX: 2000,
                    coordZ: 1000
                },
                mesh: {
                    model: "mountain",
                    posY: 0,
                    scale: 0.9,
                    probability: 50
                },
                gapX: 100,
                // gapZ: 2

            },
            {
                material: "horizontalAsphalt",
                from: {
                    coordX: -200,
                    coordZ: -1
                },
                to: {
                    coordX: 200,
                    coordZ: -1
                }
            },
            {
                material: "verticalAsphalt",
                from: {
                    coordX: -1,
                    coordZ: -200
                },
                to: {
                    coordX: -1,
                    coordZ: 200
                }
            },
            {
                from: {
                    coordX: -50,
                    coordZ: 1
                },
                to: {
                    coordX: 50,
                    coordZ: 1
                },
                mesh: {
                    model: "molino",
                    posY: 0,
                    scale: 0.1
                },
                gapX: 10,
                gapZ: 2

            },
            {
                from: {
                    coordX: -15,
                    coordZ: 20
                },
                to: {
                    coordX: -15,
                    coordZ: 20
                },
                mesh: { model: "granero", posY: 0, scale: 0.3 }
            }, 

            {
                from: {
                    coordX: 1,
                    coordZ: 2
                },
                to: {
                    coordX: 10,
                    coordZ: 20
                },
                mesh: {
                    model: "chancho",
                    posY: 0,
                    scale: 0.6,
                    probability: 10
                }
            },
            {
                from: {
                    coordX: 10,
                    coordZ: 2
                },
                to: {
                    coordX: 20,
                    coordZ: 20
                },
                mesh: {
                    model: "oveja",
                    posY: 0,
                    scale: 0.3,
                    probability: 10
                }
            },
            {
                from: {
                    coordX: 20,
                    coordZ: 2
                },
                to: {
                    coordX: 30,
                    coordZ: 20
                },
                mesh: {
                    model: "gallina",
                    posY: 0,
                    scale: 0.6,
                    probability: 10
                }
            },
            {
                from: {
                    coordX: 30,
                    coordZ: 2
                },
                to: {
                    coordX: 40,
                    coordZ: 20
                },
                mesh: {
                    model: "vaca",
                    posY: 0,
                    scale: 0.1,
                    probability: 10
                }
            },
            {
                from: {
                    coordX: -500,
                    coordZ: -500
                },
                to: {
                    coordX: 1,
                    coordZ: 1
                },
                mesh: {
                    model: "nube",
                    posY: 40,
                    scale: 0.75,
                    to: {
                        coordX: 1000,
                        coordZ: 1000
                    },
                    probability: 1
                },
                gapX: 10,
                gapZ: 10,
            },
            {
                from: {
                    coordX: -100,
                    coordZ: -100
                },
                to: {
                    coordX: -100,
                    coordZ: 100
                },
                mesh: {
                    model: "globo",
                    posY: 15,
                    scale: 0.8,
                    to: {
                        coordX: 1000,
                        coordZ: 10
                    },
                },
                gapX: 10,
                gapZ: 10,
            },
            {
                from: {
                    coordX: -200,
                    coordZ: 100
                },
                to: {
                    coordX: -200,
                    coordZ: 100
                },
                mesh: {
                    model: "avion",
                    posY: 15,
                    scale: 0.8,
                    to: {
                        coordX: 1000,
                        coordZ: 100
                    },
                    rotation: {
                        rX: 0,
                        rY: 90,
                        rZ: 0
                    },
                    gapX: 2,
                    gapZ: 2,
                    probability: 100,
                    velocity: 2
                },
            },
            {
                from: {
                    coordX: -1,
                    coordZ: 50
                },
                to: {
                    coordX: -1,
                    coordZ: 50
                },
                mesh: {
                    model: "tractor",
                    //posY: 0,
                    scale: 0.2,
                    to: {
                        coordX: -1,
                        coordZ: -100
                    },
                    rotation: {
                        rX: 0,
                        rY: 90,
                        rZ: 0
                    },
                    gapX: 2,
                    gapZ: 2,
                    probability: 100,
                    velocity: 1
                },
            },


        ],
    }
    return json;
}