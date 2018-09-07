#version 300 es
precision mediump float;

in vec3 normalInterp;
in vec3 vertPos;
in vec4 vColor;

const vec3 lightPos = vec3(0.0,0.0,1157.0);
const vec4 ambientColor = vec4(0.0, 0.0, 0.0, 0.0);
const vec4 specColor = vec4(1.0, 1.0, 1.0, 1.0);

out vec4 color;

void main(void) {
  vec3 normal = normalize(normalInterp);
  vec3 lightDir = normalize(lightPos - vertPos);

  float lambertian = max(dot(lightDir,normal), 0.0);
  float specular = 0.0;

  if(lambertian > 0.0) {
    vec3 viewDir = normalize(-vertPos);

    vec3 halfDir = normalize(lightDir + viewDir);
    float specAngle = max(dot(halfDir, normal), 0.0);
    specular = pow(specAngle, 16.0);
  }

  vec4 result = ambientColor +
    lambertian * vColor +
    specular * specColor;

  color = vec4(result.xyz * vColor.a, vColor.a);
}
