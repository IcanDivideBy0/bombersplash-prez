#version 300 es

in vec4 aVertexPosition;
in vec3 aVertexNormal;
in vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uNormalMatrix;

out vec4 vColor;
out vec3 vertPos;
out vec3 normalInterp;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;

  vColor = aVertexColor;

  vec4 vertPos4 = uModelViewMatrix * aVertexPosition;
  vertPos = vec3(vertPos4) / vertPos4.w;
  normalInterp = vec3(uNormalMatrix * vec4(aVertexNormal, 0.0));
}
