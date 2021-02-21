
import PythonCoreTokenizer from "../src/PythonCoreTokenizer";
import { NameLiteral, NumberLiteral, StringLiteral, TokenKind } from "../src/Token";

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

describe("PythonCore Tokenizer - Operators or Delimiters", () => {
    test("Operator or Delimiter '<<='", () => {
        const lex = new PythonCoreTokenizer("<<= ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_ShiftLeftAssign);
    });
    test("Operator or Delimiter '<<'", () => {
        const lex = new PythonCoreTokenizer("<< ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_ShiftLeft);
    });
    test("Operator or Delimiter '<>'", () => {
        const lex = new PythonCoreTokenizer("<> ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_NotEqual);
    });
    test("Operator or Delimiter '<='", () => {
        const lex = new PythonCoreTokenizer("<= ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_LessEqual);
    });
    test("Operator or Delimiter '<'", () => {
        const lex = new PythonCoreTokenizer("< ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Less);
    });
    test("Operator or Delimiter '>>='", () => {
        const lex = new PythonCoreTokenizer(">>= ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_ShiftRightAssign);
    });
    test("Operator or Delimiter '>>'", () => {
        const lex = new PythonCoreTokenizer(">>");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_ShiftRight);
    });
    test("Operator or Delimiter '>='", () => {
        const lex = new PythonCoreTokenizer(">= ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_GreaterEqual);
    });
    test("Operator or Delimiter '>'", () => {
        const lex = new PythonCoreTokenizer("> ");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Greater);
    });
    test("Operator or Delimiter '**='", () => {
        const lex = new PythonCoreTokenizer("**=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_PowerAssign);
    });
    test("Operator or Delimiter '**'", () => {
        const lex = new PythonCoreTokenizer("**");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Power);
    });
    test("Operator or Delimiter '*='", () => {
        const lex = new PythonCoreTokenizer("*=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_MulAssign);
    });
    test("Operator or Delimiter '*'", () => {
        const lex = new PythonCoreTokenizer("*");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Mul);
    });
    test("Operator or Delimiter '//='", () => {
        const lex = new PythonCoreTokenizer("//=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_FloorDivAssign);
    });
    test("Operator or Delimiter '//'", () => {
        const lex = new PythonCoreTokenizer("//");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_FloorDiv);
    });
    test("Operator or Delimiter '/='", () => {
        const lex = new PythonCoreTokenizer("/=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_DivAssign);
    });
    test("Operator or Delimiter '/'", () => {
        const lex = new PythonCoreTokenizer("/");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Div);
    });
    test("Operator or Delimiter ':='", () => {
        const lex = new PythonCoreTokenizer(":=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_ColonAssign);
    });
    test("Operator or Delimiter ':'", () => {
        const lex = new PythonCoreTokenizer(":");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Colon);
    });
    test("Operator or Delimiter '+='", () => {
        const lex = new PythonCoreTokenizer("+=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_PlusAssign);
    });
    test("Operator or Delimiter '+'", () => {
        const lex = new PythonCoreTokenizer("+");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Plus);
    });
    test("Operator or Delimiter '-='", () => {
        const lex = new PythonCoreTokenizer("-=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_MinusAssign);
    });
    test("Operator or Delimiter '->'", () => {
        const lex = new PythonCoreTokenizer("->");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Arrow);
    });
    test("Operator or Delimiter '-'", () => {
        const lex = new PythonCoreTokenizer("-");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Minus);
    });
    test("Operator or Delimiter '%='", () => {
        const lex = new PythonCoreTokenizer("%=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_ModuloAssign);
    });
    test("Operator or Delimiter '%'", () => {
        const lex = new PythonCoreTokenizer("%");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Modulo);
    });
    test("Operator or Delimiter '@='", () => {
        const lex = new PythonCoreTokenizer("@=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_MatriceAssign);
    });
    test("Operator or Delimiter '@'", () => {
        const lex = new PythonCoreTokenizer("@");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Matrice);
    });
    test("Operator or Delimiter '&='", () => {
        const lex = new PythonCoreTokenizer("&=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitAndAssign);
    });
    test("Operator or Delimiter '&'", () => {
        const lex = new PythonCoreTokenizer("&");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitAnd);
    });
    test("Operator or Delimiter '|='", () => {
        const lex = new PythonCoreTokenizer("|=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitOrAssign);
    });
    test("Operator or Delimiter '|'", () => {
        const lex = new PythonCoreTokenizer("|");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitOr);
    });
    test("Operator or Delimiter '^='", () => {
        const lex = new PythonCoreTokenizer("^=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitXorAssign);
    });
    test("Operator or Delimiter '^'", () => {
        const lex = new PythonCoreTokenizer("^");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitXor);
    });
    test("Operator or Delimiter '=='", () => {
        const lex = new PythonCoreTokenizer("==");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Equal);
    });
    test("Operator or Delimiter '='", () => {
        const lex = new PythonCoreTokenizer("=");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Assign);
    });
    test("Operator or Delimiter '~'", () => {
        const lex = new PythonCoreTokenizer("~");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_BitInvert);
    });
    test("Operator or Delimiter ','", () => {
        const lex = new PythonCoreTokenizer(",");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Comma);
    });
    test("Operator or Delimiter ';'", () => {
        const lex = new PythonCoreTokenizer(";");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_SemiColon);
    });
    test("Operator or Delimiter '...'", () => {
        const lex = new PythonCoreTokenizer("...");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Elipsis);
    });
    test("Operator or Delimiter '.'", () => {
        const lex = new PythonCoreTokenizer(".");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_Dot);
    });
    test("Operator or Delimiter '('", () => {
        const lex = new PythonCoreTokenizer("(");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_LeftParen);
    });
    test("Operator or Delimiter '['", () => {
        const lex = new PythonCoreTokenizer("[");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_LeftBracket);
    });
    test("Operator or Delimiter '{'", () => {
        const lex = new PythonCoreTokenizer("{");
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_LeftCurly);
    });
    test("Operator or Delimiter ')'", () => {
        const lex = new PythonCoreTokenizer("()");
        lex.advance();
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_RightParen);
    });
    test("Operator or Delimiter ']'", () => {
        const lex = new PythonCoreTokenizer("[]");
        lex.advance();
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_RightBracket);
    });
    test("Operator or Delimiter '}'", () => {
        const lex = new PythonCoreTokenizer("{}");
        lex.advance();
        expect(lex.advance().getKind()).toEqual(TokenKind.Py_RightCurly);
    });
});

