import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral } from "./Token";

import { ASTNode } from "./ast/ASTNode";
import { ASTAtomNameNode } from "./ast/ASTAtomNameLiteralNode";
import { ASTAtomNoneNode } from "./ast/ASTAtomNoneNode";
import { ASTAtomFalseNode } from "./ast/ASTAtomFalseNode";
import { ASTAtomTrueNode } from "./ast/ASTAtomTrueNode";
import { ASTAtomElipsisNode } from "./ast/ASTAtomElipsisNode";
import { ASTAtomNumberNode } from "./ast/ASTAtomNumberLiteralNode";
import { ASTAtomStringNode } from "./ast/ASTAtomStringLiteralNode";
import { ASTAtomTupleLiteralNode } from "./ast/ASTAtomTupleLiteralNode";
import { ASTAtomListLiteralNode } from "./ast/ASTAtomListLiteralNode";
import { ASTAtomDictionaryLiteralNode } from "./ast/ASTAtomDictionaryLiteralNode";
import { ASTAtomSetLiteralNode } from "./ast/ASTAtomSetLiteralNode";
import { ASTAtomExprNode } from "./ast/ASTAtomExprNode";
import { ASTPowerExprNode } from "./ast/ASTPowerExprNode";
import { ASTUnaryPlusNode } from "./ast/ASTUnaryPlusNode";
import { ASTUnaryMinusNode } from "./ast/ASTUnaryMinusNode";
import { ASTUnaryBitInvertNode } from "./ast/ASTUnaryBitInvertNode";
import { ASTMulExprNode } from "./ast/ASTMulExprNode";
import { ASTDivExprNode } from "./ast/ASTDivExprNode";
import { ASTModuloExprNode } from "./ast/ASTModuloExprNode";
import { ASTMatriceExprNode } from "./ast/ASTMatriceExprNode";
import { ASTFloorDivExprNode } from "./ast/ASTFloorDivExprNode";
import { ASTPlusExprNode } from "./ast/ASTPlusExprNode";
import { ASTMinusExprNode } from "./ast/ASTMinusExprNode";
import { ASTShiftLeftExprNode } from "./ast/ASTShiftLeftExprNode";
import { ASTShiftRightExprNode } from "./ast/ASTShiftRightExprNode";
import { ASTBitAndExprNode } from "./ast/ASTBitAndExprNode";
import { ASTBitXorExprNode } from "./ast/ASTBitXorExprNode";
import { ASTBitOrExprNode } from "./ast/ASTBitOrExprNode";
import { ASTStarExprNode } from "./ast/ASTStarExprNode";
import { ASTLessExprNode } from "./ast/ASTLessExprNode";
import { ASTLessEqualExprNode } from "./ast/ASTLessEqualExprNode";
import { ASTGreaterExprNode } from "./ast/ASTGreaterExprNode";
import { ASTGreaterEqualExprNode } from "./ast/ASTGreaterEqualExprNode";
import { ASTEqualExprNode } from "./ast/ASTEqualExprNode";
import { ASTNotEqualExprNode } from "./ast/ASTNotEqualExprNode";
import { ASTInExprNode } from "./ast/ASTInExprNode";
import { ASTNotInExprNode } from "./ast/ASTNotInExprNode";
import { ASTIsExprNode } from "./ast/ASTIsExprNode";
import { ASTIsNotExprNode } from "./ast/ASTIsNotExprNode";
import { ASTNotTestNode } from "./ast/ASTNotTestNode";
import { ASTOrTestNode } from "./ast/ASTOrTestNode";
import { ASTAndTestNode } from "./ast/ASTAndTestNode";
import { ASTLambdaExprNode } from "./ast/ASTLambdaExprNode";
import { ASTTestNode } from "./ast/ASTTestNode";
import { ASTNamedExprNode } from "./ast/ASTNamedExprNode";
import { ASTTestListCompNode } from "./ast/ASTTestListCompNode";
import { ASTDotNameNode } from "./ast/ASTDotNameNode";
import { ASTCallNode } from "./ast/ASTCallNode";
import { ASTIndexNode } from "./ast/ASTIndexNode";
import { ASTSubscriptListNode } from "./ast/ASTSubscriptListNode";
import { ASTSubscriptNode } from "./ast/ASTSubscriptNode";
import { ASTExprListNode } from "./ast/ASTExprListNode";
import { ASTTestListNode } from "./ast/ASTTestListNode";
import { ASTCompForNode } from "./ast/ASTCompForNode";
import { ASTSyncCompForNode } from "./ast/ASTSyncCompForNode";
import { ASTCompIfNode } from "./ast/ASTCompIfNode";
import { ASTYieldFromNode } from "./ast/ASTYieldFromNode";
import { ASTYieldNode } from "./ast/ASTYieldNode";
import { ASTArgListNode } from "./ast/ASTArgListNode";
import { ASTArgumentNode } from "./ast/ASTArgumentNode";
import { ASTDictionaryContainerNode } from "./ast/ASTDictionaryContainerNode";
import { ASTSetContainerNode } from "./ast/ASTSetContainerNode";
import { ASTSetNameNode } from "./ast/ASTSetNameNode";
import { ASTDictionaryNameNode } from "./ast/ASTDictionaryNameNode";
import { ASTAsyncNode } from "./ast/ASTAsyncNode";
import { ASTClassNode } from "./ast/ASTClassNode";
import { ASTIfNode } from "./ast/ASTIfNode";
import { ASTElifNode } from "./ast/ASTElifNode";
import { ASTElseNode } from "./ast/ASTElseNode";
import { ASTWhileNode } from "./ast/ASTWhileNode";
import { ASTForNode } from "./ast/ASTForNode";
import { ASTTryNode } from "./ast/ASTTryNode";
import { ASTWithNode } from "./ast/ASTWithNode";
import { ASTWithItemNode } from "./ast/ASTWithItemNode";
import { ASTExceptNode } from "./ast/ASTExceptNode";
import { ASTSuiteNode } from "./ast/ASTSuiteNode";
import { ASTSimpleStmtNode } from "./ast/ASTSimpleStmtNode";
import { ASTExprPlusAssignNode } from "./ast/ASTExprPlusAssignNode";
import { ASTExprMinusAssignNode } from "./ast/ASTExprMinusAssignNode";
import { ASTExprMulAssignNode } from "./ast/ASTExprMulAssignNode";
import { ASTExprDivAssignNode } from "./ast/ASTExprDivAssignNode";
import { ASTExprMatriceAssignNode } from "./ast/ASTExprMatriceAssignNode";
import { ASTExprModuloAssignNode } from "./ast/ASTExprModuloAssignNode";
import { ASTExprFloorDivAssignNode } from "./ast/ASTExprFloorDivAssignNode";
import { ASTExprPowerAssignNode } from "./ast/ASTExprPowerAssignNode";
import { ASTExprBitAndAssignNode } from "./ast/ASTExprBitAndAssignNode";
import { ASTExprBitOrAssignNode } from "./ast/ASTExprBitOrAssignNode";
import { ASTExprBitXorAssignNode } from "./ast/ASTExprBitXorAssignNode";
import { ASTExprBitShiftLeftAssignNode } from "./ast/ASTExprBitShiftLeftAssignNode";
import { ASTExprBitShiftRightAssignNode } from "./ast/ASTExprBitShiftRightAssignNode";
import { ASTAnnAssignNode } from "./ast/ASTAnnAssignNode";
import { ASTAnnotatedNode } from "./ast/ASTAnnotatedNode";
import { ASTAssignNode } from "./ast/ASTAssignNode";
import { ASTTestListStarExprNode } from "./ast/ASTTestListStarExprNode";
import { ASTDelNode } from "./ast/ASTDelNode";
import { ASTPassNode } from "./ast/ASTPassNode";
import { ASTBreakNode } from "./ast/ASTBreakNode";
import { ASTContinueNode } from "./ast/ASTContinueNode";
import { ASTReturnNode } from "./ast/ASTReturnNode";
import { ASTRaiseNode } from "./ast/ASTRaiseNode";

