uniform vec2 resolution; // Resolution of the element
uniform vec2 offset;     // Position of the element in the screen
uniform float time;      // Time passed since mount
uniform sampler2D src;   // Input texture

vec4 blink(vec4 color, float time) {
  return color * step(.5, fract(time));
}

void main() {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    float r = texture2D(src, uv+vec2(0.02+0.01*sin(uv.y*10.0+time*3.0), 0.0)).x;
    float g = texture2D(src, uv+vec2(0.01*sin(uv.y*10.0+time*3.0))).y;
    float b = texture2D(src, uv+vec2(-0.02+0.01*sin(uv.y*10.0+time*3.0), 0.0)).z;
    gl_FragColor = vec4(r, g, b, 0.5);
}
