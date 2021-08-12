export class CellLinkModel {
    private idFrom;
    private idTo;
    private text;
    constructor(idFrom, idTo, text) {
        this.idFrom = idFrom;
        this.idTo = idTo;
        this.text = text;
    }
    getModel() {
        return {
            "type": "standard.Link",
            "source": {
                "id": this.idFrom
            },
            "target": {
                "id": this.idTo
            },
            "connector": {
                "name": "jumpover",
                "args": {
                    "size": 10
                }
            },
            "router": {
                "name": "orthogonal"
            },
            "labels": [
                {
                    "attrs": {
                        "text": {
                            "text": `${this.text}`
                        },
                    }
                }
            ],
        }
    }
}
