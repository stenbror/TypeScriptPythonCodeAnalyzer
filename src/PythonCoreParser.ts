
class SyntaxErrorException extends Error {
    private Position: number;
    private ErrorToken: Token;

    constructor(pos: number, text: string, token: Token) {
        super(text);
        this.Position = pos;
        this.ErrorToken = token;
        Object.setPrototypeOf(this, SyntaxErrorException.prototype);
    }
}


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
}

enum TokenKind {
    Empty, EOF, Newline, Indent, Dedent, Py_False, Py_None, Py_True, Py_And, Py_As, Py_Assert, 
    Py_Async, Py_Await, Py_Break, Py_Class, Py_Continue, Py_Def, PyDel, Py_Elif, Py_Else, Py_Except, 
    Py_Finally, Py_For, Py_From, Py_Global, PyIf, Py_Import, Py_In, Py_Is, Py_Lambda, Py_Nonlocal,
    Py_Not, Py_Or, Py_Pass, Py_Raise, Py_Return, Py_Try, Py_While, Py_With, Py_Yield, Py_Plus, Py_Minus, 
    Py_Mul, Py_Power, Py_Div, Py_FloorDiv, Py_Modulo, Py_Matrice, Py_ShiftLeft, Py_ShiftRight, Py_BitAnd,
    Py_BitOr, Py_BitXor, Py_BitInvert, Py_Less, Py_Greater, Py_LessEqual, Py_GreaterEqual, Py_Equal, 
    Py_NotEqual, Py_LeftParen, Py_RightParen, Py_LeftBracket, Py_RightBracket, Py_LeftCurly, Py_RightCurly, 
    Py_Comma, Py_Colon, PyColonAssign, Py_Dot, Py_Elipsis, Py_SemiColon, Py_Assign, Py_Arrow, Py_PlusAssign,
    Py_MinusAssign, Py_MulAssign, Py_PowerAssign, Py_DivAssign, Py_FloorDivAssign, Py_ModuloAssign, 
    Py_MatriceAssign, Py_BitAndAssign, Py_BitOrAssign, Py_BitXorAssign, Py_ShiftLeftAssign, Py_ShiftRightAssign, 
    Name, Number, String, TypeComment
}

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
}

class NameLiteral extends Token {
    private name: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], name: string) {
        super(startPos, endPos, TokenKind.Name, trivias);
        this.name = name;
    }
}

class NumberLiteral extends Token {
    private literal: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], literal: string) {
        super(startPos, endPos, TokenKind.Number, trivias);
        this.literal = literal;
    }
}

class StringLiteral extends Token {
    private literal: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], literal: string) {
        super(startPos, endPos, TokenKind.String, trivias);
        this.literal = literal;
    }
}

class TypeComment extends Token {
    private comment: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], comment: string) {
        super(startPos, endPos, TokenKind.TypeComment, trivias);
        this.comment = comment;
    }
}











class ASTNode {
    private startPosition: number;
    private endPosition: number;

    constructor(startPos = -1, endPos = -1) {
        this.startPosition = startPos;
        this.endPosition = endPos;
    }
}

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

class ASTTupleLiteral extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode, op2: Token) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op2;
        this.Right = right;
    }
}

class ASTListLiteral extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode, op2: Token) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op2;
        this.Right = right;
    }
}

class ASTDicitionaryLiteral extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode, op2: Token) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op2;
        this.Right = right;
    }
}

class ASTAtomExpr extends ASTNode {
    private Operator1: Token;
    private Left: ASTNode;
    private Nodes: ASTNode[];

    constructor(startPos: number, endPos: number, op1: Token, left: ASTNode, nodes: ASTNode[]) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Left = left;
        this.Nodes = nodes;
    }
}

class ASTPowerExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTUnaryPlus extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTUnaryMinus extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTUnaryBitInvert extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTMulExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTDivExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTFloorDivExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTModuloExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTMatriceExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTPlusExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTMinusExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTShiftLeftExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTShiftRightExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTBitAndExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTBitXorExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTBitOrExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTStarExpr extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTLessExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTLessEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTGreaterExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTGreaterEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTNotEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTInExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTNotInExpr extends ASTNode {
    private Left : ASTNode;
    private Operator1: Token;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator1: Token, operator2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator1 = operator1;
        this.Operator2 = operator2;
        this.Right = right;
    }
}

class ASTIsNotExpr extends ASTNode {
    private Left : ASTNode;
    private Operator1: Token;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator1: Token, operator2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator1 = operator1;
        this.Operator2 = operator2;
        this.Right = right;
    }
}

class ASTIsExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}








class PythonCoreParser {
    private curSymbol: Token;

    constructor() {
        this.curSymbol = new Token(-1, -1, TokenKind.Empty, []);
    }

    advance() {
        
    }


