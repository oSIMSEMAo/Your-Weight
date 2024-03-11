import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
