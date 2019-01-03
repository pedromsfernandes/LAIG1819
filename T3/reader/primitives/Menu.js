class Menu extends CGFobject {
    constructor(scene, difficulty, pvp, pvc, cvc, diffEz, diffMed, diffHard, timer, fifteen, thirty, fourtyfive, onemin) {
        super(scene);

        this.difficulty = difficulty;
        this.pvp = pvp;
        this.pvc = pvc;
        this.cvc = cvc;
        this.diffEz = diffEz;
        this.diffMed = diffMed;
        this.diffHard = diffHard;
        this.timer = timer;

        this.fifteen = fifteen;
        this.thirty = thirty;
        this.fourtyfive = fourtyfive;
        this.onemin = onemin;

        this.pvpBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.pvcBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.cvcBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);

        this.diffBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.diffEzBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.diffMedBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.diffHardBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);

        this.timerBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.fifteenBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.thirtyBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.oneminBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.fourtyfiveBoard = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
    }

    displayMainMenu() {
        this.scene.pushMatrix();
        this.scene.translate(7.0, 10.5, 7.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.pvp.bind();
        this.scene.registerForPick(4, this.pvpBoard);
        this.pvpBoard.display();
        this.pvp.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(8.0, 9, 8.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.pvc.bind();
        this.scene.registerForPick(5, this.pvcBoard);
        this.pvcBoard.display();
        this.pvc.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(9.0, 7.5, 9.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.cvc.bind();
        this.scene.registerForPick(6, this.cvcBoard);
        this.cvcBoard.display();
        this.cvc.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(10, 6, 10);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.difficulty.bind();
        this.scene.registerForPick(2, this.diffBoard);
        this.diffBoard.display();
        this.difficulty.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(11, 4.5, 11);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.timer.bind();
        this.scene.registerForPick(3, this.timerBoard);
        this.timerBoard.display();
        this.timer.unbind();
        this.scene.popMatrix();
    }

    displayDifficultyMenu() {
        this.scene.pushMatrix();
        this.scene.translate(7.0, 10.5, 7.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.diffEz.bind();
        this.scene.registerForPick(2, this.diffEzBoard);
        this.diffEzBoard.display();
        this.diffEz.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(8.0, 9, 8.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.diffMed.bind();
        this.scene.registerForPick(3, this.diffMedBoard);
        this.diffMedBoard.display();
        this.diffMed.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(9.0, 7.5, 9.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.diffHard.bind();
        this.scene.registerForPick(4, this.diffHardBoard);
        this.diffHardBoard.display();
        this.diffHard.unbind();
        this.scene.popMatrix();
    }

    displayTimerMenu() {
        this.scene.pushMatrix();
        this.scene.translate(7.0, 10.5, 7.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.fifteen.bind();
        this.scene.registerForPick(1, this.fifteenBoard);
        this.fifteenBoard.display();
        this.fifteen.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(8.0, 9, 8.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.thirty.bind();
        this.scene.registerForPick(2, this.thirtyBoard);
        this.thirtyBoard.display();
        this.thirty.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(9.0, 7.5, 9.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.fourtyfive.bind();
        this.scene.registerForPick(3, this.fourtyfiveBoard);
        this.fourtyfiveBoard.display();
        this.fourtyfive.unbind();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(10.0, 6, 10.0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(3, 1.5, 1);
        this.onemin.bind();
        this.scene.registerForPick(4, this.oneminBoard);
        this.oneminBoard.display();
        this.onemin.unbind();
        this.scene.popMatrix();
    }

    nextState(id) {
        switch (this.scene.game.gameState) {
            case this.scene.game.gameStates.MENU:
                this.scene.game.gameState = id;
                if (id >= this.scene.game.gameStates.PVP)
                    this.scene.updateCamera(1);
                break;
            case this.scene.game.gameStates.DIFFICULTY:
                this.scene.game.gameState = this.scene.game.gameStates.MENU;
                this.scene.game.difficulty = id;
                break;
            case this.scene.game.gameStates.TIMER:
                this.scene.game.gameState = this.scene.game.gameStates.MENU;
                this.scene.game.updateTimer(id);
                break;
            default:
                break;
        }
    }

    logPicking() {
        if (this.scene.pickMode == false) {
            if (this.scene.pickResults != null && this.scene.pickResults.length > 0) {
                for (var i = 0; i < this.scene.pickResults.length; i++) {
                    var obj = this.scene.pickResults[i][0];
                    if (obj) {
                        var customId = this.scene.pickResults[i][1];
                        this.nextState(customId);
                        console.log("Picked object: " + obj + ", with pick id " + customId);
                    }
                }
                this.scene.pickResults.splice(0, this.scene.pickResults.length);
            }
        }
    }

    display() {
        if (this.scene.game.gameState >= this.scene.game.gameStates.MENU &&
            this.scene.game.gameState <= this.scene.game.gameStates.TIMER)
            this.logPicking();

        switch (this.scene.game.gameState) {
            case this.scene.game.gameStates.MENU:
                this.displayMainMenu();
                break;
            case this.scene.game.gameStates.DIFFICULTY:
                this.displayDifficultyMenu();
                break;
            case this.scene.game.gameStates.TIMER:
                this.displayTimerMenu();
                break;
            default:
                break;
        }
    }
}