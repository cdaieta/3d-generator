var obtenerGuion = function () {
    let json = {
        "velocidad": 2,
        "duracion": 10,
        "materialDefault": "materialPisoDefault",
        "cameraAnimation": [
            // General Panorama
            {   "duration": 10,  
                "from": 
                    { "position": { "camX": 10, "camY": 5, "camZ": -12 }, "target": { "camX": 10, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 10, "camY": 30, "camZ": -15 }, "target": { "camX": 10, "camY": 5, "camZ": 1 } } 
            },
            // General Panorama from right to left
            {   "duration": 2.5,  
                "from": 
                    { "position": { "camX": -2, "camY": 15, "camZ": -10 }, "target": { "camX": 10, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": -2, "camY": 15, "camZ": -10 }, "target": { "camX": 5, "camY": 5, "camZ": 1 } } 
            },
            // General Panorama from left to right
            {   "duration": 2.5,  
                "from": 
                    { "position": { "camX": 22, "camY": 15, "camZ": -10 }, "target": { "camX": 5, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 22, "camY": 15, "camZ": -10 }, "target": { "camX": 10, "camY": 5, "camZ": 1 } } 
            },
            // General Panorama from left to right
            {   "duration": 5,  
                "from": 
                    { "position": { "camX": 1, "camY": 10, "camZ": -5 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 20, "camY": 10, "camZ": -5 }, "target": { "camX": 20, "camY": 5, "camZ": 1 } } 
            },
/*
        // Number 1
            // Move camera to start
            {   "duration": 2.5,  
                "from": 
                    { "position": { "camX": -2, "camY": 15, "camZ": -5 }, "target": { "camX": 10, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": -2, "camY": 15, "camZ": -5 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } } 
            },
            //Rotate camera to number 1
            {   "duration": 0.5,  
                "from": 
                    { "position": { "camX": -2, "camY": 15, "camZ": -5 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } } , 
                "to": 
                    { "position": { "camX": -1, "camY": 5, "camZ": -2 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } } 
            },
            // Move camera to number 1
            {   "duration": 1.5,  
                "from": 
                    { "position": { "camX": -1, "camY": 5, "camZ": -2 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } } , 
                "to": 
                    { "position": { "camX": 2, "camY": 5, "camZ": -3 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } }
            },
        // Number 2
            //Rotate camera to number 2
            {   "duration": 0.5,  
                "from": 
                    { "position": { "camX": 2, "camY": 5, "camZ": -3 }, "target": { "camX": 1, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 3, "camY": 5, "camZ": -2 }, "target": { "camX": 3, "camY": 5, "camZ": 1 } } 
            },
            // Move camera to number 2
            {   "duration": 2.5,  
                "from": 
                    { "position": { "camX": 3, "camY": 5, "camZ": -2 }, "target": { "camX": 3, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 4, "camY": 5, "camZ": -3 }, "target": { "camX": 3, "camY": 5, "camZ": 1 } } 
            },
        // Number 3
            //Rotate camera to number 3
            {   "duration": 0.5,  
                "from": 
                    { "position": { "camX": 4, "camY": 5, "camZ": -3 }, "target": { "camX": 3, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 5, "camY": 5, "camZ": -2 }, "target": { "camX": 5, "camY": 5, "camZ": 1 } } 
            },
            // Move camera to number 3
            {   "duration": 2.5,  
                "from": 
                    { "position": { "camX": 5, "camY": 5, "camZ": -2 }, "target": { "camX": 5, "camY": 5, "camZ": 1 } }, 
                "to": 
                    { "position": { "camX": 6, "camY": 5, "camZ": -3 }, "target": { "camX": 5, "camY": 5, "camZ": 1 } } 
            }
*/
        ],
        "zones": [
            {
                "material": "horizontalAsphalt",
                "from": {
                    "coordX": -200,
                    "coordZ": -1
                },
                "to": {
                    "coordX": 200,
                    "coordZ": 1
                },
            },
            {
                "material": "viaVertical",
                "from": {
                    "coordX": -1,
                    "coordZ": -200
                },
                "to": {
                    "coordX": -1,
                    "coordZ": 200
                }
            },
            {
                "from": {
                    "coordX": 1,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 1,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-1",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 2,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 2,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-2",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 3,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 3,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-3",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 4,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 4,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-4",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 5,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 5,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-5",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 6,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 6,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-6",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 7,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 7,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-7",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 8,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 8,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-8",
                    "posY": 0,
                    "scale": 1
                }
            },
            {
                "from": {
                    "coordX": 9,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 9,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-9",
                    "posY": 0,
                    "scale": 1
                }
            }
            ,
            {
                "from": {
                    "coordX": 10,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 10,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-1",
                    "posY": 0,
                    "scale": 1
                }
            }
            ,
            {
                "from": {
                    "coordX": 10.2,
                    "coordZ": 1
                },
                "to": {
                    "coordX": 10.2,
                    "coordZ": 1
                },
                "mesh": {
                    "model": "numero-0",
                    "posY": 0,
                    "scale": 1
                }
            }
        ]
    };
    return json;
}