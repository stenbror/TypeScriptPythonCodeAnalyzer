
import PythonCoreTokenizer from "../src/PythonCoreTokenizer";
import { TokenKind } from "../src/Token";

describe("PythonCore Tokenizer token tests", () => {
    test("Reserved keyword 'False'", () => {
        const lex = new PythonCoreTokenizer("False");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_False);
    });
    test("Reserved keyword 'None'", () => {
        const lex = new PythonCoreTokenizer("None");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_None);
    });
    test("Reserved keyword 'True'", () => {
        const lex = new PythonCoreTokenizer("True");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_True);
    });
  });