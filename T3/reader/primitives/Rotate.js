class Rotate extends CGFobject {
    constructor(scene) {
        super(scene);

        this.base = new MyQuad(this.scene, -0.5, -0.5, 0.5, 0.5);
        this.texture = new CGFtexture(this.scene, 'scenes/images/rotate.png')
        this.id = 50;
    }


    logPicking() {
        if (this.scene.pickMode == false) {
            if (this.scene.pickResults != null && this.scene.pickResults.length > 0) {
                for (var i = 0; i < this.scene.pickResults.length; i++) {
                    var obj = this.scene.pickResults[i][0];
                    if (obj) {
                        var customId = this.scene.pickResults[i][1];
                        this.scene.startRotation();
                        console.log('hey');
                        console.log("Picked object: " + obj + ", with pick id " + customId);
                    }
                }
                this.scene.pickResults.splice(0, this.scene.pickResults.length);
            }
        }
    }

    display() {

        this.logPicking();

        this.scene.pushMatrix();

        this.texture.bind();
        this.scene.scale(5, 5, 1);
        this.scene.registerForPick(this.id, this.base);
        this.base.display();
        this.texture.unbind();

        this.scene.popMatrix();
    }
}