"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./components/header/header.component');
var dropdown_directive_1 = require('./components/header/dropdown.directive');
var immobilier_component_1 = require('./components/immobilier/immobilier.component');
var detail_component_1 = require('./components/immobilier/detail.component');
var plusdetail_component_1 = require('./components/immobilier/plusdetail.component');
var item_component_1 = require('./components/immobilier/item.component');
var immobiliers_service_1 = require("./services/immobiliers.service");
var app_routing_1 = require("./app.routing");
var list_component_1 = require('./components/immobilier/list.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dropdown_directive_1.DropdownDirective,
                header_component_1.HeaderComponent,
                immobilier_component_1.ImmobilierComponent,
                detail_component_1.DetailComponent,
                plusdetail_component_1.PlusdetailComponent,
                item_component_1.ItemComponent,
                list_component_1.ListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            providers: [immobiliers_service_1.ImmobiliersService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map