    parseAtom() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const op1 = this.curSymbol;
        switch (this.curSymbol.getKind())
        {
            case TokenKind.Py_None:
                this.advance();
                return new ASTAtomNoneNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_False:
                this.advance();
                return new ASTAtomFalseNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_True:
                this.advance();
                return new ASTAtomTrueNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_Elipsis:
                this.advance();
                return new ASTAtomElipsisNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Name:
                this.advance();
                return new ASTAtomNameNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Number:
                this.advance();
                return new ASTAtomNumberNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.String: {
                const nodes : StringLiteral[] = [];
                nodes.push(<StringLiteral>this.curSymbol);
                this.advance();
                while (this.curSymbol.getKind() === TokenKind.String) {
                    nodes.push(<StringLiteral>this.curSymbol);
                    this.advance();
                }
                return new ASTAtomStringNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse());
            }
            case TokenKind.Py_LeftParen: {
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                    const right = new ASTNode(); // yieldExpr
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ')' in tuple literal!", this.curSymbol);
                    }
                }
                else {
                    const right = new ASTNode(); // testlist_comp
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ')' in tuple literal!", this.curSymbol);
                    }
                }
            }
            case TokenKind.Py_LeftBracket: {
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTListLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = new ASTNode(); // testlist_comp
                    if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTListLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ']' in tuple literal!", this.curSymbol);
                    }
                }
            }
            case TokenKind.Py_LeftCurly: {
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTDicitionaryLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = new ASTNode(); // testlist_comp
                    if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTDicitionaryLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing '}' in tuple literal!", this.curSymbol);
                    }
                }
            }
            default :
                throw new SyntaxErrorException(startPos, "Illegal literal!", this.curSymbol);
        }
    }

    parseAtomExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseAtom();
            const nodes : ASTNode[] = [];
            while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
                nodes.push( new ASTNode() ); // parseTrailer
            }
            return new ASTAtomExpr(startPos, this.curSymbol.getStartPosition(), op1, left, nodes.reverse());
        }
        const left = this.parseAtom();
        const nodes : ASTNode[] = [];
        while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
            nodes.push( new ASTNode() ); // parseTrailer
        }
        return new ASTAtomExpr(startPos, this.curSymbol.getStartPosition(), new Token(-1, -1, TokenKind.Empty, []), left, nodes.reverse());
    }

    parsePower() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseAtomExpr();
        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            return new ASTPowerExpr(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    parseFactor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const op1 = this.curSymbol;
        switch (op1.getKind()) {
            case TokenKind.Py_Plus: {
                const right = this.parseFactor();
                return new ASTUnaryPlus(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_Minus: {
                const right = this.parseFactor();
                return new ASTUnaryMinus(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_BitInvert: {
                const right = this.parseFactor();
                return new ASTUnaryBitInvert(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            default:
                return this.parsePower();
        }
    }

    parseTerm() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseFactor();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Mul, TokenKind.Py_Div, TokenKind.Py_FloorDiv, TokenKind.Py_Modulo, TokenKind.Py_Matrice ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            switch (op1.getKind()) {
                case TokenKind.Py_Mul: 
                    res = new ASTMulExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Div: 
                    res = new ASTDivExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_FloorDiv: 
                    res = new ASTFloorDivExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Modulo: 
                    res = new ASTModuloExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Matrice: 
                    res = new ASTMatriceExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    parseArith() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseTerm();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Plus, TokenKind.Py_Minus ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTerm();
            switch (op1.getKind()) {
                case TokenKind.Py_Plus: 
                    res = new ASTPlusExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Minus: 
                    res = new ASTMinusExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    parseShiftExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseArith();
        while (this.curSymbol.getKind() in [ TokenKind.Py_ShiftLeft, TokenKind.Py_ShiftRight ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseArith();
            switch (op1.getKind()) {
                case TokenKind.Py_ShiftLeft: 
                    res = new ASTShiftLeftExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_ShiftRight: 
                    res = new ASTShiftRightExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    parseAndExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseShiftExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitAnd) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseShiftExpr();
            res = new ASTBitAndExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseXorExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseAndExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitXor) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseAndExpr();
            res = new ASTBitXorExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseOrExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseXorExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitOr) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseXorExpr();
            res = new ASTBitOrExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseStarExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrExpr();
            return new ASTStarExpr(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(startPos, "Missing '*' in star expression!", this.curSymbol);
    }

    parseComparisonExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseOrExpr();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Less, TokenKind.Py_LessEqual, TokenKind.Py_Equal, TokenKind.Py_GreaterEqual, TokenKind.Py_Greater, TokenKind.Py_NotEqual, TokenKind.Py_Is, TokenKind.Py_In, TokenKind.Py_Not ]) {
            const op1 = this.curSymbol;
            this.advance();
            switch (op1.getKind()) {
                case TokenKind.Py_Less: {
                    const right = this.parseOrExpr();
                    res = new ASTLessExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_LessEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTLessEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Equal: {
                    const right = this.parseOrExpr();
                    res = new ASTEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_GreaterEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Greater: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_NotEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTNotEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Is: {
                    if (this.curSymbol.getKind() === TokenKind.Py_Not) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTIsNotExpr(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
                    }
                    else {
                        const right = this.parseOrExpr();
                        res = new ASTIsExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    }
                    break;
                }
                case TokenKind.Py_Not: {
                    if (this.curSymbol.getKind() === TokenKind.Py_In) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTNotInExpr(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing 'in' in 'not in' expression!", this.curSymbol);
                    }
                    break;
                }
            }
        }
        return res;
    }
}