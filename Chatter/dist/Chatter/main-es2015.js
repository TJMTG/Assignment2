(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">Chatter</a>    \n  <div *ngIf=\"!loginService.isLoggedIn\">\n    <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n  </div>\n  <div *ngIf=\"loginService.isLoggedIn\">\n    <a class=\"nav-link\" routerLink=\"/login\" (click)=\"logoutClicked()\">Logout</a>\n  </div>\n  <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n  <a class=\"nav-link\" routerLink=\"/controls\">Controls</a>\n  <a class=\"nav-link\" routerLink=\"/chat\">Chat</a> \n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/channelCreate/channelCreate.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/channelCreate/channelCreate.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>channel-create works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/channelUpdate/channelUpdate.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/channelUpdate/channelUpdate.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>channel-update works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>chat works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/controls.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/controls/controls.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- List Users (retrieve, update and delete) -->\n<div class=\"card box\" id=\"userList\" *ngIf=\"loggedInRole == 'superAdmin' || loggedInRole == 'groupAdmin'\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Users</h4>\n      <table class=\"table\">\n        <tr>\n          <th>Username</th>\n          <th>Role</th>\n          <th></th>\n          <th *ngIf=\"loggedInRole == 'superAdmin'\"></th>\n        </tr>\n        <tr style=\"padding-top:20px;\" *ngFor=\"let user of userList\"> \n          <td>{{user.username}}</td> \n          <td>{{user.role}}</td>  \n          <td>\n            <button *ngIf=\"user.role != 'superAdmin' && user.role != 'groupAdmin'\" class=\"btn btn-primary\" [routerLink]=\"['/userUpdate', user._id]\">Edit</button>\n          </td>\n          <td *ngIf=\"loggedInRole == 'superAdmin'\">\n            <button class=\"btn btn-danger\" (click)=\"deleteUserClicked(user.username)\">Delete</button>\n          </td>\n        </tr>\n        <!-- In the event of 'no users' -->\n        <tr *ngIf=\"userList.length == 0\">\n          <td colspan=\"4\" style=\"text-align: center;\">\n            There are no users in the database.\n          </td>\n        </tr>\n    </table>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [routerLink]=\"['/userCreate']\">Create New User</button>\n    </div>\n  </div>\n</div>\n\n<!-- List Groups (retrieve, update and delete) -->\n<div class=\"card box\" id=\"groupList\" *ngIf=\"loggedInRole == 'superAdmin' || loggedInRole == 'groupAdmin'\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Groups</h4>\n      <table class=\"table\">\n        <tr>\n          <th>Name</th>\n          <th>Channels</th>\n          <th>Users</th>\n          <th></th>\n          <th></th>\n        </tr>\n        <tr style=\"padding-top:20px;\" *ngFor=\"let group of groupList\"> \n          <td>{{group.name}}</td>\n          <td>{{group.channels.length}}</td>\n          <td>{{group.users.length}}</td>  \n          <td>\n            <button class=\"btn btn-primary\" [routerLink]=\"['/groupUpdate', group.name]\">Edit</button>\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteGroupClicked(group.name)\">Delete</button>\n          </td>\n        </tr>\n        <!-- In the event of 'no groups' -->\n        <tr *ngIf=\"groupList.length == 0\">\n          <td colspan=\"4\" style=\"text-align: center;\">\n            There are no groups in the database.\n          </td>\n        </tr>\n    </table>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [routerLink]=\"['/groupCreate']\">Create New Group</button>\n    </div>\n  </div>\n</div>\n<!-- /List Groups (retrieve, update and delete) -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupCreate/groupCreate.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groupCreate/groupCreate.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userRole == 'superAdmin' || userRole == 'groupAdmin'\" class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Create Group</h4>\n    <hr>\n    <p class=\"text-success text-center\" id=\"successFeedback\">\n      Group '{{successMessage}}' successfully created.\n    </p>\n    <div id=\"failFeedback\">\n        <div *ngFor=\"let failMessage of failMessages\">\n          <p class=\"text-danger text-center\">{{failMessage}}</p>\n        </div>\n      </div>\n    <hr id=\"feedbackBar\">\n    <form>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            class=\"form-control\" type=\"text\" placeholder=\"Name\"\n            id=\"groupFormName\" [(ngModel)]=\"groupFormName\" name=\"groupFormName\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"createGroupClicked()\">Create</button>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupUpdate/groupUpdate.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groupUpdate/groupUpdate.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Update Group -->\n<div *ngIf=\"userRole == 'superAdmin' || userRole == 'groupAdmin'\" class=\"card box\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Update Group</h4>\n    <hr>\n    <p class=\"text-success text-center\" id=\"successFeedback\">\n      Group '{{successMessage}}' successfully updated.\n    </p>\n    <div id=\"failFeedback\">\n        <div *ngFor=\"let failMessage of failMessages\">\n          <p class=\"text-danger text-center\">{{failMessage}}</p>\n        </div>\n      </div>\n    <hr id=\"feedbackBar\">\n    <form>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            class=\"form-control\" type=\"text\" placeholder=\"Name\"\n            id=\"formName\" [(ngModel)]=\"formName\" name=\"formName\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"updateGroupClicked()\">Update</button>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- /Update Group -->\n\n<!-- List Users (retrieve, update and delete) -->\n<div class=\"card box\" *ngIf=\"userRole == 'superAdmin' || userRole == 'groupAdmin'\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Users</h4>\n      <table class=\"table\">\n        <tr>\n          <th>Name</th>\n          <th></th>\n        </tr>\n        <tr style=\"padding-top:20px;\" *ngFor=\"let user of userList\"> \n          <td>{{user}}</td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteUserClicked(user)\">Delete</button>\n          </td>\n        </tr>\n        <!-- In the event of 'no groups' -->\n        <tr *ngIf=\"userList === undefined\">\n          <td colspan=\"4\" style=\"text-align: center;\">\n            There are no users in this group.\n          </td>\n        </tr>\n    </table>\n    <div class=\"form-group\">\n      <form>\n        <select class=\"left\">  \n          <option *ngFor=\"let user of globalUsers\" value=\"{{user.username}}\">{{user.username}}</option>  \n        </select>\n        <button type=\"submit\" class=\"btn btn-primary btn-block right\" (click)=\"addUserClicked(user.name)\">Add User To Group</button>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- /List Users (retrieve, update and delete) -->\n\n<!-- List Assistants (retrieve, update and delete) -->\n<div class=\"card box\" *ngIf=\"userRole == 'superAdmin' || userRole == 'groupAdmin'\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Assistants</h4>\n      <table class=\"table\">\n        <tr>\n          <th>Name</th>\n          <th></th>\n        </tr>\n        <tr style=\"padding-top:20px;\" *ngFor=\"let user of assistantList\"> \n          <td>{{user}}</td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteAssistantClicked(user)\">Delete</button>\n          </td>\n        </tr>\n        <!-- In the event of 'no groups' -->\n        <tr *ngIf=\"userList === undefined\">\n          <td colspan=\"4\" style=\"text-align: center;\">\n            There are no users in this group.\n          </td>\n        </tr>\n    </table>\n    <div class=\"form-group\">\n      <form>\n        <select class=\"left\">  \n          <option *ngFor=\"let user of globalUsers\" value=\"{{user.username}}\">{{user.username}}</option>  \n        </select>\n        <button type=\"submit\" class=\"btn btn-primary btn-block right\" (click)=\"addAssistantClicked(user)\">Make Assistant</button>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- /List Assistants (retrieve, update and delete) -->\n\n<!-- List Channels (retrieve, update and delete) -->\n<div class=\"card box\" *ngIf=\"userRole == 'superAdmin' || userRole == 'groupAdmin'\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Channels</h4>\n      <table class=\"table\">\n        <tr>\n          <th>Name</th>\n          <th>Users</th>\n          <th></th>\n          <th></th>\n        </tr>\n        <tr style=\"padding-top:20px;\" *ngFor=\"let channel of channelList\"> \n          <td>{{channel.name}}</td>\n          <td>{{channel.users.length}}</td>  \n          <td>\n            <button class=\"btn btn-primary\" [routerLink]=\"['/channelUpdate', channel.name]\">Edit</button>\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteChannelClicked(channel.name)\">Delete</button>\n          </td>\n        </tr>\n        <!-- In the event of 'no groups' -->\n        <tr *ngIf=\"channelList === undefined\">\n          <td colspan=\"4\" style=\"text-align: center;\">\n            There are no channels in this group.\n          </td>\n        </tr>\n    </table>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" [routerLink]=\"['/groupCreate']\">Create New Channel</button>\n    </div>\n  </div>\n</div>\n<!-- /List Channels (retrieve, update and delete) -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Login/Logout Card -->\n    <div class=\"card box\">\n        <div class=\"card-body\">\n            <!-- Title -->\n                <h4 *ngIf=\"!loginService.isLoggedIn\" class=\"card-title text-center mb-4 mt-1\">Login</h4>\n                <h4 *ngIf=\"loginService.isLoggedIn\" class=\"card-title text-center mb-4 mt-1\">Logout</h4>\n            <!-- /Title -->\n            <hr>\n            <!-- Login Form Feedback -->\n                <div id=\"successFeedback\">\n                    <div *ngFor=\"let successMessage of successMessages\">\n                        <p class=\"text-success text-center\">{{successMessage}}</p>\n                    </div>\n                </div>\n                <div id=\"failFeedback\">\n                    <div *ngFor=\"let failMessage of failMessages\">\n                        <p class=\"text-danger text-center\">{{failMessage}}</p>\n                    </div>\n                </div>\n                <hr id=\"feedbackBar\">\n            <!-- /Login Form Feedback -->\n            <!-- Form -->\n                <form>\n                    <!-- Login Form -->\n                        <div *ngIf=\"!loginService.isLoggedIn\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <input\n                                        id=\"formUsername\" class=\"form-control\" placeholder=\"Username\"\n                                        type=\"text\" [(ngModel)]=\"formUsername\" name=\"formUsername\"\n                                    >\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <input \n                                        id=\"formPassword\" class=\"form-control\" placeholder=\"Password\"\n                                        type=\"password\" [(ngModel)]=\"formPassword\" name=\"loginFormPassword\"\n                                    >\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button (click)=\"loginClicked()\" type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n                            </div>\n                        </div>\n                    <!-- /Login Form -->\n                    <!-- Logout Form -->\n                        <div *ngIf=\"loginService.isLoggedIn\" class=\"form-group\">\n                            <button (click)=\"logoutClicked()\" type=\"submit\" class=\"btn btn-primary btn-block\">Logout</button>\n                        </div>\n                    <!-- Logout Form -->\n                </form>\n            <!-- /Form -->\n        </div>\n    </div>\n<!-- Login/Logout Card -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Profile Info -->\n<div class=\"card box\">\n  <img *ngIf=\"loggedInUser.image.length == 0\" src=\"\" class=\"card-img-top\" id=\"profileGray\">\n  <img *ngIf=\"loggedInUser.image.length != 0\" src=\"example_image_one.jpeg\" class=\"card-img-top\" id=\"profilePicture\">\n  <h1 id=\"profileTitle\">Your Profile</h1>\n  <div class=\"card-body\">\n    <form id=\"profilePicForm\">\n      <button [routerLink]=\"['/userUpdate', loggedInMongoID]\" id=\"editButton\" class=\"btn btn-primary btn-block\" type=\"submit\">Edit Profile</button>\n    </form>\n    <h5 class=\"card-title\">{{loggedInUsername}}</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{loggedInRole}}</h6>\n    <p>Generic profile information goes here. But apparently this is interesting enough, becuase there you are, reading this.</p>\n  </div>\n</div>\n<!-- /Profile Info -->\n\n<!-- Group & Channel List -->\n<div class=\"card box\" id=\"groupList\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Your Groups</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted text-center\" id=\"groupSubtitle\">& Channels</h6>\n    <div class=\"just-padding\">\n      <div class=\"list-group list-group-root well\">\n        <!--groups-->\n        <div *ngFor=\"let group of groupList\">\n          <a class=\"list-group-item\" (click)=\"toggleCollapse(group.name)\">\n            <i class=\"fa-angle-right fas\" id=\"icon_{{group.name}}\"></i>{{group.name}}\n          </a>\n          <!--channels-->\n          <div class=\"list-group collapse\" id=\"list_{{group.name}}\">\n            <div *ngIf=\"!group.channels.length\">\n              <a class=\"list-group-item text-center text-secondary\">You are not in any channels in this group.</a>\n            </div>\n            <div *ngIf=\"group.channels.length\">\n              <div *ngFor=\"let channel of group.channels\">\n                <a class=\"list-group-item channelItem text-secondary\">{{channel.name}}</a>\n              </div>\n            </div>\n          </div>\n          <!--/channels-->\n        </div>\n        <!--/groups-->\n        <!--no groups-->\n        <div *ngIf=\"!groupList.length\">\n          <a class=\"list-group-item text-center\">You are not in any groups.</a>\n        </div>\n        <!--/no groups-->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Group & Channel List -->\n\n<!-- Privileges -->\n<div class=\"card box\" id=\"roleList\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">'{{loggedInRole}}' Privileges</h4>\n    <div class=\"just-padding\">\n      <div class=\"list-group list-group-root well\">\n        <!-- superAdmin -->\n        <div *ngIf=\"loggedInRole == 'superAdmin'\">\n          <a class=\"list-group-item\">See all users, groups and channels.</a>\n          <a class=\"list-group-item\">Create users, groups and channels.</a>\n          <a class=\"list-group-item\">Delete users, groups and channels.</a>\n          <a class=\"list-group-item\">Add users to groups and channels.</a>\n          <a class=\"list-group-item\">Remove users from groups and channels.</a>\n          <a class=\"list-group-item\">Change the role of any user to any user.</a>\n        </div>\n        <!-- /superAdmin -->\n        <!-- groupAdmin -->\n        <div *ngIf=\"loggedInRole == 'groupAdmin'\">\n          <a class=\"list-group-item\">See all users, groups and channels.</a>\n          <a class=\"list-group-item\">Create users, groups and channels.</a>\n          <a class=\"list-group-item\">Delete groups and channels.</a>\n          <a class=\"list-group-item\">Add users to groups and channels.</a>\n          <a class=\"list-group-item\">Remove users from groups and channels.</a>\n          <a class=\"list-group-item\">Promote a user from 'regularUser' to 'groupAssistant'.</a>\n        </div>\n        <!-- /groupAdmin -->\n        <!-- groupAssistant -->\n        <div *ngIf=\"loggedInRole == 'groupAssistant'\">\n          <a class=\"list-group-item\">Within groups user is a group assistant of:</a>\n          <div class=\"list-group\">\n            <a class=\"list-group-item secondaryItem\">Add or remove users from channels.</a>\n            <a class=\"list-group-item secondaryItem\">Create a channel.</a>\n          </div>\n        </div>\n        <!-- /groupAssistant -->\n        <!-- regularUser -->\n        <div *ngIf=\"loggedInRole == 'regularUser'\">\n          <a class=\"list-group-item\">You have no special privileges.</a>\n        </div>\n        <!-- /regularUser -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Privileges -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userCreate/userCreate.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userCreate/userCreate.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Create User -->\n<div *ngIf=\"userRole == 'superAdmin' || userRole == 'groupAdmin'\" class=\"card box\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Create User</h4>\n    <hr>\n    <p class=\"text-success text-center\" id=\"userSuccessFeedback\">\n      User '{{userSuccessMessage}}' successfully created.\n    </p>\n    <div id=\"userFailFeedback\">\n      <div *ngFor=\"let failMessage of userFailMessages\">\n        <p class=\"text-danger text-center\">{{failMessage}}</p>\n      </div>\n    </div>\n    <hr id=\"feedbackBar\">\n    <form>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            class=\"form-control\" type=\"text\" placeholder=\"Username\"\n            id=\"userFormUsername\" [(ngModel)]=\"userFormUsername\" name=\"userFormUsername\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            class=\"form-control\" type=\"text\" placeholder=\"Password\"\n            id=\"userFormPassword\" [(ngModel)]=\"userFormPassword\" name=\"userFormPassword\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"select-group\">\n          <span *ngIf=\"userRole == 'superAdmin'\">\n            <select class=\"form-control\" [(ngModel)]=\"userFormRole\" name=\"userFormRole\" placeholder=\"Role\">\n              <option value=\"\" disabled selected>Role</option>\n              <option value=\"superAdmin\">superAdmin</option>\n              <option value=\"groupAdmin\">groupAdmin</option>\n              <option value=\"groupAssistant\">groupAssistant</option>\n              <option value=\"regularUser\">regularUser</option>\n            </select>\n          </span>\n          <span *ngIf=\"userRole == 'groupAdmin'\">\n            <select class=\"form-control\" [(ngModel)]=\"userFormRole\" name=\"userFormRole\">\n              <option value=\"\" disabled selected>Role</option>\n              <option value=\"groupAssistant\">groupAssistant</option>\n              <option value=\"regularUser\">regularUser</option>\n            </select>\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"createUserClicked()\">Create</button>\n      </div>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userUpdate/userUpdate.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userUpdate/userUpdate.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Update User -->\n<div class=\"card box\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title text-center mb-4 mt-1\">Update User</h4>\n    <!-- Login Form Feedback -->\n      <hr>\n      <p id=\"successFeedback\" class=\"text-success text-center\">{{successMessage}}</p>\n      <div id=\"failFeedback\">\n          <div *ngFor=\"let failMessage of failMessages\">\n              <p class=\"text-danger text-center\">{{failMessage}}</p>\n          </div>\n      </div>\n      <hr id=\"feedbackBar\">\n    <!-- /Login Form Feedback -->\n    <form>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input (change)=\"fileSelectedChanged($event)\" id=\"formImage\" name=\"formImage\" type=\"file\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            id=\"formUsername\" class=\"form-control\" placeholder=\"Username\"\n            type=\"text\" [(ngModel)]=\"formUsername\" name=\"formUsername\"\n          >\n        </div>\n      </div>\n      <div *ngIf=\"loggedInRole == 'superAdmin' || loggedInUsername == user.username\" class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            id=\"formPassword\" class=\"form-control\" placeholder=\"Password\"\n            type=\"text\" [(ngModel)]=\"formPassword\" name=\"formPassword\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"select-group\">\n          <select *ngIf=\"loggedInRole == 'superAdmin'\" id=\"formRole\" class=\"form-control\" [(ngModel)]=\"formRole\" name=\"formRole\" placeholder=\"Role\">\n            <option value=\"{{user.role}}\" selected>{{user.role}}</option>\n            <option *ngIf=\"user.role != 'superAdmin'\" value=\"superAdmin\">superAdmin</option>\n            <option *ngIf=\"user.role != 'groupAdmin'\" value=\"groupAdmin\">groupAdmin</option>\n            <option *ngIf=\"user.role != 'groupAssistant'\" value=\"groupAssistant\">groupAssistant</option>\n            <option *ngIf=\"user.role != 'regularUser'\" value=\"regularUser\">regularUser</option>\n          </select>\n          <select *ngIf=\"loggedInRole == 'groupAdmin'\" id=\"formRole\" class=\"form-control\" [(ngModel)]=\"formRole\" name=\"formRole\" placeholder=\"Role\">\n            <option value=\"{{user.role}}\" selected>{{user.role}}</option>\n            <option *ngIf=\"user.role != 'groupAssistant'\" value=\"groupAssistant\">groupAssistant</option>\n            <option *ngIf=\"user.role != 'regularUser'\" value=\"regularUser\">regularUser</option>\n          </select>\n          <span *ngIf=\"loggedInRole == 'groupAssistant' || loggedInRole == 'regularUser'\">\n              <input readonly value=\"{{oldRole}}\" placeholder=\"{{oldRole}}\" [(ngModel)]=\"formRole\" name=\"formRole\">\n          </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"updateUserClicked()\" type=\"submit\" class=\"btn btn-primary btn-block\">Update</button>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- /Update User -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/controls/controls.component.ts");
/* harmony import */ var _userCreate_userCreate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userCreate/userCreate.component */ "./src/app/userCreate/userCreate.component.ts");
/* harmony import */ var _userUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userUpdate/userUpdate.component */ "./src/app/userUpdate/userUpdate.component.ts");
/* harmony import */ var _groupCreate_groupCreate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groupCreate/groupCreate.component */ "./src/app/groupCreate/groupCreate.component.ts");
/* harmony import */ var _groupUpdate_groupUpdate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./groupUpdate/groupUpdate.component */ "./src/app/groupUpdate/groupUpdate.component.ts");
/* harmony import */ var _channelCreate_channelCreate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./channelCreate/channelCreate.component */ "./src/app/channelCreate/channelCreate.component.ts");
/* harmony import */ var _channelUpdate_channelUpdate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./channelUpdate/channelUpdate.component */ "./src/app/channelUpdate/channelUpdate.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");



