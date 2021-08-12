export class CellNodeModel {
    private id;
    private text;
    private text2;
    private text3;
    private text4;
    private fullDescriptionText;
    constructor(id, text, text2, text3, text4) {
        this.id = id;
        this.text = text;
        this.text2 = text2;
        this.text3 = text3;
        this.text4 = text4;
        this.fullDescriptionText = `${this.text ? this.text + '\n' : ''}${this.text2 ? '(' + this.text2 + ')\n' : ''}${this.text3 ? '(' + this.text3 + ')\n' : ''}${this.text4 ? '(' + this.text4 + ')\n' : ''}`;
    }
    getModel() {
        return {
            "type": "standard.Rectangle",
            "size": {
                "width": 150,
                "height": 80
            },
            "angle": 0,
            "id": this.id,
            "attrs": {
                "body": {
                    "fill": "white",
                    "cursor": "pointer",
                    "stoke": "black"
                },
                "label": {
                    "fill": "black",
                    "text": `${this.fullDescriptionText}`,
                    "cursor": "pointer"
                }
            }
        }
    }
}