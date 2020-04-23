var obtenerGuion = function () {
    let json = {
        velocidad: 2,
        duracion: 10,
        materialDefault: "materialPisoDefault",
        zones: [
            {
                material: "horizontalAsphalt",
                from: {
                    coordX: -500,
                    coordZ: -1
                },
                to: {
                    coordX: 500,
                    coordZ: -1
                }
            },
            {
                material: "verticalAsphalt",
                from: {
                    coordX: -1,
                    coordZ: -500
                },
                to: {
                    coordX: -1,
                    coordZ: 500
                }
            },
            {
                from: {
                    coordX: -100,
                    coordZ: 1
                },
                to: {
                    coordX: 100,
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
                    coordZ: 1
                },
                to: {
                    coordX: 10,
                    coordZ: 10
                },
                mesh: {
                    model: "chancho",
                    posY: 0,
                    scale: 0.6,
                    probability: 25
                }
            },
            {
                from: {
                    coordX: 10,
                    coordZ: 1
                },
                to: {
                    coordX: 20,
                    coordZ: 10
                },
                mesh: {
                    model: "oveja",
                    posY: 0,
                    scale: 0.3,
                    probability: 25
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
                    scale: 0.8,
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
                        coordX: 100,
                        coordZ: 10
                    },
                },
                gapX: 10,
                gapZ: 10,
        },
            {
                from: {
                    coordX: -80,
                    coordZ: 1
                },
                to: {
                    coordX: -80,
                    coordZ: 1
                },
                mesh: {
                    model: "avion",
                    posY: 30,
                    scale: 0.8,
                    to: {
                        coordX: 100,
                        coordZ: 1
                    },
                    rotation: {
                        rX: 0,
                        rY: 90,
                        rZ: 0
                    },
                    gapX: 2,
                    gapZ: 2,
                    probability: 100
                },
            },


        ],
    }
    return json;
}