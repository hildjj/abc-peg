declare const peg$allowedStartRules: string[];
export interface SourceText {
  source: any;
  text: string;
}
declare class peg$SyntaxError {
    constructor(message: any, expected: any, found: any, location: any);
    format(sources: SourceText[]): string;
}
declare function peg$parse(input: string, options?: Record<string, unknown>): unknown;
export { peg$allowedStartRules as StartRules, peg$SyntaxError as SyntaxError, peg$parse as parse };
