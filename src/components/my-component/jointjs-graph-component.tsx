import { Component, Prop, h } from '@stencil/core';
import { CellLinkModel } from './CellLinkModelClass';
import { CellNodeModel } from './CellNodeModelClass';
import { GraphData } from './GraphDataInterface';

declare const joint;
@Component({
    tag: 'jointjs-graph-component',
    styleUrl: 'jointjs-graph-component.css',
    shadow: true,
})
export class MyComponent {
    @Prop() graphdata: string;
    private getGraphdata(): GraphData {
        return JSON.parse(this.graphdata);
    }

    componentDidLoad() {
        const cells = [];
        this.getGraphdata().entities.map(entity => {
            var newModel = new CellNodeModel(entity.id, entity.desc, entity.desc2, entity.desc3, entity.desc4)
            cells.push(newModel.getModel());
        });
        this.getGraphdata().links.map(entity => {
            var newModel = new CellLinkModel(entity.from, entity.to, entity.desc)
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
        return <div>
            <div id="myholder"></div>
        </div>;
    }
}
