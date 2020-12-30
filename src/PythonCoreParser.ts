
enum TriviaKind {
    Empty, WhiteSpace, NewLine, LineContinuation, Comment
}

class Trivia {
    private startPosition: number;
    private endPosition: number;
    private kind: TriviaKind;

    constructor(startPos: number, endPos: number, kind: TriviaKind) {
        this.startPosition = startPos;
        this.endPosition = endPos;
        this.kind = kind;
    }
};

enum TokenKind {
    Empty, EOF, Newline, Indent, Dedent, Py_False, Py_None, Py_True, Py_And, Py_As, Py_Assert, 
    Py_Async, Py_Await, Py_Break, Py_Class, Py_Continue, Py_Def, PyDel, Py_Elif, Py_Else, Py_Except, 
    Py_Finally, Py_For, Py_From, Py_Global, PyIf, Py_Import, Py_In, Py_Is, Py_Lambda, Py_Nonlocal,
    Py_Not, Py_Or, Py_Pass, Py_Raise, Py_Return, Py_Try, Py_While, Py_With, Py_Yield, PyPlus, Py_Minus, 
    Py_Mul, Py_Power, Py_Div, Py_FloorDiv, Py_Modulo, Py_Matrice, Py_ShiftLeft, Py_ShiftRight, Py_BitAnd,
    Py_BitOr, Py_BitXor, Py_BitInvert, Py_Less, Py_Greater, Py_LessEqual, Py_GreaterEqual, Py_Equal, 
    Py_NotEqual, Py_LeftParen, Py_RightParen, Py_LeftBracket, Py_RightBracket, Py_LeftCurly, Py_RightCurly, 
    Py_Comma, Py_Colon, PyColonAssign, Py_Dot, Py_Elipsis, Py_SemiColon, Py_Assign, Py_Arrow, Py_PlusAssign,
    Py_MinusAssign, Py_MulAssign, Py_PowerAssign, Py_DivAssign, Py_FloorDivAssign, Py_ModuloAssign, 
    Py_MatriceAssign, Py_BitAndAssign, Py_BitOrAssign, Py_BitXorAssign, Py_ShiftLeftAssign, Py_ShiftRightAssign, 
    Name, Number, String, TypeComment
};

class Token {
    private startPosition: number;
    private endPosition: number;
    private kind: TokenKind;
    private trivias: Trivia[];

    constructor(startPos: number, endPos: number, kind: TokenKind, trivias: Trivia[]) {
        this.startPosition = startPos;
        this.endPosition = endPos;
        this.kind = kind;
        this.trivias = trivias;
    }

    getStartPosition() : number {
        return this.startPosition;
    }

    getEndPosition() : number {
        return this.endPosition;
    }

    getKind() : TokenKind {
        return this.kind;
    }
};

class NameLiteral extends Token {
    private name: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], name: string) {
        super(startPos, endPos, TokenKind.Name, trivias);
        this.name = name;
    }
};

class NumberLiteral extends Token {
    private literal: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], literal: string) {
        super(startPos, endPos, TokenKind.Number, trivias);
        this.literal = literal;
    }
};

class StringLiteral extends Token {
    private literal: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], literal: string) {
        super(startPos, endPos, TokenKind.String, trivias);
        this.literal = literal;
    }
};

class TypeComment extends Token {
    comment: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], comment: string) {
        super(startPos, endPos, TokenKind.TypeComment, trivias);
        this.comment = comment;
    }
};









class ASTNode {
    private startPosition: number;
    private endPosition: number;

    constructor(startPos: number = -1, endPos: number = -1) {
        this.startPosition = startPos;
        this.endPosition = endPos;
    }
};

class ASTAtomNoneNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomFalseNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomTrueNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomElipsisNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomNameNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomNumberNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomStringNode extends ASTNode {
    private Operators: Token[];

    constructor(startPos: number, endPos: number, operators: Token[]) {
        super(startPos, endPos);
        this.Operators = operators;
    }
}








class PythonCoreParser {
    private curSymbol: Token;

    constructor() {
        this.curSymbol = new Token(-1, -1, TokenKind.Empty, [])
    }

    advance() {

    }


    parseAtom() : ASTNode {
        let startPos = this.curSymbol.getStartPosition();
        switch (this.curSymbol.getKind())
        {
            case TokenKind.Py_None:
                let op1 = this.curSymbol;
                this.advance();
                return new ASTAtomNoneNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_False:
                let op2 = this.curSymbol;
                this.advance();
                return new ASTAtomFalseNode(startPos, this.curSymbol.getStartPosition(), op2);
            case TokenKind.Py_True:
                let op3 = this.curSymbol;
                this.advance();
                return new ASTAtomTrueNode(startPos, this.curSymbol.getStartPosition(), op3);
            case TokenKind.Py_Elipsis:
                let op4 = this.curSymbol;
                this.advance();
                return new ASTAtomElipsisNode(startPos, this.curSymbol.getStartPosition(), op4);
            case TokenKind.Name:
                let op5 = this.curSymbol;
                this.advance();
                return new ASTAtomNameNode(startPos, this.curSymbol.getStartPosition(), op5);
            case TokenKind.Number:
                let op6 = this.curSymbol;
                this.advance();
                return new ASTAtomNumberNode(startPos, this.curSymbol.getStartPosition(), op6);
            case TokenKind.String:
                let nodes : StringLiteral[] = []
                nodes.push(<StringLiteral>this.curSymbol);
                this.advance();
                while (this.curSymbol.getKind() == TokenKind.String) {
                    nodes.push(<StringLiteral>this.curSymbol);
                    this.advance();
                }
                return new ASTAtomStringNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse())

        }

        return new ASTNode();
    }

    parseAtomExpr() : ASTNode {
        return new ASTNode();
    }
};