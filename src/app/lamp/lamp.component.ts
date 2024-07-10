import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lamp',
  template: `
    <svg width="100" height="300" viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Rect -->
      <rect width="100" height="300" rx="15" ry="15" fill="#333"/>
      
      <!-- Red Light -->
      <circle [attr.cx]="50" [attr.cy]="75" r="35" [attr.fill]="color === 'red' ? 'url(#gradRed)' : 'url(#gradOff)'"/>
      <circle [attr.cx]="50" [attr.cy]="75" r="35" fill="none" stroke="black" stroke-width="2"/>
      
      <!-- Yellow Light -->
      <circle [attr.cx]="50" [attr.cy]="150" r="35" [attr.fill]="color === 'yellow' ? 'url(#gradYellow)' : 'url(#gradOff)'"/>
      <circle [attr.cx]="50" [attr.cy]="150" r="35" fill="none" stroke="black" stroke-width="2"/>
      
      <!-- Green Light -->
      <circle [attr.cx]="50" [attr.cy]="225" r="35" [attr.fill]="color === 'green' ? 'url(#gradGreen)' : 'url(#gradOff)'"/>
      <circle [attr.cx]="50" [attr.cy]="225" r="35" fill="none" stroke="black" stroke-width="2"/>
      
      <!-- Gradients -->
      <defs>
        <radialGradient id="gradRed" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(255,100,100);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(139,0,0);stop-opacity:1" />
        </radialGradient>
        <radialGradient id="gradYellow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(255,255,100);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(204,204,0);stop-opacity:1" />
        </radialGradient>
        <radialGradient id="gradGreen" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(100,255,100);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(0,139,0);stop-opacity:1" />
        </radialGradient>
        <radialGradient id="gradOff" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(169,169,169);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(105,105,105);stop-opacity:1" />
        </radialGradient>
      </defs>
    </svg>
  `
})
export class LampComponent {
  @Input() color: string = 'off';
}
