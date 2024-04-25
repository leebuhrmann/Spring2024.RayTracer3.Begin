/**
 * An ambient shader
 */
class AmbientShader {
  constructor(ambientColor) {
    this.ambientColor = ambientColor;
  }
  illuminateObject(rayFrom = null, rayCollision = null, normal = null, collisionObject = null, remaining = 0) {
    return this.ambientColor;
  }

}