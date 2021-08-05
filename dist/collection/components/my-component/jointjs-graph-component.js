import { Component, Prop, h } from '@stencil/core';
import { CellLinkModel } from './CellLinkModelClass';
import { CellNodeModel } from './CellNodeModelClass';
export class MyComponent {
  getGraphdata() {
    return JSON.parse(this.graphdata);
  }
  componentDidLoad() {
    var that = this;
    setTimeout(() => {
      console.log('componentDidLoad');
      const cells = [];
      that.getGraphdata().entities.map(entity => {
        var newModel = new CellNodeModel(entity.id, entity.desc, entity.desc2, entity.desc3, entity.desc4);
        cells.push(newModel.getModel());
      });
      that.getGraphdata().links.map(entity => {
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
      console.log('componentDidLoad', graph);
      console.log('that.getGraphdata()', that.getGraphdata());
    }, 2000);
  }
  render() {
    return h("div", null,
      h("div", { id: "myholder" }));
  }
  static get is() { return "jointjs-graph-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jointjs-graph-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jointjs-graph-component.css"]
  }; }
  static get properties() { return {
    "graphdata": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "graphdata",
      "reflect": false
    }
  }; }
}
