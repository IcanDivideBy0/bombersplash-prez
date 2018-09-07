import { condensed as theme } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import prismGlsl from "react-syntax-highlighter/languages/prism/glsl";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#1c1117",
    link: "#aa3333",
  },
  prism: {
    style: okaidia,
    languages: {
      glsl: prismGlsl,
    },
  },
};
