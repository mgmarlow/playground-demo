import { InfoSummaryComponent } from './info-summary.component';
import { sandboxOf } from 'angular-playground/dist';

export default sandboxOf(InfoSummaryComponent)
    .add('Default', {
        template: `
            <app-info-summary></app-info-summary>
        `
    });