import { r as registerInstance, h } from './index-1793929e.js';

class CellLinkModel {
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
    };
  }
}

class CellNodeModel {
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
    };
  }
}

const jointjsGraphComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getGraphdata() {
    return JSON.parse(this.graphdata);
  }
  componentDidLoad() {
    const cells = [];
    this.getGraphdata().entities.map(entity => {
      var newModel = new CellNodeModel(entity.id, entity.desc, entity.desc2, entity.desc3, entity.desc4);
      cells.push(newModel.getModel());
    });
    this.getGraphdata().links.map(entity => {
      var newModel = new CellLinkModel(entity.from, entity.to, entity.desc);
      cells.push(newModel.getModel());
    });
    const graph = new joint.dia.Graph;
    new joint.dia.Paper({
      el: document.querySelector('jointjs-graph-component').shadowRoot.getElementById('myholder'),
      model: graph,
      width: 1200,
      height: 1200,
      gridSize: 1,
      background: {
        color: 'white'
      },
      interactive: true
    });
    graph.fromJSON({ cells });
    joint.layout.DirectedGraph.layout(graph, { setLinkVertices: false });
  }
  render() {
    return h("div", null, h("div", { id: "myholder" }));
  }
};
MyComponent.style = jointjsGraphComponentCss;

export { MyComponent as jointjs_graph_component };