// for 'const routes: Route = []










//
const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'controls', component: _controls_controls_component__WEBPACK_IMPORTED_MODULE_5__["ControlsComponent"] },
    { path: 'userCreate', component: _userCreate_userCreate_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"] },
    //{path: 'userUpdate/:username', component: UserUpdateComponent},
    { path: 'userUpdate/:mongoID', component: _userUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_7__["UserUpdateComponent"] },
    { path: 'groupCreate', component: _groupCreate_groupCreate_component__WEBPACK_IMPORTED_MODULE_8__["GroupCreateComponent"] },
    //{path: 'groupUpdate/:mongoID/:groupname', component: GroupUpdateComponent},
    { path: 'groupUpdate/:groupname', component: _groupUpdate_groupUpdate_component__WEBPACK_IMPORTED_MODULE_9__["GroupUpdateComponent"] },
    { path: 'channelCreate', component: _channelCreate_channelCreate_component__WEBPACK_IMPORTED_MODULE_10__["ChannelCreateComponent"] },
    { path: 'channelUpdate/:channelname', component: _channelUpdate_channelUpdate_component__WEBPACK_IMPORTED_MODULE_11__["ChannelUpdateComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nnav {\n    margin-bottom: 2.25rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm5hdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");



let AppComponent = class AppComponent {
    constructor(loginService, tag) {
        this.loginService = loginService;
        this.tag = tag;
        this.title = 'Chatter';
    }
    ngOnInit() {
    }
    logoutClicked() {
        console.log("Logout Clicked.");
        sessionStorage.clear();
        this.loginService.isLoggedIn = false;
        console.log("Logged out.");
    }
};
AppComponent.ctorParameters = () => [
    { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/controls/controls.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _userCreate_userCreate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userCreate/userCreate.component */ "./src/app/userCreate/userCreate.component.ts");
/* harmony import */ var _userUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userUpdate/userUpdate.component */ "./src/app/userUpdate/userUpdate.component.ts");
/* harmony import */ var _groupCreate_groupCreate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./groupCreate/groupCreate.component */ "./src/app/groupCreate/groupCreate.component.ts");
/* harmony import */ var _groupUpdate_groupUpdate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./groupUpdate/groupUpdate.component */ "./src/app/groupUpdate/groupUpdate.component.ts");
/* harmony import */ var _channelCreate_channelCreate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./channelCreate/channelCreate.component */ "./src/app/channelCreate/channelCreate.component.ts");
/* harmony import */ var _channelUpdate_channelUpdate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./channelUpdate/channelUpdate.component */ "./src/app/channelUpdate/channelUpdate.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _controls_controls_component__WEBPACK_IMPORTED_MODULE_6__["ControlsComponent"],
            _userCreate_userCreate_component__WEBPACK_IMPORTED_MODULE_8__["UserCreateComponent"],
            _userUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_9__["UserUpdateComponent"],
            _groupCreate_groupCreate_component__WEBPACK_IMPORTED_MODULE_10__["GroupCreateComponent"],
            _groupUpdate_groupUpdate_component__WEBPACK_IMPORTED_MODULE_11__["GroupUpdateComponent"],
            _channelCreate_channelCreate_component__WEBPACK_IMPORTED_MODULE_12__["ChannelCreateComponent"],
            _channelUpdate_channelUpdate_component__WEBPACK_IMPORTED_MODULE_13__["ChannelUpdateComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__["MDBBootstrapModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/channelCreate/channelCreate.component.scss":
/*!************************************************************!*\
  !*** ./src/app/channelCreate/channelCreate.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxDcmVhdGUvY2hhbm5lbENyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/channelCreate/channelCreate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/channelCreate/channelCreate.component.ts ***!
  \**********************************************************/
/*! exports provided: ChannelCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelCreateComponent", function() { return ChannelCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChannelCreateComponent = class ChannelCreateComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChannelCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-channel-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./channelCreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/channelCreate/channelCreate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./channelCreate.component.scss */ "./src/app/channelCreate/channelCreate.component.scss")).default]
    })
], ChannelCreateComponent);



