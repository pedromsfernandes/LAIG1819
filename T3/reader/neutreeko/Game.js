class Game {
    constructor(scene) {
        this.board = [
            ['empty', 'white', 'empty', 'white', 'empty'],
            ['empty', 'empty', 'black', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'white', 'empty', 'empty'],
            ['empty', 'black', 'empty', 'black', 'empty']
        ];
        this.currPlayer = 1;

        this.server = new Server();

        this.scene = scene;

        this.gameStates = Object.freeze({
            "menu": 1,
            "difficulty": 2,
            "pvp": 3,
            "pvc": 4,
            "cvc": 5
        });
        this.gameState = this.gameStates.menu;
    }

    getPieces(player) {

        let piece = "";

        switch (player) {
            case 1:
                piece = "black";
                break;
            case 2:
                piece = "white";
                break;
            default:
                break;
        }

        let pieces = [];

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (this.board[i][j] === piece) {
                    pieces.push([i, j]);
                }
            }
        }

        return pieces;
    }

    nextPlayer() {
        this.currPlayer = this.currPlayer === 1 ? 2 : 1;
    }

    parseArrayToString(array) {

        let string = "["

        for (let i = 0; i < array.length; i++) {
            if (i > 0)
                string += ",";
            string += array[i];
        }

        string += "]";

        return string;
    }

    getBoardString(){

        console.log(this.board);

        let board_string = '';

        for (let i = 0; i < this.board.length; i++) {
            if (i > 0)
                board_string += ',';
            board_string += '[';
            for (let j = 0; j < this.board.length; j++) {
                if (j > 0)
                    board_string += ',';
                board_string += this.board[i][j];
            }
            board_string += ']';
        }

        return board_string;
    }

    getValidMoves(piece) {

        let piece_string = this.parseArrayToString(piece);
        let board_string = this.getBoardString();
        let this_game = this;
        
        this.server.getPrologRequest("valid_moves([" + board_string + "]," + piece_string + ")", function (data) {
            this_game.valid_moves = data.target.response;
            this_game.ready = true;
        });
    }


    move(move) {
        let this_game = this;
        let board_string = this.getBoardString();

        this.server.getPrologRequest("move([" + move + "]," + this.currPlayer + ",[" + board_string + "])", function (data) {
            let newBoard = JSON.parse(data.target.response.replace(/(empty|white|black)/g, '"$1"'));
            console.log(newBoard);
            this_game.board = newBoard;
            this_game.ready = true;
        });
    }

    update() {
        this.getValidMoves();
    }
}