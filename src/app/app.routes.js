"use strict";
var router_1 = require("@angular/router");
var conversion_component_1 = require("./conversion.component");
var feedback_component_1 = require("./feedback.component");
exports.routes = [
    { path: '', component: conversion_component_1.ConversionComponent },
    { path: 'home', component: conversion_component_1.ConversionComponent },
    { path: 'feedback', component: feedback_component_1.FeedbackComponent }
];
exports.RoutesModule = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map