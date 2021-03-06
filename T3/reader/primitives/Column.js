class Column extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.column = new MyCylinder(this.scene, 0.75, 0.75, 1, 4, 4);
        this.initTextures();
    }

    initTextures() {

        this.columnTexture = new CGFappearance(this.scene);
        this.columnTexture.loadTexture("scenes/images/rock_wall.jpg");
    };

    display() {

        this.scene.pushMatrix();
        this.columnTexture.apply();
        this.scene.rotate(Math.PI/4,0,1,0);

            this.scene.pushMatrix();
            this.scene.scale(1,7.5,1);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();

            //bottom design
            this.scene.pushMatrix();
            this.scene.scale(2.5,0.25,2.5);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.scale(2,0.5,2);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.scale(1.5,0.75,1.5);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();

            //upper design
            this.scene.pushMatrix();
            this.scene.translate(0,7.75,0);
            this.scene.scale(2.5,0.25,2.5);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0,7.5,0);
            this.scene.scale(2,0.5,2);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0,7.25,0);
            this.scene.scale(1.5,0.75,1.5);
            this.scene.rotate(-Math.PI/2,1,0,0);    
            this.column.display();
            this.scene.popMatrix();
        
        this.scene.popMatrix();
    }
}