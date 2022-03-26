// Type definitions for query-params-mongo 1.1
// Project: https://github.com/vasansr/query-params-mongo
// Definitions by: Mohammed <https://github.com/MohammedBashiru>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "query-params-mongo" {
  function qpm(options: {
    autoDetect: {
      valuePattern?: RegExp;
      fieldPattern?: RegExp;
      dataType?: string;
    }[];
    converters: {
      [key: string]: any;
    };
  }): ProcessQuery;

  type ProcessQuery = (
      query: QueryObject,
      fieldSpec?: {
        [key: string]: {
          [key: string]: string | boolean;
        };
      },
      strict?: boolean
    ) => any;

  interface QueryObject {
    [key: string]: string | string[] | number;
  }

  export = qpm;
}
