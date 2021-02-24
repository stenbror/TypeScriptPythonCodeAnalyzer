
// PythonCoreParser - UnitTests.
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

import { ASTAtomElipsisNode } from "../src/ast/ASTAtomElipsisNode";
import { ASTAtomFalseNode } from "../src/ast/ASTAtomFalseNode";
import { ASTAtomNameNode } from "../src/ast/ASTAtomNameLiteralNode";
import { ASTAtomNoneNode } from "../src/ast/ASTAtomNoneNode";
import { ASTAtomNumberNode } from "../src/ast/ASTAtomNumberLiteralNode";
import { ASTAtomStringNode } from "../src/ast/ASTAtomStringLiteralNode";
import { ASTAtomTrueNode } from "../src/ast/ASTAtomTrueNode";
import PythonCoreParser  from "../src/PythonCoreParser";
import PythonCoreTokenizer  from "../src/PythonCoreTokenizer";
import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral, TypeComment } from "../src//Token";

describe("PythonCoreParser - Expression Atom", () => {
    test("Atom literal 'False'", () => {
        const lex = new PythonCoreTokenizer("False");
        const parser = new PythonCoreParser(lex);
        const root = parser.parseAtom();
        expect(root).toBeInstanceOf(ASTAtomFalseNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(4);
    });
    test("Atom literal 'None'", () => {
        const lex = new PythonCoreTokenizer("None");
        const parser = new PythonCoreParser(lex);
        const root = parser.parseAtom();
        expect(root).toBeInstanceOf(ASTAtomNoneNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(3);
    });
    test("Atom literal 'True'", () => {
        const lex = new PythonCoreTokenizer("True");
        const parser = new PythonCoreParser(lex);
        const root = parser.parseAtom();
        expect(root).toBeInstanceOf(ASTAtomTrueNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(3);
    });
    test("Atom literal '...'", () => {
        const lex = new PythonCoreTokenizer("...");
        const parser = new PythonCoreParser(lex);
        const root = parser.parseAtom();
        expect(root).toBeInstanceOf(ASTAtomElipsisNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(2);
    });
    test("Atom literal 'TestVariable_1'", () => {
        const lex = new PythonCoreTokenizer("TestVariable_1");
        const parser = new PythonCoreParser(lex);
        const root = <ASTAtomNameNode> parser.parseAtom();
        const name = root.getToken();
        expect(root).toBeInstanceOf(ASTAtomNameNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(13);
        expect(name.getContent()).toBe("TestVariable_1");
    });
    test("Atom literal '0.34J'", () => {
        const lex = new PythonCoreTokenizer("0.34J");
        const parser = new PythonCoreParser(lex);
        const root = <ASTAtomNumberNode> parser.parseAtom();
        const token = root.getToken();
        expect(root).toBeInstanceOf(ASTAtomNumberNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(4);
        expect(token.getContent()).toBe("0.34J");
    });
    test("Atom literal 'Hello, World'", () => {
        const lex = new PythonCoreTokenizer("'Hello, World'");
        const parser = new PythonCoreParser(lex);
        const root = <ASTAtomStringNode> parser.parseAtom();
        const tokens = root.getTokens();
        expect(root).toBeInstanceOf(ASTAtomStringNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(13);
        expect(tokens[0].getContent()).toBe("'Hello, World'");
    });
    test("Atom literal 'Hello, World' 'Bye!'", () => {
        const lex = new PythonCoreTokenizer("'Hello, World''Bye!'");
        const parser = new PythonCoreParser(lex);
        const root = <ASTAtomStringNode> parser.parseAtom();
        const tokens = root.getTokens();
        expect(root).toBeInstanceOf(ASTAtomStringNode);
        expect(root.getStart()).toBe(0);
        expect(root.getEnd()).toBe(19);
        //expect(tokens[0].getContent()).toBe("'Hello, World'");
        expect(tokens[1].getContent()).toBe("'Bye!'");
    });
});