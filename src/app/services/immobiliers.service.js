"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ImmobiliersService = (function () {
    function ImmobiliersService(http) {
        this.UrlWebApi = 'http://data-courses.firebaseio.com/.json';
        this.http = http;
    }
    ImmobiliersService.prototype.RecupererImmobiliers = function () {
        var immobiliers = this.http
            .get(this.UrlWebApi, {
            headers: this.getHeaders()
        })
            .map(function (response) { return response.json(); });
        return immobiliers;
    };
    /* ChercherParId(id:string):Immobilier {
         let imm:Immobilier;
         this.RecupererImmobiliers().subscribe(p => {
             this.Immobilier = p;
             for (let item of this.Immobiliers) {
                 if (item.Id == id) {
                     imm = item;
                 }
             }
         }, err => {
             console.log(err);
         });
         return imm;
     }*/
    ImmobiliersService.prototype.ChercherParCategorie = function (category) {
        var _this = this;
        var immo = [];
        this.RecupererImmobiliers().subscribe(function (p) {
            _this.Immobiliers = p;
            for (var _i = 0, _a = _this.Immobiliers; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.categorie == category) {
                    immo.push(item);
                }
            }
        }, function (err) {
            console.log(err);
        });
        return immo;
    };
    ImmobiliersService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    ImmobiliersService = __decorate([
        core_1.Injectable()
    ], ImmobiliersService);
    return ImmobiliersService;
}());
exports.ImmobiliersService = ImmobiliersService;
//# sourceMappingURL=immobiliers.service.js.map