export function getSandboxMenuItems() {
return [{"key":"./app/user-profile/details-form/details-form.sandbox","searchKey":"DetailsFormComponent","name":"DetailsFormComponent","label":"","scenarioMenuItems":[{"key":1,"description":"Default"},{"key":2,"description":"User Loaded"}]},{"key":"./app/user-profile/info-summary/info-summary.component.sandbox","searchKey":"InfoSummaryComponent","name":"InfoSummaryComponent","label":"","scenarioMenuItems":[{"key":1,"description":"Default"},{"key":2,"description":"Non-editable User"}]},{"key":"./app/user-profile/user-profile.component.sandbox","searchKey":"UserProfileComponent","name":"UserProfileComponent","label":"","scenarioMenuItems":[{"key":1,"description":"Default"}]}];
}
export function getSandbox(path: string) {
switch(path) {
case './app/user-profile/details-form/details-form.sandbox':
return import('./app/user-profile/details-form/details-form.sandbox').then(sandbox => { return sandbox.default.serialize('./app/user-profile/details-form/details-form.sandbox'); });
case './app/user-profile/info-summary/info-summary.component.sandbox':
return import('./app/user-profile/info-summary/info-summary.component.sandbox').then(sandbox => { return sandbox.default.serialize('./app/user-profile/info-summary/info-summary.component.sandbox'); });
case './app/user-profile/user-profile.component.sandbox':
return import('./app/user-profile/user-profile.component.sandbox').then(sandbox => { return sandbox.default.serialize('./app/user-profile/user-profile.component.sandbox'); });
}}
