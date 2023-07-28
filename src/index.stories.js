import { swcThemeDecorator } from "@spectrum-web-components/story-decorator/decorator.js";
import { html } from "lit-html";
import "./index.ts";

export default {
  decorators: [swcThemeDecorator],
};

export const slider = () => html`<my-slider></my-slider> `;
