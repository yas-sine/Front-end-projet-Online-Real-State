"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ListComponent = (function () {
    function ListComponent(route, immobiliersService) {
        this.route = route;
        this.immobiliersService = immobiliersService;
        this.immobiliers = [];
        this.immobilierSelected = new core_1.EventEmitter();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var category = params['categorie'];
            if (category != null) {
                _this.immobiliers = _this.immobiliersService.ChercherParCategorie(category);
            }
            else {
                _this.immobiliersService.RecupererImmobiliers().subscribe(function (p) {
                    _this.immobiliers = p;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    ListComponent.prototype.onSelected = function (immobilier) {
        this.immobilierSelected.emit(immobilier);
    };
    __decorate([
        core_1.Output()
    ], ListComponent.prototype, "immobilierSelected");
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html'
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map