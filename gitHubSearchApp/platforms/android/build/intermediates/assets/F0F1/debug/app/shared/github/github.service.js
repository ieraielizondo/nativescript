"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var GitHubService = (function () {
    function GitHubService(http) {
        this.http = http;
        this.baseUrl = "https://api.github.com/";
    }
    GitHubService.prototype.getRepos = function (username) {
        return this.http.get(this.baseUrl + 'users/' + username + '/repos');
    };
    GitHubService.prototype.getFile = function (repo) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/vnd.github.VERSION.html');
        return this.http.get(repo.url, { headers: headers });
    };
    GitHubService.prototype.getUser = function (username) {
        return this.http.get(this.baseUrl + 'users/' + username);
    };
    GitHubService.prototype.getStarred = function (username) {
        return this.http.get(this.baseUrl + 'users/' + username + '/starred');
    };
    GitHubService.prototype.getRepoContent = function (repo, isfirst) {
        if (isfirst) {
            return this.http.get(repo.url + '/contents');
        }
        else {
            return this.http.get(repo.url);
        }
    };
    GitHubService.prototype.getRepoLang = function (url) {
        return this.http.get(url);
    };
    GitHubService.prototype.searchUsers = function (username) {
        return this.http.get(this.baseUrl + 'search/users?q=' + username + "+in:login");
    };
    GitHubService.prototype.getBars = function () {
        return this.http.get("http://pptest-kwiatchris.rhcloud.com/bars/findall");
    };
    GitHubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubService);
    return GitHubService;
}());
exports.GitHubService = GitHubService;
//# sourceMappingURL=github.service.js.map