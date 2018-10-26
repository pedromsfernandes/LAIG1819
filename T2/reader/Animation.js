class Animation {
  constructor(scene, time) {
    if (this.constructor == Animation) {
      throw new Error('Abstract classes can\'t be instantiated.');
    }
    this.scene = scene;
    this.time = time;
    this.over = false;
  }

  update(deltaTime) {
  }

  apply() { }

  setTime(time) {
    this.time = time;
  }

  getTime() {
    return this.time;
  }
}