/***/ }),

/***/ "./src/app/channelUpdate/channelUpdate.component.scss":
/*!************************************************************!*\
  !*** ./src/app/channelUpdate/channelUpdate.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxVcGRhdGUvY2hhbm5lbFVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/channelUpdate/channelUpdate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/channelUpdate/channelUpdate.component.ts ***!
  \**********************************************************/
/*! exports provided: ChannelUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelUpdateComponent", function() { return ChannelUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChannelUpdateComponent = class ChannelUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChannelUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-channel-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./channelUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/channelUpdate/channelUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./channelUpdate.component.scss */ "./src/app/channelUpdate/channelUpdate.component.scss")).default]
    })
], ChannelUpdateComponent);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ChatComponent = class ChatComponent {
    constructor(router, tag) {
        this.router = router;
        this.tag = tag;
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/classes/group/group.ts":
/*!****************************************!*\
  !*** ./src/app/classes/group/group.ts ***!
  \****************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Group {
    constructor(mongoID, name, channels, assistedBy, users) {
        this.mongoID = mongoID;
        this.name = name;
        this.channels = channels;
        this.assistedBy = assistedBy;
        this.users = users;
    }
}


/***/ }),

/***/ "./src/app/controls/controls.component.css":
/*!*************************************************!*\
  !*** ./src/app/controls/controls.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.card{\n    margin-bottom: 2.25em;\n}\n\n.box{\n    max-width: 1000px;\n    min-width: 460px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.secondaryItem {\n    padding-left: 50px;\n}\n\n#groupSuccessFeedback{\n    display: none;\n}\n\n#groupFailFeedback{\n    display: none;\n}\n\n.just-padding {\n    padding: 15px;\n}\n\n.list-group.list-group-root {\n    padding: 0;\n    overflow: hidden;\n}\n\n.list-group.list-group-root .list-group {\n    margin-bottom: 0;\n}\n\n.list-group.list-group-root .list-group-item {\n    border-radius: 0;\n    border-width: 1px 0 0 0;\n}\n\n.list-group.list-group-root > .list-group-item:first-child {\n    border-top-width: 0;\n}\n\n.list-group.list-group-root > .list-group > .list-group-item {\n    padding-left: 30px;\n}\n\n.list-group.list-group-root > .list-group > .list-group > .list-group-item {\n    padding-left: 45px;\n}\n\n.list-group-item .glyphicon {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJke1xuICAgIG1hcmdpbi1ib3R0b206IDIuMjVlbTtcbn1cblxuLmJveHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNlY29uZGFyeUl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuI2dyb3VwU3VjY2Vzc0ZlZWRiYWNre1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNncm91cEZhaWxGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uanVzdC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubGlzdC1ncm91cC5saXN0LWdyb3VwLXJvb3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1yb290IC5saXN0LWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGlzdC1ncm91cC5saXN0LWdyb3VwLXJvb3QgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcbn1cblxuLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1yb290ID4gLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbn1cblxuLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1yb290ID4gLmxpc3QtZ3JvdXAgPiAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtcm9vdCA+IC5saXN0LWdyb3VwID4gLmxpc3QtZ3JvdXAgPiAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0gLmdseXBoaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/controls/controls.component.ts":
/*!************************************************!*\
  !*** ./src/app/controls/controls.component.ts ***!
  \************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/data.service */ "./src/app/services/user/data.service.ts");
