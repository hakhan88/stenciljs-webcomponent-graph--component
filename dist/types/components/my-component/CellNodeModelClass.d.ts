export declare class CellNodeModel {
  private id;
  private text;
  private text2;
  private text3;
  private text4;
  private fullDescriptionText;
  constructor(id: any, text: any, text2: any, text3: any, text4: any);
  getModel(): {
    type: string;
    size: {
      width: number;
      height: number;
    };
    angle: number;
    id: any;
    attrs: {
      body: {
        fill: string;
        cursor: string;
        stoke: string;
      };
      label: {
        fill: string;
        text: string;
        cursor: string;
      };
    };
  };
}
