export declare class CellLinkModel {
  private idFrom;
  private idTo;
  private text;
  constructor(idFrom: any, idTo: any, text: any);
  getModel(): {
    type: string;
    source: {
      id: any;
    };
    target: {
      id: any;
    };
    connector: {
      name: string;
      args: {
        size: number;
      };
    };
    router: {
      name: string;
    };
    labels: {
      attrs: {
        text: {
          text: string;
        };
      };
    }[];
  };
}