/* harmony import */ var _services_group_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/group/data.service */ "./src/app/services/group/data.service.ts");







const HttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json" })
};
const backendURL = "http://localhost:3000";
let ControlsComponent = class ControlsComponent {
    constructor(router, HttpClient, tag, SocketsService, UserDataService, GroupDataService) {
        this.router = router;
        this.HttpClient = HttpClient;
        this.tag = tag;
        this.SocketsService = SocketsService;
        this.UserDataService = UserDataService;
        this.GroupDataService = GroupDataService;
        this.loggedInUsername = JSON.parse(sessionStorage.getItem("username"));
        this.loggedInRole = JSON.parse(sessionStorage.getItem("role"));
        this.userList = [];
        this.groupList = [];
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
        else {
            if (JSON.parse(sessionStorage.getItem("role")) == "regularUser") {
                this.router.navigateByUrl("/profile");
            }
        }
        this.SocketsService.initSocket();
        this.SocketsService.updateUserList();
        this.SocketsService.onNewUserList().subscribe((data) => {
            //console.log("Controls, user: ", data);
            this.userList = data;
        });
        this.SocketsService.updateGroupList();
        this.SocketsService.onNewGroupList().subscribe((data) => {
            //console.log("Controls, group: ", data);
            this.groupList = data;
        });
    }
    deleteUserClicked(value) {
        if (confirm("Are you sure you want to delete the user '" + value + "'?")) {
            this.UserDataService.delete(value).subscribe((data) => {
                if (data.ok == true) {
                    console.log("User deleted.");
                    this.SocketsService.updateUserList();
                }
                else {
                    console.log("Failed to delete user.");
                }
            });
        }
    }
    deleteGroupClicked(name) {
        if (confirm("Are you sure you want to delete the group '" + name + "'?")) {
            this.GroupDataService.delete(name).subscribe((data) => {
                if (data.ok == true) {
                    console.log("Group deleted.");
                    this.SocketsService.updateGroupList();
                }
                else {
                    console.log("Failed to delete group.");
                }
            });
        }
    }
};
ControlsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] },
    { type: _services_group_data_service__WEBPACK_IMPORTED_MODULE_6__["GroupDataService"] }
];
ControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-controls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./controls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/controls/controls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./controls.component.css */ "./src/app/controls/controls.component.css")).default]
    })
], ControlsComponent);



