// By Najika Yoo @najikahalsema

import {
  css,
  LitElement,
  html,
  TemplateResult,
} from "lit";
import { 
  customElement,
} from 'lit/decorators.js';
import "@spectrum-web-components/slider/sp-slider.js";

@customElement("my-slider")
export default class MySlider extends LitElement {
  static styles = [ css`
    sp-slider {
      z-index: 1;
    }
  `];
  protected render(): TemplateResult {
    return html`
      <h4>Standard</h4>
      <sp-slider
        max=100
        min=0
        value=50
      >Slider Label</sp-slider>
      <sp-slider 
        label="Slider - Disabled" 
        disabled
        max=100
        min=0
      ></sp-slider>
      
      <div style="padding: 10px"></div>

      <h4>Filled</h4>
      <sp-slider 
        label="Slider Label" 
        variant="filled"
        max=100
        min=0
      ></sp-slider>
      <sp-slider 
        label="Slider - Disabled" 
        variant="filled"
        disabled
        max=100
        min=0
      ></sp-slider>

      <div style="padding: 10px"></div>

      <h4>Tick</h4>
      <sp-slider 
        label="Slider Label" 
        variant="tick"
        tick-step="5"
        max=100
        min=0
      ></sp-slider>
      <sp-slider 
        label="Slider - Disabled" 
        variant="tick"
        tick-step="5"
        disabled
        max=100
        min=0
      ></sp-slider>

      <div style="padding: 10px"></div>

      <h4>Tick with Labels</h4>
      <sp-slider 
        label="Slider Label" 
        variant="tick"
        tick-step="5"
        tick-labels
        max=100
        min=0
      ></sp-slider>
      <sp-slider 
        label="Slider - Disabled" 
        variant="tick"
        tick-step="5"
        tick-labels
        disabled
        max=100
        min=0
      ></sp-slider>

      <div style="padding: 10px"></div>

      <h4>Ramp</h4>
      <sp-slider 
        label="Slider Label" 
        variant="ramp"
        max=100
        min=0
      ></sp-slider>
      <sp-slider 
        label="Slider - Disabled" 
        variant="ramp"
        disabled
        max=100
        min=0
      ></sp-slider>
    `;
  }
}
