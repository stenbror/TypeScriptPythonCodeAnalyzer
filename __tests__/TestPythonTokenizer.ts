
import PythonCoreTokenizer from "../src/PythonCoreTokenizer";
import { TokenKind } from "../src/Token";

describe("PythonCore Tokenizer - Reserved keywords", () => {
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
    test("Reserved keyword 'and'", () => {
        const lex = new PythonCoreTokenizer("and");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_And);
    });
    test("Reserved keyword 'as'", () => {
        const lex = new PythonCoreTokenizer("as");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_As);
    });
    test("Reserved keyword 'assert'", () => {
        const lex = new PythonCoreTokenizer("assert");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Assert);
    });
    test("Reserved keyword 'async'", () => {
        const lex = new PythonCoreTokenizer("async");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Async);
    });
    test("Reserved keyword 'await'", () => {
        const lex = new PythonCoreTokenizer("await");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Await);
    });
    test("Reserved keyword 'break'", () => {
        const lex = new PythonCoreTokenizer("break");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Break);
    });
    test("Reserved keyword 'class'", () => {
        const lex = new PythonCoreTokenizer("class");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Class);
    });
    test("Reserved keyword 'continue'", () => {
        const lex = new PythonCoreTokenizer("continue");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Continue);
    });
    test("Reserved keyword 'def'", () => {
        const lex = new PythonCoreTokenizer("def");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Def);
    });
    test("Reserved keyword 'del'", () => {
        const lex = new PythonCoreTokenizer("del");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Del);
    });
    test("Reserved keyword 'elif'", () => {
        const lex = new PythonCoreTokenizer("elif");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Elif);
    });
    test("Reserved keyword 'else'", () => {
        const lex = new PythonCoreTokenizer("else");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Else);
    });
    test("Reserved keyword 'except'", () => {
        const lex = new PythonCoreTokenizer("except");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Except);
    });
    test("Reserved keyword 'Finally'", () => {
        const lex = new PythonCoreTokenizer("finally");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Finally);
    });
    test("Reserved keyword 'for'", () => {
        const lex = new PythonCoreTokenizer("for");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_For);
    });
    test("Reserved keyword 'from'", () => {
        const lex = new PythonCoreTokenizer("from");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_From);
    });
    test("Reserved keyword 'global'", () => {
        const lex = new PythonCoreTokenizer("global");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Global);
    });
    test("Reserved keyword 'if'", () => {
        const lex = new PythonCoreTokenizer("if");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_If);
    });
    test("Reserved keyword 'import'", () => {
        const lex = new PythonCoreTokenizer("import");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Import);
    });
    test("Reserved keyword 'in'", () => {
        const lex = new PythonCoreTokenizer("in");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_In);
    });
    test("Reserved keyword 'is'", () => {
        const lex = new PythonCoreTokenizer("is");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Is);
    });
    test("Reserved keyword 'lambda'", () => {
        const lex = new PythonCoreTokenizer("lambda");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Lambda);
    });
    test("Reserved keyword 'nonlocal'", () => {
        const lex = new PythonCoreTokenizer("nonlocal");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Nonlocal);
    });
    test("Reserved keyword 'not'", () => {
        const lex = new PythonCoreTokenizer("not");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Not);
    });
    test("Reserved keyword 'or'", () => {
        const lex = new PythonCoreTokenizer("or");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Or);
    });
    test("Reserved keyword 'pass'", () => {
        const lex = new PythonCoreTokenizer("pass");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Pass);
    });
    test("Reserved keyword 'raise'", () => {
        const lex = new PythonCoreTokenizer("raise");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Raise);
    });
    test("Reserved keyword 'return'", () => {
        const lex = new PythonCoreTokenizer("return");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Return);
    });
    test("Reserved keyword 'try'", () => {
        const lex = new PythonCoreTokenizer("try");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Try);
    });
    test("Reserved keyword 'while'", () => {
        const lex = new PythonCoreTokenizer("while");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_While);
    });
    test("Reserved keyword 'with'", () => {
        const lex = new PythonCoreTokenizer("with");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_With);
    });
    test("Reserved keyword 'yield'", () => {
        const lex = new PythonCoreTokenizer("yield");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Yield);
    });
  });