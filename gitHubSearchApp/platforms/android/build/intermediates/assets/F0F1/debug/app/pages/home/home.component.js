"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require("../../shared/github/github.service");
var HomeComponent = (function () {
    function HomeComponent(gitHub) {
        this.gitHub = gitHub;
        this.log1 = "esperando...";
        this.isLoading = false;
    }
    HomeComponent.prototype.getBars = function () {
        var _this = this;
        this.isLoading = !this.isLoading;
        this.gitHub.getBars().subscribe(function (data) {
            console.log(JSON.stringify(data.json()));
            console.log("Cuenta: " + data.json.length);
            _this.bars = data.json();
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("getBarsComplete.");
            _this.isLoading = !_this.isLoading;
        });
    };
    HomeComponent.prototype.findUsers = function () {
        var _this = this;
        if (this.username != undefined && this.username != "") {
            this.gitHub.searchUsers(this.username).subscribe(function (data) {
                console.log("Numero de resultados: " + data.json().total_count);
                _this.log1 = data.json().total_count + " resultados";
                _this.foundUsers = data.json().items;
            }, function (err) {
                console.log("SearchUsers error." + err);
                _this.log1 = "Algo falló";
            }, function () {
                //console.log("findUsers completed");
            });
        }
    };
    HomeComponent.prototype.getrepos = function () {
        var _this = this;
        this.log1 = "usename: " + this.username;
        if (this.username == "") {
            this.log1 = "usename: vacio";
            return;
        }
        this.gitHub.getUser(this.username).subscribe(function (data) {
            _this.user = data.json();
            _this.log1 = data.toString();
            console.log(data.json());
        }, function (err) {
            _this.log1 = "error " + err.toString();
            console.log(err);
        }, function () {
            _this.log1 = "getuser completo";
            console.log("get user Complete");
        });
    };
    HomeComponent.prototype.prueba = function (user) {
        alert(user.login);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [github_service_1.GitHubService],
            templateUrl: "pages/home/home.html",
            styleUrls: ["pages/home/home-common.css"]
        }), 
        __metadata('design:paramtypes', [github_service_1.GitHubService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map