export class SyntaxErrorException extends Error {
    constructor(private Position: number, private text: string, private ErrorToken: Token) {
        super(text);
        Object.setPrototypeOf(this, SyntaxErrorException.prototype);
    }
}

class PythonCoreParser {
    private curSymbol: Token;
    private flowLevel: number;

    constructor() {
        this.curSymbol = new Token(-1, -1, TokenKind.Empty, []);
        this.flowLevel = 0;
    }

    advance() {
        const a = 1; // Dummy code for tokenizer, implemented later!
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
                return new ASTAtomNameNode(startPos, this.curSymbol.getStartPosition(), <NameLiteral>op1);
            case TokenKind.Number:
                this.advance();
                return new ASTAtomNumberNode(startPos, this.curSymbol.getStartPosition(), <NumberLiteral>op1);
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
                    return new ASTAtomTupleLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                    const right = this.parseYieldExpr();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTAtomTupleLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ')' in tuple literal!", this.curSymbol);
                    }
                }
                else {
                    const right = this.parseTestListComp();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTAtomTupleLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
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
                    return new ASTAtomListLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = this.parseTestListComp();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTAtomListLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
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
                    return new ASTAtomDictionaryLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = this.parseDictorSetMaker();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) {
                        const op2 = this.curSymbol;
                        this.advance();
                        if (typeof(right) === typeof(ASTDictionaryContainerNode)) {
                            return new ASTAtomDictionaryLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                        }
                        return new ASTAtomSetLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing '}' in dictionary / set literal!", this.curSymbol);
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
                nodes.push( this.parseTrailer() );
            }
            return new ASTAtomExprNode(startPos, this.curSymbol.getStartPosition(), op1, left, nodes.reverse());
        }
        const left = this.parseAtom();
        const nodes : ASTNode[] = [];
        while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
            nodes.push( this.parseTrailer() );
        }
        return new ASTAtomExprNode(startPos, this.curSymbol.getStartPosition(), new Token(-1, -1, TokenKind.Empty, []), left, nodes.reverse());
    }

    parsePower() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseAtomExpr();
        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            return new ASTPowerExprNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    parseFactor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const op1 = this.curSymbol;
        switch (op1.getKind()) {
            case TokenKind.Py_Plus: {
                const right = this.parseFactor();
                return new ASTUnaryPlusNode(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_Minus: {
                const right = this.parseFactor();
                return new ASTUnaryMinusNode(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_BitInvert: {
                const right = this.parseFactor();
                return new ASTUnaryBitInvertNode(startPos, this.curSymbol.getStartPosition(), op1, right);
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
                    res = new ASTMulExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Div: 
                    res = new ASTDivExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_FloorDiv: 
                    res = new ASTFloorDivExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Modulo: 
                    res = new ASTModuloExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Matrice: 
                    res = new ASTMatriceExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
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
                    res = new ASTPlusExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Minus: 
                    res = new ASTMinusExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
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
                    res = new ASTShiftLeftExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_ShiftRight: 
                    res = new ASTShiftRightExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
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
            res = new ASTBitAndExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
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
            res = new ASTBitXorExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
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
            res = new ASTBitOrExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseStarExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrExpr();
            return new ASTStarExprNode(startPos, this.curSymbol.getStartPosition(), op1, right);
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
                    res = new ASTLessExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_LessEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTLessEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Equal: {
                    const right = this.parseOrExpr();
                    res = new ASTEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_GreaterEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Greater: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_NotEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTNotEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_In: {
                    const right = this.parseOrExpr();
                    res = new ASTInExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Is: {
                    if (this.curSymbol.getKind() === TokenKind.Py_Not) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTIsNotExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
                    }
                    else {
                        const right = this.parseOrExpr();
                        res = new ASTIsExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    }
                    break;
                }
                case TokenKind.Py_Not: {
                    if (this.curSymbol.getKind() === TokenKind.Py_In) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTNotInExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
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

    parseNotTest() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Not) {
            const startPos = this.curSymbol.getStartPosition();
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseNotTest();
            return new ASTNotTestNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        return this.parseComparisonExpr();
    }

    parseAndTest() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseNotTest();
        while (this.curSymbol.getKind() === TokenKind.Py_And) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseNotTest();
            res = new ASTAndTestNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseOrTest() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseAndTest();
        while (this.curSymbol.getKind() === TokenKind.Py_Or) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseAndTest();
            res = new ASTOrTestNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseLambdaExpr(isCond: boolean) : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            let left = new ASTNode();
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                left = new ASTNode(); // this.parseVarArgsList();
            }
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                throw new SyntaxErrorException(startPos, "Missing ':' in 'lambda' expression!", this.curSymbol);
            }
            const op2 = this.curSymbol;
            this.advance();
            if (isCond) {
                const right = this.parseTest();
                return new ASTLambdaExprNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }
            else {
                const right = this.parseTestNoCond();
                return new ASTLambdaExprNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }

        }
        throw new SyntaxErrorException(startPos, "Missing 'lambda' keyword in 'lambda' expression!", this.curSymbol);
    }

    parseTestNoCond() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            return this.parseLambdaExpr(false);
        }
        return this.parseOrTest();
    }

    parseTest() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            return this.parseLambdaExpr(true);
        }
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseOrTest();
        if (this.curSymbol.getKind() === TokenKind.Py_If) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrTest();
            if (this.curSymbol.getKind() != TokenKind.Py_Else) {
                throw new SyntaxErrorException(startPos, "Missing 'else' keyword in test expression!", this.curSymbol);
            }
            const op2 = this.curSymbol;
            this.advance();
            const next = this.parseTest();
            return new ASTTestNode(startPos, this.curSymbol.getStartPosition(), left, op1, right, op2, next);
        }
        return left;
    }

    parseNamedExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_ColonAssign) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTNamedExprNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    parseTestListComp() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const commas : Token[] = [];
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            nodes.push( this.parseStarExpr() );
        }
        else {
            nodes.push( this.parseNamedExpr() );
        }
        if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For ]) {
            nodes.push( this.parseCompFor() );
        }
        else {
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                commas.push( this.curSymbol );
                this.advance();
                switch (this.curSymbol.getKind()) {
                    case TokenKind.Py_Comma:
                        throw new SyntaxErrorException(startPos, "Missing item in list between two commas!", this.curSymbol);
                    case TokenKind.Py_RightParen:
                    case TokenKind.Py_RightBracket:
                        break;
                    case TokenKind.Py_Mul:
                        nodes.push( this.parseStarExpr() );
                        break;
                    default:
                        nodes.push( this.parseNamedExpr() );
                        break;
                }
            }
        }
        return new ASTTestListCompNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), commas.reverse());
    }

    parseTrailer() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Dot: {
                const op1 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() != TokenKind.Name) {
                    throw new SyntaxErrorException(startPos, "Missing name literal after '.'", this.curSymbol);
                }
                const op2 = this.curSymbol;
                this.advance();
                return new ASTDotNameNode(startPos, this.curSymbol.getStartPosition(), op1, op2);
            }
            case TokenKind.Py_LeftParen: {
                const op1 = this.curSymbol;
                this.advance();
                let right = new ASTNode();
                if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                    right = this.parseArgList();
                }
                if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                    throw new SyntaxErrorException(startPos, "Missing ')' in call expression!", this.curSymbol);
                }
                const op2 = this.curSymbol;
                this.advance();
                return new ASTCallNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
            }
            case TokenKind.Py_LeftBracket: {
                const op1 = this.curSymbol;
                this.advance();
                let right = new ASTNode();
                if (this.curSymbol.getKind() != TokenKind.Py_RightBracket) {
                    right = this.parseSubscriptList();
                }
                if (this.curSymbol.getKind() != TokenKind.Py_RightBracket) {
                    throw new SyntaxErrorException(startPos, "Missing ']' in index expression!", this.curSymbol);
                }
                const op2 = this.curSymbol;
                this.advance();
                return new ASTIndexNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
            }
            default:
                throw new SyntaxErrorException(startPos, "Expecting '.', '(' or '['", this.curSymbol);
        }
    }

    parseSubscriptList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        nodes.push( this.parseSubscript() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) break;
            nodes.push( this.parseSubscript() );
        }
        return new ASTSubscriptListNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseSubscript() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let from = new ASTNode();
        let op1 = new Token(-1, -1, TokenKind.Empty, []);
        let to = new ASTNode();
        let op2 = new Token(-1, -1, TokenKind.Empty, []);
        let step = new ASTNode();
        if (this.curSymbol.getKind() != TokenKind.Py_Colon) from = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
            op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() != TokenKind.Py_Comma && this.curSymbol.getKind() != TokenKind.Py_RightBracket && this.curSymbol.getKind() != TokenKind.Py_Colon) to = this.parseTest();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() != TokenKind.Py_Comma && this.curSymbol.getKind() != TokenKind.Py_RightBracket) step = this.parseTest();
            }
        }
        return new ASTSubscriptNode(startPos, this.curSymbol.getStartPosition(), from, op1, to, op2, step);
    }

    parseExprList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            nodes.push( this.parseStarExpr() );
        }
        else {
            nodes.push( this.parseOrExpr() );
        }
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push(this.curSymbol);
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_In) break;
            else if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                nodes.push( this.parseStarExpr() );
            }
            else {
                nodes.push( this.parseOrExpr() );
            }
        }
        return new ASTExprListNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseTestList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        nodes.push( this.parseTest() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push(this.curSymbol);
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Newline:
                case TokenKind.Py_SemiColon:
                    break;
                default:
                    nodes.push( this.parseTest() );
            }
        }
        return new ASTTestListNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseDictorSetMaker() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const keys : ASTNode[] = [];
        const colons : Token[] = [];
        const values : ASTNode[] = [];
        const separators : Token[] = [];
        let isDict = false;
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Mul: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.parseOrExpr();
                keys.push( new ASTSetNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                break;
            }
            case TokenKind.Py_Power: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.parseOrExpr();
                keys.push( new ASTDictionaryNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                break;
            }
            default: {
                keys.push( this.parseTest() );
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    isDict = true;
                    colons.push( this.curSymbol );
                    this.advance();
                    values.push( this.parseTest() );
                }
                break;
            }
        }
        if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For ]) {
            keys.push( this.parseCompFor() );
        }
        else if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) break;
                switch (this.curSymbol.getKind()) {
                    case TokenKind.Py_Mul: {
                        const op1 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        keys.push( new ASTSetNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                        break;
                    }
                    case TokenKind.Py_Power: {
                        const op1 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        keys.push( new ASTDictionaryNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                        break;
                    }
                    default: {
                        keys.push( this.parseTest() );
                        if (isDict) {
                            if (this.curSymbol.getKind() == TokenKind.Py_Colon) {
                                colons.push( this.curSymbol );
                                this.advance();
                                values.push( this.parseTest() );
                            }
                            else {
                                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in dictionary!", this.curSymbol);
                            }
                        }
                        break;
                    }
                }
            }
        }
        if (isDict) {
            return new ASTDictionaryContainerNode(startPos, this.curSymbol.getStartPosition(), keys.reverse(), colons.reverse(), values.reverse(), separators.reverse());
        }
        return new ASTSetContainerNode(startPos, this.curSymbol.getStartPosition(), keys.reverse(), separators.reverse());
    }

    parseCompIter() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Async:
            case TokenKind.Py_For:
                return this.parseCompFor();
            case TokenKind.Py_If:
                return this.parseCompIf();
            default:
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'async', 'for' or 'if' keyword!", this.curSymbol);
        }
    }

    parseCompSyncCompFor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_For) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseExprList();
            if (this.curSymbol.getKind() === TokenKind.Py_In) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseOrTest();
                if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For, TokenKind.Py_If]) {
                    const next = this.parseCompIter();
                    return new ASTSyncCompForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, next);
                }
                else {
                    return new ASTSyncCompForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, new ASTNode());
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'in' in for comprehension expression!", this.curSymbol);
        }
        return new ASTNode();
    }

    parseCompFor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseCompSyncCompFor();
            return new ASTCompForNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        return this.parseCompSyncCompFor();
    }

    parseCompIf() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_If) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTestNoCond();
            if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For, TokenKind.Py_If]) {
                const next = this.parseCompIter();
                return new ASTCompIfNode(startPos, this.curSymbol.getStartPosition(), op1, right, next);
            }
            return new ASTCompIfNode(startPos, this.curSymbol.getStartPosition(), op1, right, new ASTNode());
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'if' in if comprehension expression!", this.curSymbol);
    }

    parseYieldExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
            const op1 = this.curSymbol;
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_SemiColon:
                case TokenKind.Newline:
                    return new ASTYieldNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode());
                case TokenKind.Py_From: {
                    const op2 = this.curSymbol;
                    this.advance();
                    const right = this.parseTest();
                    return new ASTYieldFromNode(startPos, this.curSymbol.getStartPosition(), op1, op2, right);
                }
                default: {
                    const right = this.parseTestListComp();
                    return new ASTYieldNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'yield' in yield expression!", this.curSymbol);
    }

    parseArgList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        nodes.push( this.parseSubscript() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
            nodes.push( this.parseSubscript() );
        }
        return new ASTArgListNode(startPos, this.curSymbol.getStartPosition(),nodes.reverse(), separators.reverse());
    }

    parseArgument() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Mul:
            case TokenKind.Py_Power: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.parseTest();
                return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), new ASTNode(), op1, right);
            }
            default: {
                const left = this.parseTest();
                switch (this.curSymbol.getKind()) {
                    case TokenKind.Py_Async:
                    case TokenKind.Py_For: {
                        const right = this.parseCompFor();
                        return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), right);
                    }
                    case TokenKind.Py_Assign:
                    case TokenKind.Py_ColonAssign: {
                        const op1 = this.curSymbol;
                        this.advance();
                        const right = this.parseTest();
                        return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
                    }
                    default:
                        return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
                }
            }
        }
    }

    parseCompoundStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Async:
                return this.parseAsyncStmt();
            case TokenKind.Py_Matrice:
                return this.parseDecoratedStmt();
            case TokenKind.Py_If:
                return this.parseIfStmt();
            case TokenKind.Py_While:
                return this.parseWhileStmt();
            case TokenKind.Py_For:
                return this.parseForStmt();
            case TokenKind.Py_Try:
                return this.parseTryStmt();
            case TokenKind.Py_With:
                return this.parseWithStmt();
            case TokenKind.Py_Class:
                return this.parseClassStmt();
            case TokenKind.Py_Def:
                return this.parseFuncDefStmt();
            default:
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting compound statement!", this.curSymbol);
        }
    }

    parseClassStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Class) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Name) {
                const op2 = this.curSymbol;
                this.advance();
                let op3 = new Token(-1, -1, TokenKind.Empty, []);
                let op4 = new Token(-1, -1, TokenKind.Empty, []);
                let left = new ASTNode();
                if (this.curSymbol.getKind() === TokenKind.Py_LeftParen) {
                    op3 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() != TokenKind.Py_RightParen) left = this.parseArgList();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        op4 = this.curSymbol;
                        this.advance();
                    }
                    else {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' in class declaration!", this.curSymbol);
                    }
                }
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    const op5 = this.curSymbol;
                    this.advance();
                    const right = this.parseSuiteStmt();
                    return new ASTClassNode(startPos, this.curSymbol.getStartPosition(), op1, op2, op3, left, op4, op5, right);
                }
                else {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in class declaration!", this.curSymbol);
                } 
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'class' in class declaration!", this.curSymbol);
    }

    parseAsyncStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_Def: {
                    const right = this.parseFuncDefStmt();
                    return new ASTAsyncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
                case TokenKind.Py_With: {
                    const right = this.parseWithStmt();
                    return new ASTAsyncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
                case TokenKind.Py_For: {
                    const right = this.parseForStmt();
                    return new ASTAsyncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
                default:
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'def', 'with' or 'for' after 'async' statement!", this.curSymbol);
            } 
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'async' statement!", this.curSymbol);
    }

    parseIfStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const elifNodes: ASTNode[] = [];
        let elseNode = new ASTNode();
        if (this.curSymbol.getKind() === TokenKind.Py_If) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseNamedExpr();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseSuiteStmt();
                while (this.curSymbol.getKind() === TokenKind.Py_Elif) {
                    const op3 = this.curSymbol;
                    this.advance();
                    const one = this.parseNamedExpr();
                    if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                        const op4 = this.curSymbol;
                        this.advance();
                        const two = this.parseSuiteStmt();
                        elifNodes.push( new ASTElifNode(startPos, this.curSymbol.getStartPosition(), op3, one, op4, two) );
                    }
                    else {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'elif' statement!", this.curSymbol);
                    }
                }
                if (this.curSymbol.getKind() === TokenKind.Py_Else) {
                    elseNode = this.parseElseStmt();
                }
                return new ASTIfNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, elifNodes.reverse(), elseNode);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'if' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'if' statement!", this.curSymbol);
    }

    parseElseStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Else) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseSuiteStmt();
                return new ASTElseNode(startPos, this.curSymbol.getStartPosition(), op1, op2, right);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'else' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'else' statement!", this.curSymbol);
    }

    parseWhileStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_While) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseNamedExpr();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseSuiteStmt();
                if (this.curSymbol.getKind() === TokenKind.Py_Else) {
                    const next = this.parseElseStmt();
                    return new ASTWhileNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, next);
                }
                return new ASTWhileNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, new ASTNode());
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'while' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'while' in while statement!", this.curSymbol);
    }

    parseForStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_For) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseExprList();
            if (this.curSymbol.getKind() === TokenKind.Py_In) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseTestList();
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    const op3 = this.curSymbol;
                    this.advance();
                    let tc = new Token(-1, -1, TokenKind.Empty, []);
                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                        tc = this.curSymbol;
                        this.advance();
                    }
                    const next = this.parseSuiteStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_Else) {
                        const elsePart = this.parseElseStmt();
                        return new ASTForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, op3, tc, next, elsePart);
                    }
                    return new ASTForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, op3, tc, next, new ASTNode());
                }
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'for' statement!", this.curSymbol);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'in' in 'for' statement!", this.curSymbol);
        }
        return new ASTNode();
    }

    parseTryStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Try) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const left = this.parseSuiteStmt();
                if (this.curSymbol.getKind() === TokenKind.Py_Finally) {
                    const op3 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                        const op4 = this.curSymbol;
                        this.advance();
                        const right = this.parseSuiteStmt();
                        return new ASTTryNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, [], new ASTNode(), op3, op4, right);
                    }
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'finally' statement!", this.curSymbol);
                }
                else {
                    const nodes: ASTNode[] = [];
                    nodes.push( this.parseExceptStmt() );
                    while (this.curSymbol.getKind() === TokenKind.Py_Except) {
                        nodes.push( this.parseExceptStmt() );
                    }
                    let elsePart = new ASTNode();
                    if (this.curSymbol.getKind() === TokenKind.Py_Else) elsePart = this.parseElseStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_Finally) {
                        const op3 = this.curSymbol;
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                            const op4 = this.curSymbol;
                            this.advance();
                            const right = this.parseSuiteStmt();
                            return new ASTTryNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, nodes.reverse(), elsePart, op3, op4, right);
                        }
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'finally' statement!", this.curSymbol);
                    }
                    return new ASTTryNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, nodes.reverse(), elsePart, new Token(-1, -1, TokenKind.Empty, []), new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'try' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'try' statement!", this.curSymbol);
    }

    parseWithStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_With) {
            const op1 = this.curSymbol;
            this.advance();
            const nodes: ASTNode[] = [];
            const separatrors: Token[] = [];
            nodes.push( this.parseWithItemStmt() );
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separatrors.push( this.curSymbol );
                this.advance();
                nodes.push( this.parseWithItemStmt() );
            }
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                    const op3 = this.curSymbol;
                    this.advance();
                    const right = this.parseSuiteStmt();
                    return new ASTWithNode(startPos, this.curSymbol.getStartPosition(), op1, nodes.reverse(), separatrors.reverse(), op2, op3, right);
                }
                else {
                    const right = this.parseSuiteStmt();
                    return new ASTWithNode(startPos, this.curSymbol.getStartPosition(), op1, nodes.reverse(), separatrors.reverse(), op2, new Token(-1, -1, TokenKind.Empty, []), right);
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'with' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'with' statement!", this.curSymbol);
    }

    parseWithItemStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_As) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrExpr();
            return new ASTWithItemNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return new ASTWithItemNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
    }

    parseExceptStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Except) {
            const op1 = this.curSymbol;
            this.advance();
            let left = new ASTNode();
            let op2 = new Token(-1, -1, TokenKind.Empty, []);
            let op3 = new Token(-1, -1, TokenKind.Empty, []);
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                left = this.parseTest();
                if (this.curSymbol.getKind() === TokenKind.Py_As) {
                    op2 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() === TokenKind.Name) {
                        op3 = this.curSymbol;
                        this.advance();
                    }
                    else {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME literal after 'as' in except statement!", this.curSymbol);
                    }
                }
            } 
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op4 = this.curSymbol;
                this.advance;
                const suite = this.parseSuiteStmt();
                return new ASTExceptNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, op3, op4, suite);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'except' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'except' statement!", this.curSymbol);
    }

    parseSuiteStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Newline) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Indent) {
                const op2 = this.curSymbol;
                this.advance();
                const nodes: ASTNode[] = [];
                nodes.push( this.parseStmt() );
                while (this.curSymbol.getKind() != TokenKind.Dedent) {
                    nodes.push( this.parseStmt() );
                }
                const op3 = this.curSymbol;
                this.advance();
                return new ASTSuiteNode(startPos, this.curSymbol.getStartPosition(), op1, op2, nodes.reverse(), op3);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting indentation before block statement!", this.curSymbol);
        }
        return this.parseSimpleStmt();
    }

    parseStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Matrice:
            case TokenKind.Py_Async:
            case TokenKind.Py_Class:
            case TokenKind.Py_If:
            case TokenKind.Py_For:
            case TokenKind.Py_While:
            case TokenKind.Py_Try:
            case TokenKind.Py_With:
            case TokenKind.Py_Def:
                return this.parseCompoundStmt();
            default:
                return this.parseSimpleStmt();
        }
    }

    parseSimpleStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        nodes.push( this.parseSmallStmt() );
        while (this.curSymbol.getKind() === TokenKind.Py_SemiColon) {
            separators.push( this.curSymbol );
            this.advance();
            nodes.push( this.parseSmallStmt() );
        }
        if (this.curSymbol.getKind() !== TokenKind.Newline) throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting <NEWLINE> after simple statement(s)!", this.curSymbol);
        const op1 = this.curSymbol;
        this.advance();
        return new ASTSimpleStmtNode(startPos, this.curSymbol.getEndPosition(), nodes.reverse(), separators.reverse(), op1);
    }

    parseSmallStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Del:
                return this.parseDelStmt();
            case TokenKind.Py_Pass:
                return this.parsePassStmt();
            case TokenKind.Py_Break:
            case TokenKind.Py_Continue:
            case TokenKind.Py_Return:
            case TokenKind.Py_Raise:
            case TokenKind.Py_Yield:
                return this.parseFlowStmt();
            case TokenKind.Py_Import:
            case TokenKind.Py_From:
                return this.parseImportStmt();
            case TokenKind.Py_Global:
                return this.parseGlobalStmt();
            case TokenKind.Py_Nonlocal:
                return this.parseNonlocalStmt();
            case TokenKind.Py_Assert:
                return this.parseAssertStmt();
            default:
                return this.parseExprStmt();
        }
    }

    parseExprStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTestListStarExprStmt();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_PlusAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprPlusAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_MinusAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprMinusAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_MulAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprMulAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_DivAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprDivAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_MatriceAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprMatriceAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_ModuloAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprModuloAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_PowerAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprPowerAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_FloorDivAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprFloorDivAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_BitAndAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitAndAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_BitOrAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitOrAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_BitXorAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitXorAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_ShiftLeftAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitShiftLeftAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_ShiftRightAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitShiftRightAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_Colon: {
                const right = this.parseAnnAssignStmt();
                if (this.curSymbol.getKind() === TokenKind.Py_Assign) {
                    const op1 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                        const next = this.parseYieldExpr();
                        return new ASTAnnAssignNode(startPos, this.curSymbol.getStartPosition(), left, right, op1, next);
                    }
                    else {
                        const next = this.parseTestListStarExprStmt();
                        return new ASTAnnAssignNode(startPos, this.curSymbol.getStartPosition(), left, right, op1, next);
                    }
                }
                return new ASTAnnAssignNode(startPos, this.curSymbol.getStartPosition(), left, right, new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1));
            }
            case TokenKind.Py_Assign:
                {
                    const operators: Token[] = [];
                    const nodes: ASTNode[] = [];
                    while (this.curSymbol.getKind() === TokenKind.Py_Assign) {
                        operators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                            nodes.push( this.parseYieldExpr() );
                        }
                        else {
                            nodes.push( this.parseTestListStarExprStmt() );
                        }
                    }
                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                        const tc = this.curSymbol;
                        this.advance();
                        return new ASTAssignNode(startPos, this.curSymbol.getStartPosition(), left, operators.reverse(), nodes.reverse(), tc);
                    }
                    return new ASTAssignNode(startPos, this.curSymbol.getStartPosition(), left, operators.reverse(), nodes.reverse(), new Token(-1, -1, TokenKind.Empty, []));
                }
            default:
                return left;
        }
    }

    parseAnnAssignStmt() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
            const startPos = this.curSymbol.getStartPosition();
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTAnnotatedNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in annotated statement!", this.curSymbol);
    }

    parseTestListStarExprStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        nodes.push( this.curSymbol.getKind() === TokenKind.Py_Mul ? this.parseStarExpr() : this.parseTest() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Newline:
                case TokenKind.Py_SemiColon:
                case TokenKind.Py_PlusAssign:
                case TokenKind.Py_MinusAssign:
                case TokenKind.Py_MulAssign:
                case TokenKind.Py_DivAssign:
                case TokenKind.Py_ModuloAssign:
                case TokenKind.Py_MatriceAssign:
                case TokenKind.Py_FloorDivAssign:
                case TokenKind.Py_BitAndAssign:
                case TokenKind.Py_BitOrAssign:
                case TokenKind.Py_BitXorAssign:
                case TokenKind.Py_ShiftLeftAssign:
                case TokenKind.Py_ShiftRightAssign:
                case TokenKind.Py_Colon:
                case TokenKind.Py_Assign:
                    break;
                case TokenKind.Py_Comma:
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting element before ',' in testlist statement!", this.curSymbol);
                default:
                    nodes.push( this.curSymbol.getKind() === TokenKind.Py_Mul ? this.parseStarExpr() : this.parseTest() );
                    break;
            }
        }
        return new ASTTestListStarExprNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseDelStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Del) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseExprList();
            return new ASTDelNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'del' in del statement!", this.curSymbol);
    }

    parsePassStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Pass) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTPassNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'pass' in pass statement!", this.curSymbol);
    }

    parseFlowStmt() : ASTNode {
        if (this.flowLevel > 0) {
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_Break:
                    return this.parseBreakStmt();
                case TokenKind.Py_Continue:
                    return this.parseContinueStmt();
                case TokenKind.Py_Return:
                    return this.parseReturnStmt();
                case TokenKind.Py_Raise:
                    return this.parseRaiseStmt();
                case TokenKind.Py_Yield:
                    return this.parseYieldExpr();
                default:
                    break;
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting flow statement inside looping or function statement!", this.curSymbol);
    }

    parseBreakStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Break) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTBreakNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'break' in break statement!", this.curSymbol);
    }

    parseContinueStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Continue) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTContinueNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'continue' in continue statement!", this.curSymbol);
    }

    parseReturnStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Return) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() in [ TokenKind.Newline, TokenKind.Py_SemiColon ]) {
                return new ASTReturnNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(-1, -1));
            }
            const right = this.parseTestListStarExprStmt();
            return new ASTReturnNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'return' in return statement!", this.curSymbol);
    }

    parseYieldStmt() : ASTNode {
        return this.parseYieldExpr();
    }

    parseRaiseStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Raise) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() in [ TokenKind.Newline, TokenKind.Py_SemiColon ]) {
                return new ASTRaiseNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(-1, -1), new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1) );
            }
            const left = this.parseTest();
            if (this.curSymbol.getKind() === TokenKind.Py_From) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseTest();
                return new ASTRaiseNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right );
            }
            return new ASTRaiseNode(startPos, this.curSymbol.getStartPosition(), op1, left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1) );
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'raise' in raise statement!", this.curSymbol);
    }

    parseImportStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportFromStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportAsNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseDottedAsNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportAsNamesStmt() : ASTNode {
        return new ASTNode();
    }

    parseDottedAsNamesStmt() : ASTNode {
        return new ASTNode();
    }

    parseDottedNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseGlobalStmt() : ASTNode {
        return new ASTNode();
    }

    parseNonlocalStmt() : ASTNode {
        return new ASTNode();
    }

    parseAssertStmt() : ASTNode {
        return new ASTNode();
    }

    parseSingleInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseFileInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseEvalInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseAsyncFuncDefStmt() : ASTNode {
        return new ASTNode();
    }

    parseDecoratedStmt() : ASTNode {
        return new ASTNode();
    }

    parseDecoratorsStmt() : ASTNode {
        return new ASTNode();
    }

    parseDecoratorStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncDefStmt() : ASTNode {
        return new ASTNode();
    }

    parseParametersStmt() : ASTNode {
        return new ASTNode();
    }

    parseTypedArgsListStmt() : ASTNode {
        return new ASTNode();
    }

    parseTFPStmt() : ASTNode {
        return new ASTNode();
    }

    parseVarArgsListStmt() : ASTNode {
        return new ASTNode();
    }

    parseVFPDefStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncBodySuiteStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncTypeInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncTypeStmt() : ASTNode {
        return new ASTNode();
    }

    parseTypeListStmt() : ASTNode {
        return new ASTNode();
    }
}