/***/ }),

/***/ "./src/app/groupCreate/groupCreate.component.scss":
/*!********************************************************!*\
  !*** ./src/app/groupCreate/groupCreate.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#successFeedback {\n  display: none;\n}\n\n#failFeedback {\n  display: none;\n}\n\n#feedbackBar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UcmlzdGFuL0RvY3VtZW50cy9Tb2Z0d2FyZV9GcmFtZXdvcmtzL0Fzc2lnbm1lbnQyL0NoYXR0ZXIvc3JjL2FwcC9ncm91cENyZWF0ZS9ncm91cENyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JvdXBDcmVhdGUvZ3JvdXBDcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ncm91cENyZWF0ZS9ncm91cENyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWNjZXNzRmVlZGJhY2t7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZhaWxGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iLCIjc3VjY2Vzc0ZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZhaWxGZWVkYmFjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNmZWVkYmFja0JhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/groupCreate/groupCreate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/groupCreate/groupCreate.component.ts ***!
  \******************************************************/
/*! exports provided: GroupCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCreateComponent", function() { return GroupCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_group_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/group/data.service */ "./src/app/services/group/data.service.ts");





let GroupCreateComponent = class GroupCreateComponent {
    constructor(router, tag, SocketsService, GroupDataService) {
        this.router = router;
        this.tag = tag;
        this.SocketsService = SocketsService;
        this.GroupDataService = GroupDataService;
        this.userRole = JSON.parse(sessionStorage.getItem("role"));
        //
        // Create group form
        //
        this.groupFormName = "";
        this.successMessage = "";
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
        else {
            if (JSON.parse(sessionStorage.getItem("role")) == "regularUser") {
                this.router.navigateByUrl("/profile");
            }
        }
        this.SocketsService.initSocket();
    }
    createGroupClicked() {
        let tempOne = this.tag.nativeElement.querySelector("#successFeedback");
        tempOne.style.display = "none";
        let tempTwo = this.tag.nativeElement.querySelector("#failFeedback");
        tempTwo.style.display = "none";
        let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
        feedbackBar.style.display = "none";
        this.successMessage = "";
        this.failMessages = [];
        let error = false;
        let feedback = [];
        if (this.groupFormName == "") {
            error = true;
            feedback.push("Create User: name field is empty.");
        }
        if (error) {
            this.failMessages = feedback;
            tempTwo.style.display = "block";
            feedbackBar.style.display = "block";
        }
        else {
            let group = {
                "name": this.groupFormName,
                "channels": [],
                "assistedBy": [],
                "users": []
            };
            this.GroupDataService.create(group).subscribe((data) => {
                if (data.ok) {
                    this.successMessage = group.name;
                    tempOne.style.display = "block";
                    feedbackBar.style.display = "block";
                    this.groupFormName = "";
                }
                else {
                    console.log(data);
                    this.failMessages.push(data.message);
                    tempTwo.style.display = "block";
                    feedbackBar.style.display = "block";
                }
            });
        }
    }
};
GroupCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"] },
    { type: _services_group_data_service__WEBPACK_IMPORTED_MODULE_4__["GroupDataService"] }
];
GroupCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groupCreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupCreate/groupCreate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groupCreate.component.scss */ "./src/app/groupCreate/groupCreate.component.scss")).default]
    })
], GroupCreateComponent);



/***/ }),

/***/ "./src/app/groupUpdate/groupUpdate.component.scss":
/*!********************************************************!*\
  !*** ./src/app/groupUpdate/groupUpdate.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#successFeedback {\n  display: none;\n}\n\n#failFeedback {\n  display: none;\n}\n\n#feedbackBar {\n  display: none;\n}\n\n.box {\n  max-width: 800px;\n  min-width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2.25em;\n}\n\n.left {\n  width: 40%;\n  margin-left: 5%;\n  height: 36px;\n}\n\n.right {\n  width: 40%;\n  margin-left: 10%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UcmlzdGFuL0RvY3VtZW50cy9Tb2Z0d2FyZV9GcmFtZXdvcmtzL0Fzc2lnbm1lbnQyL0NoYXR0ZXIvc3JjL2FwcC9ncm91cFVwZGF0ZS9ncm91cFVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JvdXBVcGRhdGUvZ3JvdXBVcGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ncm91cFVwZGF0ZS9ncm91cFVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWNjZXNzRmVlZGJhY2t7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZhaWxGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJveHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIuMjVlbTtcbn1cblxuLmxlZnR7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgaGVpZ2h0OiAzNnB4O1xufVxuXG4ucmlnaHR7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCIjc3VjY2Vzc0ZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZhaWxGZWVkYmFjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNmZWVkYmFja0JhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ib3gge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyLjI1ZW07XG59XG5cbi5sZWZ0IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5yaWdodCB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/groupUpdate/groupUpdate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/groupUpdate/groupUpdate.component.ts ***!
  \******************************************************/
/*! exports provided: GroupUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupUpdateComponent", function() { return GroupUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _classes_group_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/group/group */ "./src/app/classes/group/group.ts");
/* harmony import */ var _services_group_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/group/data.service */ "./src/app/services/group/data.service.ts");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/data.service */ "./src/app/services/user/data.service.ts");







