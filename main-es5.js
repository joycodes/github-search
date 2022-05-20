(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/joyce/Desktop/github-search/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "75yQ":
    /*!*************************************************!*\
      !*** ./src/app/services/github-data.service.ts ***!
      \*************************************************/

    /*! exports provided: GithubDataService */

    /***/
    function yQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GithubDataService", function () {
        return GithubDataService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GithubDataService = /*#__PURE__*/function () {
        function GithubDataService(http) {
          _classCallCheck(this, GithubDataService);

          this.http = http;
          this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].accessToken;
        }

        _createClass(GithubDataService, [{
          key: "getUserData",
          value: function getUserData(username) {
            return this.http.get( //`https://api.github.com/users/${username}?access_token=${this.token}`
            "https://api.github.com/users/".concat(username)).toPromise();
          }
        }, {
          key: "getUserRepoData",
          value: function getUserRepoData(username) {
            return this.http.get(" https://api.github.com/users/".concat(username, "/repos?order=created&sort=asc?access_token=").concat(this.token)).toPromise();
          }
        }, {
          key: "getRepoData",
          value: function getRepoData(searchterm) {
            return this.http.get("https://api.github.com/search/repositories?q=".concat(searchterm)).toPromise();
          }
        }]);

        return GithubDataService;
      }();

      GithubDataService.ɵfac = function GithubDataService_Factory(t) {
        return new (t || GithubDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      GithubDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GithubDataService,
        factory: GithubDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        accessToken: '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'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
      // https://api.github.com/users/mugerah?access_token=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
      // https://api.github.com/users/hmugera?access_token=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
      // https://api.github.com/users/mugerah?access_token=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
      // https://api.github.com/users/mugerah/repos?order=created&sort=asc?access_token=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
      // https://api.github.com/search/repositories?q=pizza?order=created&sort=asc?acess_token=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/page=1&per_page=100
      // `https://api.github.com/search/repositories?q=${searchterm}?order=created&sort=asc?acess_token=$this.token/page=1&per_page=100`

      /***/
    },

    /***/
    "BkP4":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/github-user-details/github-user-details.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GithubUserDetailsComponent */

    /***/
    function BkP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GithubUserDetailsComponent", function () {
        return GithubUserDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_github_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/github-data.service */
      "75yQ");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _highlight_hover_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../highlight-hover.directive */
      "gJgi");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../loader/loader.component */
      "vPOg");
      /* harmony import */


      var _date_count_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../date-count.pipe */
      "Nn8z");

      function GithubUserDetailsComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GithubUserDetailsComponent_div_11_div_25_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "dateCount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repo_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", repo_r6.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.watchers_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.forks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, repo_r6.created_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", repo_r6.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GithubUserDetailsComponent_div_11_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GithubUserDetailsComponent_div_11_div_25_div_2_Template, 25, 9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.repoData);
        }
      }

      function GithubUserDetailsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total Repositories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GithubUserDetailsComponent_div_11_div_25_Template, 3, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.userData == null ? null : ctx_r2.userData.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.userData == null ? null : ctx_r2.userData.login, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.userData == null ? null : ctx_r2.userData.bio, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.userData == null ? null : ctx_r2.userData.followers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.userData == null ? null : ctx_r2.userData.following);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.userData == null ? null : ctx_r2.userData.public_repos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showUserDetails);
        }
      }

      function GithubUserDetailsComponent_app_loader_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 42);
        }
      }

      var GithubUserDetailsComponent = /*#__PURE__*/function () {
        function GithubUserDetailsComponent(router, dataService) {
          _classCallCheck(this, GithubUserDetailsComponent);

          this.router = router;
          this.dataService = dataService;
          this.userName = '';
          this.isError = false;
          this.showUserDetails = false;
          this.isLoading = true;
        }

        _createClass(GithubUserDetailsComponent, [{
          key: "getUserData",
          value: function getUserData() {
            var _this = this;

            if (this.userName === '') {
              this.isLoading = false;
              this.isError = true;
              return;
            }

            this.showUserDetails = true;
            this.isLoading = true;
            this.dataService.getUserData(this.userName).then(function (data) {
              _this.isLoading = false;
              _this.isError = false;
              _this.userData = data;
            });
            this.dataService.getUserRepoData(this.userName).then(function (data) {
              _this.repoData = data;
            });
            this.userName = '';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.isLoading = true;
            this.userName = 'mugerah';
            this.userNameLink = this.router.snapshot.paramMap.get('login');
            this.dataService.getUserData(this.userNameLink).then(function (data) {
              _this2.showUserDetails = true;

              if (data.login === 'null') {
                _this2.getUserData();

                _this2.userName = '';
                _this2.isLoading = false;
                return;
              }

              _this2.userData = data;

              _this2.dataService.getUserRepoData(_this2.userNameLink).then(function (data) {
                _this2.repoData = data;
              });

              _this2.isLoading = false;
              _this2.userName = '';
            });
          }
        }]);

        return GithubUserDetailsComponent;
      }();

      GithubUserDetailsComponent.ɵfac = function GithubUserDetailsComponent_Factory(t) {
        return new (t || GithubUserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_github_data_service__WEBPACK_IMPORTED_MODULE_2__["GithubDataService"]));
      };

      GithubUserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GithubUserDetailsComponent,
        selectors: [["app-github-user-details"]],
        decls: 13,
        vars: 4,
        consts: [[1, "container"], ["id", "top"], [1, "wrapper"], [1, "mt-3"], [1, "text-center", 3, "ngSubmit"], ["searchForm", "ngForm"], [1, "input-group"], ["type", "text", "placeholder", "Search User", "name", "userName", 1, "", 3, "ngModel", "ngModelChange"], [1, "btn", "searchBtn"], ["class", "error", 4, "ngIf"], [4, "ngIf"], ["class", "mt-5", 4, "ngIf"], [1, "error"], [1, "user-details-wrapper"], [1, "user_avatar"], ["alt", "", 1, "avatar", 3, "src"], [1, "user_detail"], [1, "user_name", "text-center"], [1, "user_bio", "text-center"], [1, "user_info"], ["ngbTooltip", "Followers", "tooltipClass", "my-custom-class", 1, "info"], ["src", "../../../assets/img/followers.svg", "alt", ""], ["ngbTooltip", "Followering", "tooltipClass", "my-custom-class", 1, "info"], ["src", "../../../assets/img/following.svg", "alt", ""], [1, "user_repoData"], [1, "repoData"], ["src", "../../../assets/img/repository.svg", "alt", ""], ["class", "repo-wrapper", 4, "ngIf"], [1, "repo-wrapper"], [1, "repo_wrapper", "text-center"], ["class", "repo-container", "appHighlightHover", "", 4, "ngFor", "ngForOf"], ["appHighlightHover", "", 1, "repo-container"], [1, "repo_name"], [1, "repo_description"], [1, "repo_info"], [1, "info"], ["src", "../../../assets/img/star.svg", "alt", ""], ["src", "../../../assets/img/branch.svg", "alt", ""], ["src", "../../../assets/img/code.svg", "alt", ""], [1, "repo_date-info"], [1, "date"], [1, "btn", "searchRepoBtn", 3, "href"], [1, "mt-5"]],
        template: function GithubUserDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GithubUserDetailsComponent_Template_form_ngSubmit_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.form.valid && ctx.getUserData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GithubUserDetailsComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.userName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GithubUserDetailsComponent_span_10_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GithubUserDetailsComponent_div_11_Template, 26, 7, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GithubUserDetailsComponent_app_loader_12_Template, 1, 0, "app-loader", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUserDetails && !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _highlight_hover_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightHoverDirective"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]],
        pipes: [_date_count_pipe__WEBPACK_IMPORTED_MODULE_9__["DateCountPipe"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #ff0000 transparent;\n}\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ff0000;\n  border-radius: 20px;\n  border: transparent;\n}\n\n\nform[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 10px auto;\n}\n\n\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"email\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%]:focus, textarea[type=\"text\"][_ngcontent-%COMP%], textarea[type=\"text\"][_ngcontent-%COMP%]:focus {\n  background: transparent;\n  border: rgb(1, 1, 1);\n  border-bottom: 4px solid #ff0000;\n  color: #fff;\n  font-size: 20px;\n  outline: none;\n  padding-bottom: 10px;\n}\n\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 20px;\n}\n\n\nform[_ngcontent-%COMP%]   .searchBtn[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  color: #fff;\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n\n.user-details-wrapper[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n\n.user-details-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 200px;\n  border-radius: 50%;\n  margin: 0px 20px;\n}\n\n\n.user_detail[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  display: flex;\n  width: 250px;\n  flex-direction: column;\n}\n\n\n.user_name[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 22px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n\n.user_repoData[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n\n.user_bio[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n  color: white;\n  line-height: 19px;\n  font-size: 18px;\n}\n\n\n.user_info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.info[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  margin: 10px;\n}\n\n\n.info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n\n\n.user_repoData[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 19px;\n  align-items: center;\n}\n\n\n.user_repoData[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 23px;\n  font-weight: 600;\n  padding-bottom: 26px;\n}\n\n\n.repoData[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n  margin: 10px;\n}\n\n\n.repoData[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n}\n\n\n.error[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n\n\n\n\n.repo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n.repo_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n.repo-container[_ngcontent-%COMP%] {\n  margin: 15px 10px 15px 0px;\n  background-color: rgb(27, 27, 27);\n  border-radius: 5px;\n  padding: 15px;\n  color: #fff;\n  width: 350px;\n}\n\n\n.repo_name[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n\n.repo_description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding-bottom: 5px;\n  height: 100px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n\n.repo_info[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  display: flex;\n}\n\n\n.repo_info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n\n.repo_info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  height: 20px;\n}\n\n\n.repo_info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n\n.repo_date-info[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n.searchRepoBtn[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n\n.searchRepoBtn[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: #fff;\n}\n\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n\n@media screen and (max-width: 1090px) {\n  .user-details-wrapper[_ngcontent-%COMP%] {\n    margin: 70px 10px;\n    gap: 10px;\n  }\n\n  .repo-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-left: 20px;\n  }\n}\n\n\n@media screen and (max-width: 890px) {\n  .user-details-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 70px 10px;\n  }\n  .repo-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n\n@media screen and (max-width: 600px) {\n  .user-details-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n  }\n  form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .searchBtn[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n  .repo-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-left: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi11c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7OztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0FBRUE7Ozs7OztFQU1FLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7OztBQUVBO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFFQSxRQUFROzs7QUFDUjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7OztBQUNBO0VBQ0UsVUFBVTtBQUNaOzs7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiZ2l0aHViLXVzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4qIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICNmZjAwMDAgdHJhbnNwYXJlbnQ7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxudGV4dGFyZWFbdHlwZT1cInRleHRcIl0sXG50ZXh0YXJlYVt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHJnYigxLCAxLCAxKTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZjAwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5mb3JtIC5zZWFyY2hCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG59XG5cbi51c2VyLWRldGFpbHMtd3JhcHBlciAuYXZhdGFyIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwcHggMjBweDtcbn1cblxuLnVzZXJfZGV0YWlsIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyNTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnVzZXJfbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udXNlcl9yZXBvRGF0YSB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnVzZXJfYmlvIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udXNlcl9pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5mbyB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5pbmZvIGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5mbyBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnVzZXJfcmVwb0RhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMTlweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXJfcmVwb0RhdGEgaDQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMjZweDtcbn1cbi5yZXBvRGF0YSBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnJlcG9EYXRhIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLyogcmVwbyovXG4ucmVwby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZXBvX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJlcG8tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNXB4IDEwcHggMTVweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4ucmVwb19uYW1lIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnJlcG9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnJlcG9faW5mbyB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZXBvX2luZm8gLmluZm8ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZXBvX2luZm8gLmluZm8gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJlcG9faW5mbyAuaW5mbyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVwb19kYXRlLWluZm8ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaFJlcG9CdG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZWFyY2hSZXBvQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDkwcHgpIHtcbiAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICBtYXJnaW46IDcwcHggMTBweDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAucmVwby13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTBweCkge1xuICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDcwcHggMTBweDtcbiAgfVxuICAucmVwby13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgZm9ybSBpbnB1dCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIC5zZWFyY2hCdG4ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAucmVwby13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "CpuM":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/github-user-repo-details/github-user-repo-details.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: GithubUserRepoDetailsComponent */

    /***/
    function CpuM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GithubUserRepoDetailsComponent", function () {
        return GithubUserRepoDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_github_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/github-data.service */
      "75yQ");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _highlight_hover_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../highlight-hover.directive */
      "gJgi");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../loader/loader.component */
      "vPOg");
      /* harmony import */


      var _date_count_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../date-count.pipe */
      "Nn8z");

      function GithubUserRepoDetailsComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter repository name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GithubUserRepoDetailsComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Can not find repository name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GithubUserRepoDetailsComponent_div_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Owner:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "dateCount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var repo_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", repo_r6.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.watchers_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.forks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r6.language);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", repo_r6.owner.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", repo_r6.owner.login, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 9, repo_r6.created_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", repo_r6.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function GithubUserRepoDetailsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GithubUserRepoDetailsComponent_div_12_div_2_Template, 31, 11, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.repoData);
        }
      }

      function GithubUserRepoDetailsComponent_app_loader_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      var GithubUserRepoDetailsComponent = /*#__PURE__*/function () {
        function GithubUserRepoDetailsComponent(dataService) {
          _classCallCheck(this, GithubUserRepoDetailsComponent);

          this.dataService = dataService;
          this.searchTerm = '';
          this.isError = false;
          this.isDataError = false;
          this.isLoading = false;
        }

        _createClass(GithubUserRepoDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this3 = this;

            this.isLoading = true;
            this.isError = false;
            this.isDataError = false;

            if (this.searchTerm === '') {
              this.isLoading = false;
              this.isError = true;
              return;
            }

            this.isLoading = true;
            this.dataService.getRepoData(this.searchTerm).then(function (data) {
              _this3.isLoading = false;
              _this3.arrayData = Object.entries(data);
              var repositoryData = _this3.arrayData[2];
              var convertRepositoryData = repositoryData[Object.keys(repositoryData)[1]];

              if (convertRepositoryData.length == 0) {
                _this3.isDataError = true;
                return;
              }

              _this3.repoData = convertRepositoryData;
            });
            this.searchTerm = '';
          }
        }]);

        return GithubUserRepoDetailsComponent;
      }();

      GithubUserRepoDetailsComponent.ɵfac = function GithubUserRepoDetailsComponent_Factory(t) {
        return new (t || GithubUserRepoDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_github_data_service__WEBPACK_IMPORTED_MODULE_1__["GithubDataService"]));
      };

      GithubUserRepoDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GithubUserRepoDetailsComponent,
        selectors: [["app-github-user-repo-details"]],
        decls: 14,
        vars: 5,
        consts: [[1, "container"], [1, "main-wrapper"], [1, "mt-5"], [1, "text-center", 3, "ngSubmit"], ["searchForm", "ngForm"], [1, "input-group"], ["type", "text", "placeholder", "Search Repositories", "name", "searchTerm", 1, "", 3, "ngModel", "ngModelChange"], [1, "btn", "searchBtn"], ["class", "error", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], [4, "ngIf"], [1, "error"], [1, "wrapper"], [1, "repo_wrapper", "text-center"], ["class", "repo-container", "appHighlightHover", "", 4, "ngFor", "ngForOf"], ["appHighlightHover", "", 1, "repo-container"], [1, "repo_name"], [1, "repo_description"], [1, "repo_info"], [1, "info"], ["src", "../../../assets/img/star.svg", "alt", ""], ["src", "../../../assets/img/branch.svg", "alt", ""], ["src", "../../../assets/img/code.svg", "alt", ""], [1, "repo_owner"], [1, "user-info"], [3, "href"], [1, "repo_date-info"], [1, "date"], [1, "btn", "searchRepoBtn", 3, "href"]],
        template: function GithubUserRepoDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GithubUserRepoDetailsComponent_Template_form_ngSubmit_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.form.valid && ctx.getUserData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GithubUserRepoDetailsComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.searchTerm = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GithubUserRepoDetailsComponent_span_10_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GithubUserRepoDetailsComponent_span_11_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GithubUserRepoDetailsComponent_div_12_Template, 3, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GithubUserRepoDetailsComponent_app_loader_13_Template, 1, 0, "app-loader", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _highlight_hover_directive__WEBPACK_IMPORTED_MODULE_5__["HighlightHoverDirective"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]],
        pipes: [_date_count_pipe__WEBPACK_IMPORTED_MODULE_7__["DateCountPipe"]],
        styles: [".main-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px;\n}\n\n.top[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  color: red;\n}\n\n*[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #ff0000 transparent;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ff0000;\n  border-radius: 20px;\n  border: transparent;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.repo_wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n\n  justify-content: space-between;\n  margin-top: 80px;\n}\n\n.repo-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  background-color: rgb(27, 27, 27);\n  border-radius: 5px;\n  padding: 15px;\n  color: #fff;\n  width: 350px;\n  margin-right: 10px;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 500px;\n  margin: 10px auto;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"email\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%]:focus, textarea[type=\"text\"][_ngcontent-%COMP%], textarea[type=\"text\"][_ngcontent-%COMP%]:focus {\n  background: transparent;\n  border: rgb(1, 1, 1);\n  border-bottom: 4px solid #ff0000;\n  color: #fff;\n  font-size: 20px;\n  outline: none;\n  padding-bottom: 10px;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 20px;\n}\n\nform[_ngcontent-%COMP%]   .searchBtn[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  color: #fff;\n  padding: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.repo_name[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.repo_description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-bottom: 10px;\n  height: 100px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.repo_info[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  display: flex;\n}\n\n.repo_owner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.repo_owner[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.repo_owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-left: 5px;\n}\n\n.repo_owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 5px;\n  color: #ff0000;\n}\n\n.repo_owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #ff0000;\n}\n\n.repo_info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  height: 20px;\n}\n\n.info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.repo_date-info[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 10px 0px 5px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.searchRepoBtn[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.searchRepoBtn[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: #fff;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media screen and (max-width: 600px) {\n  form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .searchBtn[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi11c2VyLXJlcG8tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTs7RUFFZiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7O0VBTUUsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImdpdGh1Yi11c2VyLXJlcG8tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4udG9wIGF7XG4gIGNvbG9yOiByZWQ7XG59XG5cbioge1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogI2ZmMDAwMCB0cmFuc3BhcmVudDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJlcG9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5yZXBvLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxudGV4dGFyZWFbdHlwZT1cInRleHRcIl0sXG50ZXh0YXJlYVt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHJnYigxLCAxLCAxKTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZjAwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5mb3JtIC5zZWFyY2hCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucmVwb19uYW1lIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVwb19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnJlcG9faW5mbyB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZXBvX293bmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucmVwb19vd25lciBoNiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5yZXBvX293bmVyIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnJlcG9fb3duZXIgc3BhbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuLnJlcG9fb3duZXIgc3BhbiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG59XG5cbi5yZXBvX2luZm8gLmluZm8ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5pbmZvIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5pbmZvIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZXBvX2RhdGUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAxMHB4IDBweCA1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hSZXBvQnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2VhcmNoUmVwb0J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBmb3JtIGlucHV0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLnNlYXJjaEJ0biB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "F33o":
    /*!*************************************************************!*\
      !*** ./src/app/components/not-found/not-found.component.ts ***!
      \*************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function F33o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 17,
        vars: 0,
        consts: [[1, "container", "wrapper"], [1, "error-wrapper"], [1, "intro"], [1, "text-center"], [1, "title"], [1, "logo"], ["src", "../../../assets/img/logov.svg", "alt", "logo"], ["href", "", "routerLink", "/home"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Huston! we have a problem, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " this one broke the internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " again ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The page you requested cant be found,navigate back to homepage by clicking ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 160px;\n}\n\n.error-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 50px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.intro[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: white;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 50px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: white;\n  font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTYwcHg7XG59XG5cbi5lcnJvci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLndyYXBwZXIgLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmludHJvIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggNTBweDtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Nn8z":
    /*!************************************!*\
      !*** ./src/app/date-count.pipe.ts ***!
      \************************************/

    /*! exports provided: DateCountPipe */

    /***/
    function Nn8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateCountPipe", function () {
        return DateCountPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DateCountPipe = /*#__PURE__*/function () {
        function DateCountPipe() {
          _classCallCheck(this, DateCountPipe);
        }

        _createClass(DateCountPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value) {
              var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
              if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
              var intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
              };
              var counter;

              for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) if (counter === 1) {
                  return counter + ' ' + i + ' old'; // singular (1 day ago)
                } else {
                  return counter + ' ' + i + 's old'; // plural (2 days ago)
                }
              }
            }

            return value;
          }
        }]);

        return DateCountPipe;
      }();

      DateCountPipe.ɵfac = function DateCountPipe_Factory(t) {
        return new (t || DateCountPipe)();
      };

      DateCountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dateCount",
        type: DateCountPipe,
        pure: true
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'github-search';
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/not-found/not-found.component */
      "F33o");
      /* harmony import */


      var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/home-page/home-page.component */
      "atC9");
      /* harmony import */


      var _components_github_user_details_github_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/github-user-details/github-user-details.component */
      "BkP4");
      /* harmony import */


      var _components_github_user_repo_details_github_user_repo_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/github-user-repo-details/github-user-repo-details.component */
      "CpuM");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _date_count_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./date-count.pipe */
      "Nn8z");
      /* harmony import */


      var _highlight_hover_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./highlight-hover.directive */
      "gJgi");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/loader/loader.component */
      "vPOg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], _components_github_user_details_github_user_details_component__WEBPACK_IMPORTED_MODULE_7__["GithubUserDetailsComponent"], _components_github_user_repo_details_github_user_repo_details_component__WEBPACK_IMPORTED_MODULE_8__["GithubUserRepoDetailsComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _date_count_pipe__WEBPACK_IMPORTED_MODULE_11__["DateCountPipe"], _highlight_hover_directive__WEBPACK_IMPORTED_MODULE_12__["HighlightHoverDirective"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "atC9":
    /*!*************************************************************!*\
      !*** ./src/app/components/home-page/home-page.component.ts ***!
      \*************************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function atC9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_github_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/github-data.service */
      "75yQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../loader/loader.component */
      "vPOg");

      function HomePageComponent_form_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter user name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomePageComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomePageComponent_form_3_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r2.form.valid && ctx_r4.getUserData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomePageComponent_form_3_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.searchTerm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_form_3_span_3_Template, 2, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isError);
        }
      }

      function HomePageComponent_app_loader_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent(dataService, router) {
          _classCallCheck(this, HomePageComponent);

          this.dataService = dataService;
          this.router = router;
          this.searchTerm = '';
          this.isLoading = false;
          this.isError = false;
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this4 = this;

            if (this.searchTerm === '') {
              this.isError = true;
              return;
            }

            this.isError = false;
            this.isLoading = true;
            this.dataService.getUserData(this.searchTerm).then(function (data) {
              _this4.userData = data;

              _this4.router.navigate(['/searchUser', _this4.userData.login]);
            });
          }
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_github_data_service__WEBPACK_IMPORTED_MODULE_1__["GithubDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        decls: 5,
        vars: 2,
        consts: [[1, "container-fluid", "wrapper"], [1, "logo"], ["src", "../../../assets/img/logov.svg", "alt", "logo"], [3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit"], ["searchForm", "ngForm"], ["type", "text", "placeholder", "Enter user name", "name", "searchTerm", 1, "searchInput", 3, "ngModel", "ngModelChange"], ["class", "error text-center", 4, "ngIf"], [1, "btn", "searchBtn"], [1, "error", "text-center"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_form_3_Template, 6, 2, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomePageComponent_app_loader_4_Template, 1, 0, "app-loader", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 200px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\ninput[type=\"text\"][_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%]:focus, input[type=\"email\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%]:focus, textarea[type=\"text\"][_ngcontent-%COMP%], textarea[type=\"text\"][_ngcontent-%COMP%]:focus {\n  background: transparent;\n  border: rgb(1, 1, 1);\n  border-bottom: 4px solid #ff0000;\n  color: #fff;\n  font-size: 20px;\n  outline: none;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 40px;\n  width: 350px;\n}\n\n.searchBtn[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 18px;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 700;\n  background-color: #ff0000;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n}\n\nform[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  font-size: 24px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7O0VBTUUsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuXG4ud3JhcHBlciAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxudGV4dGFyZWFbdHlwZT1cInRleHRcIl0sXG50ZXh0YXJlYVt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHJnYigxLCAxLCAxKTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZjAwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDQwcHg7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLnNlYXJjaEJ0biB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5mb3JtIC5zZWFyY2hJbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "gJgi":
    /*!**********************************************!*\
      !*** ./src/app/highlight-hover.directive.ts ***!
      \**********************************************/

    /*! exports provided: HighlightHoverDirective */

    /***/
    function gJgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightHoverDirective", function () {
        return HighlightHoverDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HighlightHoverDirective = /*#__PURE__*/function () {
        function HighlightHoverDirective(el) {
          _classCallCheck(this, HighlightHoverDirective);

          this.el = el;
        }

        _createClass(HighlightHoverDirective, [{
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.highlight('black');
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.highlight(null);
          }
        }, {
          key: "highlight",
          value: function highlight(color) {
            this.el.nativeElement.style.backgroundColor = color;
          }
        }]);

        return HighlightHoverDirective;
      }();

      HighlightHoverDirective.ɵfac = function HighlightHoverDirective_Factory(t) {
        return new (t || HighlightHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      HighlightHoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HighlightHoverDirective,
        selectors: [["", "appHighlightHover", ""]],
        hostBindings: function HighlightHoverDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightHoverDirective_mouseenter_HostBindingHandler() {
              return ctx.onMouseEnter();
            })("mouseleave", function HighlightHoverDirective_mouseleave_HostBindingHandler() {
              return ctx.onMouseLeave();
            });
          }
        }
      });
      /***/
    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 12,
        vars: 0,
        consts: [[1, "nav", "mt-3"], ["routerLink", "/home", 1, "navbar-brand"], ["src", "../../../assets/img/logoh.svg", "alt", ""], [1, "navbar-links", "ml-auto"], ["aria-current", "page", "href", "#", "routerLink", "/home", 1, "nav-link", "active"], ["aria-current", "page", "href", "#", "routerLink", "/searchUser", 1, "nav-link", "active"], ["aria-current", "page", "href", "#", "routerLink", "/searchUserRepositories", 1, "nav-link", "active"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search Users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search Repositories ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["nav[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-size: 20px;\n}\n\nhr[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  border-right: 2px solid red;\n}\n\n.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uYXZiYXItYnJhbmQgaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubmF2YmFyLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmJhci1saW5rcyBhIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaHIge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmVkO1xufVxuLm5hdmJhci1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "vPOg":
    /*!*******************************************************!*\
      !*** ./src/app/components/loader/loader.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function vPOg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container"], [1, "loader"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: center;\n}\n\n.loader[_ngcontent-%COMP%] {\n  border: 6px solid #ff0000;\n  border-top: 6px solid rgb(51,51,51);\n\n  border-radius: 50%;\n  margin: 30px;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUNBQW1DOztFQUVuQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQWtDO1VBQWxDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmMDAwMDtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHJnYig1MSw1MSw1MSk7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/not-found/not-found.component */
      "F33o");
      /* harmony import */


      var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home-page/home-page.component */
      "atC9");
      /* harmony import */


      var _components_github_user_details_github_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/github-user-details/github-user-details.component */
      "BkP4");
      /* harmony import */


      var _components_github_user_repo_details_github_user_repo_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/github-user-repo-details/github-user-repo-details.component */
      "CpuM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }, {
        path: 'home',
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
      }, {
        path: 'searchUser/:login',
        component: _components_github_user_details_github_user_details_component__WEBPACK_IMPORTED_MODULE_3__["GithubUserDetailsComponent"]
      }, {
        path: 'searchUser',
        component: _components_github_user_details_github_user_details_component__WEBPACK_IMPORTED_MODULE_3__["GithubUserDetailsComponent"]
      }, {
        path: 'searchUserRepositories',
        component: _components_github_user_repo_details_github_user_repo_details_component__WEBPACK_IMPORTED_MODULE_4__["GithubUserRepoDetailsComponent"]
      }, {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map