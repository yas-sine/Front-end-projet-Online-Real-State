"use strict";
var router_1 = require("@angular/router");
var immobilier_component_1 = require("./components/immobilier/immobilier.component");
var detail_component_1 = require("./components/immobilier/detail.component");
var plusdetail_component_1 = require("./components/immobilier/plusdetail.component");
var APP_ROUTES = [
    { path: 'Detail', component: detail_component_1.DetailComponent },
    { path: 'Immobilier', component: immobilier_component_1.ImmobilierComponent },
    { path: 'MoreDetails', component: plusdetail_component_1.PlusdetailComponent },
    { path: 'Immobilier/:category', component: immobilier_component_1.ImmobilierComponent },
    { path: '', component: immobilier_component_1.ImmobilierComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map