let GroupUpdateComponent = class GroupUpdateComponent {
    constructor(GroupDataService, route, router, tag, UserDataService, SocketsService) {
        this.GroupDataService = GroupDataService;
        this.route = route;
        this.router = router;
        this.tag = tag;
        this.UserDataService = UserDataService;
        this.SocketsService = SocketsService;
        this.userRole = JSON.parse(sessionStorage.getItem("role"));
        this.userList = [];
        this.assistantList = [];
        this.channelList = [];
        this.successMessage = "";
        this.failMessages = [];
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
        else {
            if (JSON.parse(sessionStorage.getItem("role")) == "regularUser") {
                this.router.navigateByUrl("/profile");
            }
        }
        this.route.paramMap.subscribe((params) => {
            this.groupnameParameter = params.get('groupname');
        });
        this.GroupDataService.retrieve(this.groupnameParameter).subscribe((data) => {
            if (data.ok) {
                this.userList = data.results.users;
                this.assistantList = data.results.assistedBy;
                this.channelList = data.results.channels;
                this.oldGroupname = data.results[0].name;
                this.formName = data.results[0].name;
                console.log("The group data: ", data);
            }
            else {
                console.log("Failed to retrieve data.");
            }
        });
        this.SocketsService.initSocket();
        this.SocketsService.updateUserList();
        this.SocketsService.onNewUserList().subscribe((data) => {
            //console.log("Controls, user: ", data);
            this.globalUsers = data;
        });
    }
    updateGroupClicked() {
        let successFeedback = this.tag.nativeElement.querySelector("#successFeedback");
        successFeedback.style.display = "none";
        let failFeedback = this.tag.nativeElement.querySelector("#failFeedback");
        failFeedback.style.display = "none";
        this.successMessage = "";
        this.failMessages = [];
        let error = false;
        let feedback = [];
        if (this.formName == "") {
            error = true;
            feedback.push("Update Group: name field is empty.");
        }
        if (error) {
            this.failMessages = feedback;
            failFeedback.style.display = "block";
        }
        else {
            //channels, assistedBy, users
            let group = new _classes_group_group__WEBPACK_IMPORTED_MODULE_3__["Group"](null, this.formName, null, null, null);
            this.GroupDataService.update(this.oldGroupname, group).subscribe((data) => {
                if (data.ok) {
                    //this.successMessage = user.username;
                    //successFeedback.style.display = "block";
                    this.router.navigateByUrl("/controls");
                }
                else {
                    this.failMessages.push(data.message);
                    failFeedback.style.display = "block";
                }
            });
        }
    }
    deleteUserClicked() {
    }
    addUserClicked() {
    }
    deleteAssistantClicked() {
    }
    addAssistantClicked() {
    }
    deleteChannelClicked() {
    }
    addChannelClicked() {
    }
};
GroupUpdateComponent.ctorParameters = () => [
    { type: _services_group_data_service__WEBPACK_IMPORTED_MODULE_4__["GroupDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"] },
    { type: _services_sockets_service__WEBPACK_IMPORTED_MODULE_5__["SocketsService"] }
];
GroupUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groupUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupUpdate/groupUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groupUpdate.component.scss */ "./src/app/groupUpdate/groupUpdate.component.scss")).default]
    })
], GroupUpdateComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.box{\n    max-width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#failFeedback{\n    display: none;\n}\n\n#feedbackBar{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJveHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuI2ZhaWxGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/data.service */ "./src/app/services/user/data.service.ts");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");





/*
const HttpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
};

const backendURL = "http://localhost:3000";
*/
let LoginComponent = class LoginComponent {
    constructor(router, 
    //private HttpClient: HttpClient, 
    loginService, tag, UserDataService) {
        this.router = router;
        this.loginService = loginService;
        this.tag = tag;
        this.UserDataService = UserDataService;
        //
        // Feedback
        //
        this.successMessage = "";
        this.failMessages = [""];
        //
        // Form: Login
        //
        this.formUsername = "";
        this.formPassword = "";
        this.user = {
            username: this.formUsername,
            password: this.formPassword,
        };
    }
    ngOnInit() { }
    loginClicked() {
        console.log("Login Clicked.");
        sessionStorage.clear();
        let successFeedback = this.tag.nativeElement.querySelector("#successFeedback");
        successFeedback.style.display = "none";
        let failFeedback = this.tag.nativeElement.querySelector("#failFeedback");
        failFeedback.style.display = "none";
        let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
        this.successMessage = "";
        this.failMessages = [];
        let error = false;
        let feedback = [];
        if (this.formUsername == "") {
            error = true;
            feedback.push("Login: 'username' field is empty.");
        }
        if (this.formPassword == "") {
            error = true;
            feedback.push("Login: 'password' field is empty.");
        }
        if (error) {
            this.failMessages = feedback;
            failFeedback.style.display = "block";
            feedbackBar.style.display = "block";
        }
        else {
            this.user.username = this.formUsername;
            this.user.password = this.formPassword;
            successFeedback.style.display = "none";
            failFeedback.style.display = "none";
            feedbackBar.style.display = "none";
            this.UserDataService.retrieveLogin(this.user).subscribe((data) => {
                if (data.ok) {
                    console.log("Logged In.");
                    sessionStorage.setItem("mongoID", JSON.stringify(data.results[0]._id));
                    sessionStorage.setItem("username", JSON.stringify(data.results[0].username));
                    sessionStorage.setItem("role", JSON.stringify(data.results[0].role));
                    this.loginService.isLoggedIn = true;
                    console.log(data.results);
                    this.router.navigateByUrl("/profile");
                }
                else {
                    this.failMessages.push(data.message);
                    failFeedback.style.display = "block";
                    feedbackBar.style.display = "block";
                }
            });
        }
    }
    logoutClicked() {
        console.log("Logout Clicked.");
        sessionStorage.clear();
        this.loginService.isLoggedIn = false;
        console.log("Logged out.");
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nul{\n    list-style: none;\n}\n\n#profileTitle {\n    color: white;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.secondaryItem {\n    padding-left: 50px;\n}\n\n.box{\n    max-width: 800px;\n    min-width: 370px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#feedbackBar{\n    display: none;\n}\n\n.card {\n    margin-bottom: 2.25em;\n}\n\n#uploadButton {\n    min-width: 170px;\n    max-width: 170px;\n}\n\n#profilePicture {\n    min-height: 200px;\n}\n\n#profileGray {\n    background-color: gray;\n    min-height: 200px;\n}\n\n#profilePicForm {\n    float: right;\n}\n\n.just-padding {\n    padding: 15px;\n}\n\n.list-group.list-group-root {\n    padding: 0;\n    overflow: hidden;\n}\n\n.list-group.list-group-root .list-group {\n    margin-bottom: 0;\n}\n\n.list-group.list-group-root .list-group-item {\n    border-radius: 0;\n    border-width: 1px 0 0 0;\n}\n\n.list-group.list-group-root > .list-group-item:first-child {\n    border-top-width: 0;\n}\n\n.list-group.list-group-root > .list-group > .list-group-item {\n    padding-left: 30px;\n}\n\n.list-group.list-group-root > .list-group > .list-group > .list-group-item {\n    padding-left: 45px;\n}\n\n.list-group-item .glyphicon {\n    margin-right: 5px;\n}\n\n.fa-angle-right {\n    margin-right: 10px;\n}\n\n.fa-angle-down {\n    margin-right: 10px;\n}\n\n.channelItem {\n    padding-left: 50px;\n}\n\n#groupSubtitle {\n    margin-top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuI3Byb2ZpbGVUaXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5zZWNvbmRhcnlJdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5ib3h7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtaW4td2lkdGg6IDM3MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuI2ZlZWRiYWNrQmFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjI1ZW07XG59XG5cbiN1cGxvYWRCdXR0b24ge1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgbWF4LXdpZHRoOiAxNzBweDtcbn1cblxuI3Byb2ZpbGVQaWN0dXJlIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuI3Byb2ZpbGVHcmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4jcHJvZmlsZVBpY0Zvcm0ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmp1c3QtcGFkZGluZyB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1yb290IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtcm9vdCAubGlzdC1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtZ3JvdXAubGlzdC1ncm91cC1yb290IC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XG59XG5cbi5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtcm9vdCA+IC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG59XG5cbi5saXN0LWdyb3VwLmxpc3QtZ3JvdXAtcm9vdCA+IC5saXN0LWdyb3VwID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ubGlzdC1ncm91cC5saXN0LWdyb3VwLXJvb3QgPiAubGlzdC1ncm91cCA+IC5saXN0LWdyb3VwID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIC5nbHlwaGljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZmEtYW5nbGUtcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZhLWFuZ2xlLWRvd24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNoYW5uZWxJdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbiNncm91cFN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/data.service */ "./src/app/services/user/data.service.ts");





let ProfileComponent = class ProfileComponent {
    constructor(route, router, tag, SocketsService, UserDataService) {
        this.route = route;
        this.router = router;
        this.tag = tag;
        this.SocketsService = SocketsService;
        this.UserDataService = UserDataService;
        this.loggedInMongoID = JSON.parse(sessionStorage.getItem("mongoID"));
        this.loggedInUsername = JSON.parse(sessionStorage.getItem("username"));
        this.loggedInRole = JSON.parse(sessionStorage.getItem("role"));
        this.groupList = [];
        this.loggedInUser = {
            "image": ""
        };
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
        this.SocketsService.initSocket();
        this.SocketsService.updateGroupList();
        this.SocketsService.onNewGroupList().subscribe((data) => {
            console.log("Controls, group: ", data);
            let i;
            for (i = 0; i < data.length; i++) {
                let x;
                for (x = 0; x < data[i].users.length; x++) {
                    if (data[i].users[x] == this.loggedInUsername) {
                        this.groupList.push(data[i]);
                        break;
                    }
                }
            }
        });
        this.UserDataService.retrieve(this.loggedInMongoID).subscribe((data) => {
            if (data.ok) {
                console.log(data);
                this.loggedInUser.image = data.results[0].image;
                console.log(this.loggedInUser.image);
            }
            else {
                console.log("Failed to retrieve data.");
            }
        });
    }
    toggleCollapse(groupName) {
        let tempIconTag = this.tag.nativeElement.querySelector("#icon_" + groupName);
        let tempListTag = this.tag.nativeElement.querySelector("#list_" + groupName);
        let i;
        let result = false;
        for (i = 0; i < tempListTag.classList.length; i++) {
            let x = tempListTag.classList[i];
            if (x == "collapse") {
                result = true;
                break;
            }
        }
        if (result) {
            tempListTag.classList.remove("collapse");
            tempIconTag.classList.remove("fa-angle-right");
            tempIconTag.classList.add("fa-angle-down");
        }
        else {
            tempListTag.classList.add("collapse");
            tempIconTag.classList.remove("fa-angle-down");
            tempIconTag.classList.add("fa-angle-right");
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/services/group/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/group/data.service.ts ***!
  \************************************************/
/*! exports provided: GroupDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDataService", function() { return GroupDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GroupDataService = class GroupDataService {
    constructor(http) {
        this.http = http;
    }
    create(group) {
        return this.http.post('http://localhost:3000/group/create', group);
    }
    retrieve(value) {
        return this.http.post('http://localhost:3000/group/retrieve/one', { "name": value });
    }
    retrieveAll() {
        return this.http.get('http://localhost:3000/group/retrieve/all');
    }
    update(oldGroupname, group) {
        return this.http.post('http://localhost:3000/group/update', { "oldGroupname": oldGroupname, "group": group });
    }
    delete(name) {
        return this.http.post('http://localhost:3000/group/delete', { "name": name });
    }
};
GroupDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroupDataService);



/***/ }),

/***/ "./src/app/services/image/upload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/image/upload.service.ts ***!
  \**************************************************/
/*! exports provided: ImageUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadService", function() { return ImageUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ImageUploadService = class ImageUploadService {
    constructor(Http) {
        this.Http = Http;
    }
    imageUpload(fd) {
        return this.Http.post("http://localhost:3000/image/upload", fd);
    }
};
ImageUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImageUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImageUploadService);



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        if (sessionStorage.getItem("username") == null) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn = true;
        }
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/sockets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sockets.service.ts ***!
  \*********************************************/
/*! exports provided: SocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsService", function() { return SocketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




const serverUrl = 'http://localhost:3000';
let SocketsService = class SocketsService {
    constructor() { }
    initSocket() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(serverUrl);
    }
    //
    // User list
    //
    updateUserList() {
        //emit parameters: event type & the message
        this.socket.emit("updateUserList", "check yourself");
    }
    onNewUserList() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on("newUserList", (data) => observer.next(data));
        });
        return observable;
    }
    //
    // Group List
    //
    updateGroupList() {
        this.socket.emit("updateGroupList", "check yourself");
    }
    onNewGroupList() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on("newGroupList", (data) => observer.next(data));
        });
        return observable;
    }
    onMessage() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on("message", (data) => observer.next(data));
        });
        return observable;
    }
    chat(message) {
        this.socket.emit("message", message);
    }
    prodcount() {
        this.socket.emit("prodcount", "check yourself");
    }
    onProdcount() {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on("prodcount", (data) => observer.next(data));
        });
        return observable;
    }
};
SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketsService);



/***/ }),

/***/ "./src/app/services/user/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserDataService = class UserDataService {
    constructor(http) {
        this.http = http;
    }
    create(user) {
        return this.http.post('http://localhost:3000/user/create', user);
    }
    retrieve(mongoID) {
        return this.http.post('http://localhost:3000/user/retrieve/one', { "mongoID": mongoID });
    }
    retrieveLogin(user) {
        return this.http.post('http://localhost:3000/user/retrieve/login', user);
    }
    retrieveAll() {
        return this.http.get('http://localhost:3000/user/retrieve/all');
    }
    update(user) {
        return this.http.post('http://localhost:3000/user/update', user);
    }
    delete(value) {
        return this.http.post('http://localhost:3000/user/delete', { "username": value });
    }
};
UserDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ "./src/app/userCreate/userCreate.component.scss":
/*!******************************************************!*\
  !*** ./src/app/userCreate/userCreate.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#userSuccessFeedback {\n  display: none;\n}\n\n#userFailFeedback {\n  display: none;\n}\n\n#feedbackBar {\n  display: none;\n}\n\n.box {\n  max-width: 800px;\n  min-width: 370px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UcmlzdGFuL0RvY3VtZW50cy9Tb2Z0d2FyZV9GcmFtZXdvcmtzL0Fzc2lnbm1lbnQyL0NoYXR0ZXIvc3JjL2FwcC91c2VyQ3JlYXRlL3VzZXJDcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJDcmVhdGUvdXNlckNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyQ3JlYXRlL3VzZXJDcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXNlclN1Y2Nlc3NGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jdXNlckZhaWxGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJveHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1pbi13aWR0aDogMzcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSIsIiN1c2VyU3VjY2Vzc0ZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3VzZXJGYWlsRmVlZGJhY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm94IHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWluLXdpZHRoOiAzNzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/userCreate/userCreate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userCreate/userCreate.component.ts ***!
  \****************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/data.service */ "./src/app/services/user/data.service.ts");





