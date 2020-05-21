var obtenerGuion = function () {
    let json = {
        "velocidad": 2,
        "duracion": 10,
        "materialDefault": "materialPisoDefault",
        "cameraAnimation": [
            {
                "duration": 2,
                "from": {
                    "position": {
                        "camX": 1,
                        "camY": 15,
                        "camZ": -5
                    },
                    "target": {
                        "camX": 1,
                        "camY": 0,
                        "camZ": 1
                    }
                },
                "to": {
                    "position": {
                        "camX": 2,
                        "camY": 5,
                        "camZ": -2
                    },
                    "target": {
                        "camX": 1,
                        "camY": 5,
                        "camZ": 1
                    }
                }
            }
        ],
        "zones": [
            {
                "material": "verticalAsphalt",
                "from": {
                    "coordX": -200,
                    "coordZ": -1
                },
                "to": {
                    "coordX": 200,
                    "coordZ": 1
                },
                "gapX": 2
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
            },
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
                    "model": "numero-10",
                    "posY": 0,
                    "scale": 1
                }
            }
        ]
    };
    return json;
}