export function getSandboxMenuItems() {
return [{"key":"./app/user-profile/info-summary/info-summary.component.sandbox","searchKey":"InfoSummaryComponent","name":"InfoSummaryComponent","label":"","scenarioMenuItems":[{"key":1,"description":"Default"}]}];
}
export function getSandbox(path: string) {
switch(path) {
case './app/user-profile/info-summary/info-summary.component.sandbox':
return import('./app/user-profile/info-summary/info-summary.component.sandbox').then(sandbox => { return sandbox.default.serialize('./app/user-profile/info-summary/info-summary.component.sandbox'); });
}}