let UserCreateComponent = class UserCreateComponent {
    constructor(router, tag, SocketsService, UserDataService) {
        this.router = router;
        this.tag = tag;
        this.SocketsService = SocketsService;
        this.UserDataService = UserDataService;
        this.userRole = JSON.parse(sessionStorage.getItem("role"));
        //
        // Create user form
        //
        this.userFormUsername = "";
        this.userFormPassword = "";
        this.userFormRole = "";
        this.userSuccessMessage = "";
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
        else {
            if (JSON.parse(sessionStorage.getItem("role")) == "regularUser") {
                this.router.navigateByUrl("/profile");
            }
        }
        this.SocketsService.initSocket();
    }
    createUserClicked() {
        let tempOne = this.tag.nativeElement.querySelector("#userSuccessFeedback");
        tempOne.style.display = "none";
        let tempTwo = this.tag.nativeElement.querySelector("#userFailFeedback");
        tempTwo.style.display = "none";
        let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
        feedbackBar.style.display = "block";
        this.userSuccessMessage = "";
        this.userFailMessages = [];
        let error = false;
        let feedback = [];
        if (this.userFormUsername == "") {
            error = true;
            feedback.push("Create User: 'username' field is empty.");
        }
        if (this.userFormPassword == "") {
            error = true;
            feedback.push("Create User: 'password' field is empty.");
        }
        if (this.userFormRole == "") {
            error = true;
            feedback.push("Create User: 'role' field is empty.");
        }
        if (error) {
            this.userFailMessages = feedback;
            tempTwo.style.display = "block";
            feedbackBar.style.display = "block";
        }
        else {
            let user = {
                "username": this.userFormUsername,
                "password": this.userFormPassword,
                "role": this.userFormRole,
                "image": ""
            };
            this.UserDataService.create(user).subscribe((data) => {
                if (data.ok) {
                    this.userSuccessMessage = user.username;
                    tempOne.style.display = "block";
                    this.userFormUsername = "";
                    this.userFormPassword = "";
                    this.userFormRole = "";
                }
                else {
                    console.log(data);
                    this.userFailMessages.push(data.message);
                    tempTwo.style.display = "block";
                }
            });
        }
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }
];
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userCreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userCreate/userCreate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userCreate.component.scss */ "./src/app/userCreate/userCreate.component.scss")).default]
    })
], UserCreateComponent);