describe("PythonCore Tokenizer - Identifier", () => {
    test("Identifier '__init__'", () => {
        const lex = new PythonCoreTokenizer("__init__");
        const node = <NameLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Name);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("__init__");
    });
    test("Identifier 'as4'", () => {
        const lex = new PythonCoreTokenizer("as4");
        const node = <NameLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Name);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("as4");
    });
    test("Identifier 'T44_xt'", () => {
        const lex = new PythonCoreTokenizer("T44_xt");
        const node = <NameLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Name);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual("T44_xt");
    });
});

describe("PythonCore Tokenizer - Number", () => {
    test("Number '0b_111_011'", () => {
        const lex = new PythonCoreTokenizer("0b_111_011");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(10);
        expect(node.getContent()).toEqual("0b_111_011");
    });
    test("Number '0B_111_011'", () => {
        const lex = new PythonCoreTokenizer("0B_111_011");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(10);
        expect(node.getContent()).toEqual("0B_111_011");
    });
    test("Number '0B111011'", () => {
        const lex = new PythonCoreTokenizer("0B111011");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("0B111011");
    });
    test("Number '0x_7f_8e'", () => {
        const lex = new PythonCoreTokenizer("0x_7f_8e");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("0x_7f_8e");
    });
    test("Number '0X_7F_8e'", () => {
        const lex = new PythonCoreTokenizer("0X_7F_8e");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("0X_7F_8e");
    });
    test("Number '0X7F8e'", () => {
        const lex = new PythonCoreTokenizer("0X7F8e");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual("0X7F8e");
    });
    test("Number '0o_71_14'", () => {
        const lex = new PythonCoreTokenizer("0o_71_14");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("0o_71_14");
    });
    test("Number '0O_71_14'", () => {
        const lex = new PythonCoreTokenizer("0O_71_14");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("0O_71_14");
    });
    test("Number '0o7114'", () => {
        const lex = new PythonCoreTokenizer("0o7114");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual("0o7114");
    });
    test("Number '0.'", () => {
        const lex = new PythonCoreTokenizer("0.");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(2);
        expect(node.getContent()).toEqual("0.");
    });
    test("Number '0._0'", () => {
        const lex = new PythonCoreTokenizer("0._0");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("0._0");
    });
    test("Number '0._0e-34j'", () => {
        const lex = new PythonCoreTokenizer("0._0e-34j");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(9);
        expect(node.getContent()).toEqual("0._0e-34j");
    });
    test("Number '0._0E-3_4J'", () => {
        const lex = new PythonCoreTokenizer("0._0E-3_4J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(10);
        expect(node.getContent()).toEqual("0._0E-3_4J");
    });
    test("Number '0._0E+3_4J'", () => {
        const lex = new PythonCoreTokenizer("0._0E+3_4J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(10);
        expect(node.getContent()).toEqual("0._0E+3_4J");
    });
    test("Number '0._0E3_4J'", () => {
        const lex = new PythonCoreTokenizer("0._0E3_4J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(9);
        expect(node.getContent()).toEqual("0._0E3_4J");
    });
    test("Number '0.0J'", () => {
        const lex = new PythonCoreTokenizer("0.0J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("0.0J");
    });
    test("Number '0.0'", () => {
        const lex = new PythonCoreTokenizer("0.0");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("0.0");
    });
    test("Number '.0'", () => {
        const lex = new PythonCoreTokenizer(".0");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(2);
        expect(node.getContent()).toEqual(".0");
    });
    test("Number '.0e1j'", () => {
        const lex = new PythonCoreTokenizer(".0e1j");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(5);
        expect(node.getContent()).toEqual(".0e1j");
    });
    test("Number '.0E1J'", () => {
        const lex = new PythonCoreTokenizer(".0E1J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(5);
        expect(node.getContent()).toEqual(".0E1J");
    });
    test("Number '.0E+1J'", () => {
        const lex = new PythonCoreTokenizer(".0E+1J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual(".0E+1J");
    });
    test("Number '.0E-1J'", () => {
        const lex = new PythonCoreTokenizer(".0E-1J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual(".0E-1J");
    });
    test("Number '1234.456'", () => {
        const lex = new PythonCoreTokenizer("1234.456");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual("1234.456");
    });
    test("Number '1_2_3_4.4_5_6'", () => {
        const lex = new PythonCoreTokenizer("1_2_3_4.4_5_6");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(13);
        expect(node.getContent()).toEqual("1_2_3_4.4_5_6");
    });
    test("Number '.0E-1_1J'", () => {
        const lex = new PythonCoreTokenizer(".0E-1_1J");
        const node = <NumberLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Number);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(8);
        expect(node.getContent()).toEqual(".0E-1_1J");
    });
});

describe("PythonCore Tokenizer - String", () => {
    test("String '' ", () => {
        const lex = new PythonCoreTokenizer("''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(2);
        expect(node.getContent()).toEqual("''");
    });
    test("String \"\" ", () => {
        const lex = new PythonCoreTokenizer("\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(2);
        expect(node.getContent()).toEqual("\"\"");
    });
    test("String \"\"\"\"\"\" ", () => {
        const lex = new PythonCoreTokenizer("\"\"\"\"\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual("\"\"\"\"\"\"");
    });
    test("String '''''' ", () => {
        const lex = new PythonCoreTokenizer("''''''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(6);
        expect(node.getContent()).toEqual("''''''");
    });
    test("String \"\"\"Hello, World!\"\"\" ", () => {
        const lex = new PythonCoreTokenizer("\"\"\"Hello, World!\"\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(19);
        expect(node.getContent()).toEqual("\"\"\"Hello, World!\"\"\"");
    });
    test("String \"Test\\\r\nTest!\" ", () => {
        const lex = new PythonCoreTokenizer("\"Test\\\r\nTest!\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(14);
        expect(node.getContent()).toEqual("\"Test\\\r\nTest!\"");
    });
    test("String r'' ", () => {
        const lex = new PythonCoreTokenizer("r''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("r''");
    });
    test("String R\"\" ", () => {
        const lex = new PythonCoreTokenizer("R\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("R\"\"");
    });
    test("String b'' ", () => {
        const lex = new PythonCoreTokenizer("b''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("b''");
    });
    test("String B\"\" ", () => {
        const lex = new PythonCoreTokenizer("B\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("B\"\"");
    });
    test("String u'' ", () => {
        const lex = new PythonCoreTokenizer("u''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("u''");
    });
    test("String U\"\" ", () => {
        const lex = new PythonCoreTokenizer("U\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("U\"\"");
    });
    test("String f'' ", () => {
        const lex = new PythonCoreTokenizer("f''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("f''");
    });
    test("String F\"\" ", () => {
        const lex = new PythonCoreTokenizer("F\"\"");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(3);
        expect(node.getContent()).toEqual("F\"\"");
    });
    test("String fr'' ", () => {
        const lex = new PythonCoreTokenizer("fr''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("fr''");
    });
    test("String Fr'' ", () => {
        const lex = new PythonCoreTokenizer("Fr''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("Fr''");
    });
    test("String fR'' ", () => {
        const lex = new PythonCoreTokenizer("fR''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("fR''");
    });
    test("String FR'' ", () => {
        const lex = new PythonCoreTokenizer("FR''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("FR''");
    });
    test("String rf'' ", () => {
        const lex = new PythonCoreTokenizer("rf''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("rf''");
    });
    test("String Rf'' ", () => {
        const lex = new PythonCoreTokenizer("Rf''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("Rf''");
    });
    test("String rF'' ", () => {
        const lex = new PythonCoreTokenizer("rF''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("rF''");
    });
    test("String RF'' ", () => {
        const lex = new PythonCoreTokenizer("RF''");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.String);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(4);
        expect(node.getContent()).toEqual("RF''");
    });
});

describe("PythonCore Tokenizer - TypeComment or Comment", () => {
    test("TypeComment ", () => {
        const lex = new PythonCoreTokenizer("# type: int => int");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.TypeComment);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(18);
        expect(node.getContent()).toEqual("# type: int => int");
    });
});

describe("PythonCore Tokenizer - Special tokens", () => {
    test("End of file", () => {
        const lex = new PythonCoreTokenizer("\0");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.EOF);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(1);
    });
    test("Newline '\\r' ", () => {
        const lex = new PythonCoreTokenizer("\r");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Newline);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(1);
    });
    test("Newline '\\n' ", () => {
        const lex = new PythonCoreTokenizer("\n");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Newline);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(1);
    });
    test("Newline '\\r\\n' ", () => {
        const lex = new PythonCoreTokenizer("\r\n");
        const node = <StringLiteral> lex.advance();
        expect(node.getKind()).toEqual(TokenKind.Newline);
        expect(node.getStartPosition()).toEqual(0);
        expect(node.getEndPosition()).toEqual(2);
    });
});