/***/ }),

/***/ "./src/app/userUpdate/userUpdate.component.scss":
/*!******************************************************!*\
  !*** ./src/app/userUpdate/userUpdate.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#successFeedback {\n  display: none;\n}\n\n#failFeedback {\n  display: none;\n}\n\n#feedbackBar {\n  display: none;\n}\n\n.box {\n  max-width: 800px;\n  min-width: 370px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2.25rem;\n}\n\n#imageMessage {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9UcmlzdGFuL0RvY3VtZW50cy9Tb2Z0d2FyZV9GcmFtZXdvcmtzL0Fzc2lnbm1lbnQyL0NoYXR0ZXIvc3JjL2FwcC91c2VyVXBkYXRlL3VzZXJVcGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXJVcGRhdGUvdXNlclVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJVcGRhdGUvdXNlclVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWNjZXNzRmVlZGJhY2t7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZhaWxGZWVkYmFja3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJveHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1pbi13aWR0aDogMzcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDIuMjVyZW07XG59XG5cbiNpbWFnZU1lc3NhZ2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiI3N1Y2Nlc3NGZWVkYmFjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNmYWlsRmVlZGJhY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmVlZGJhY2tCYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm94IHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWluLXdpZHRoOiAzNzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcbn1cblxuI2ltYWdlTWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/userUpdate/userUpdate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userUpdate/userUpdate.component.ts ***!
  \****************************************************/
/*! exports provided: UserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function() { return UserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/data.service */ "./src/app/services/user/data.service.ts");
/* harmony import */ var _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/image/upload.service */ "./src/app/services/image/upload.service.ts");





let UserUpdateComponent = class UserUpdateComponent {
    constructor(UserDataService, route, router, tag, ImageUploadService) {
        this.UserDataService = UserDataService;
        this.route = route;
        this.router = router;
        this.tag = tag;
        this.ImageUploadService = ImageUploadService;
        this.loggedInUsername = JSON.parse(sessionStorage.getItem("username"));
        this.loggedInRole = JSON.parse(sessionStorage.getItem("role"));
        //
        // Feedback
        //
        this.successMessage = "";
        this.failMessages = [""];
        //
        // Form: Update User
        //
        this.formImage = null;
        this.formUsername = "";
        this.formPassword = "";
        this.formRole = "";
        //
        // Target User Infomation
        //
        this.user = {
            "mongoID": null,
            "image": "",
            "username": "",
            "password": "",
            "role": ""
        };
        this.oldUsername = "";
        this.oldRole = "";
    }
    ngOnInit() {
        if (sessionStorage.getItem("username") == null) {
            this.router.navigateByUrl("/login");
        }
        else {
            if (JSON.parse(sessionStorage.getItem("role")) == "regularUser") {
                this.router.navigateByUrl("/profile");
            }
        }
        this.route.paramMap.subscribe((params) => {
            this.urlParameterMongoID = params.get('mongoID');
        });
        this.UserDataService.retrieve(this.urlParameterMongoID).subscribe((data) => {
            if (data.ok) {
                console.log(data);
                this.user.mongoID = data.results[0]._id;
                this.user.username = data.results[0].username;
                this.user.password = data.results[0].password;
                this.user.role = data.results[0].role;
                this.formUsername = this.user.username;
                this.formPassword = this.user.password;
                this.formRole = this.user.role;
            }
            else {
                console.log("Failed to retrieve data.");
            }
        });
    }
    updateUserClicked() {
        console.log("role form: ", this.formRole);
        let successFeedback = this.tag.nativeElement.querySelector("#successFeedback");
        successFeedback.style.display = "none";
        let failFeedback = this.tag.nativeElement.querySelector("#failFeedback");
        failFeedback.style.display = "none";
        let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
        feedbackBar.style.display = "none";
        this.successMessage = "";
        this.failMessages = [];
        let error = false;
        let feedback = [];
        if (this.formUsername == "") {
            error = true;
            feedback.push("Update User: username field is empty.");
        }
        if (this.formPassword == "") {
            error = true;
            feedback.push("Update User: password field is empty.");
        }
        if (this.formRole == "") {
            error = true;
            feedback.push("Update User: role field is empty.");
        }
        if (error) {
            this.failMessages = feedback;
            failFeedback.style.display = "block";
            feedbackBar.style.display = "block";
        }
        else {
            if (this.formImage == null) {
                this.user.username = this.formUsername;
                this.user.password = this.formPassword;
                this.user.role = this.formRole;
                this.UserDataService.update(this.user).subscribe((data) => {
                    console.log(data.ok);
                    if (data.ok) {
                        this.successMessage = "User '" + this.user.username + "' successfully updated.";
                        successFeedback.style.display = "block";
                        feedbackBar.style.display = "block";
                    }
                    else {
                        this.failMessages.push(data.message);
                        failFeedback.style.display = "block";
                        feedbackBar.style.display = "block";
                    }
                });
            }
            else {
                const fd = new FormData();
                fd.append("image", this.formImage, this.formImage.name);
                this.ImageUploadService.imageUpload(fd).subscribe(res => {
                    console.log(res);
                    this.user.image = res.data.filename;
                    this.user.username = this.formUsername;
                    this.user.password = this.formPassword;
                    this.user.role = this.formRole;
                    this.UserDataService.update(this.user).subscribe((data) => {
                        if (data.ok) {
                            this.successMessage = "User '" + this.user.username + "' successfully updated.";
                            successFeedback.style.display = "block";
                            feedbackBar.style.display = "block";
                        }
                        else {
                            this.failMessages.push(data.message);
                            failFeedback.style.display = "block";
                            feedbackBar.style.display = "block";
                        }
                    });
                });
            }
        }
    }
    fileSelectedChanged(event) {
        console.log("File changed.");
        this.formImage = event.target.files[0];
    }
};
UserUpdateComponent.ctorParameters = () => [
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"] }
];
UserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userUpdate/userUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userUpdate.component.scss */ "./src/app/userUpdate/userUpdate.component.scss")).default]
    })
], UserUpdateComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Tristan/Documents/Software_Frameworks/Assignment2/Chatter/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map