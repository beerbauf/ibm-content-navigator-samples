/*
 * Licensed Materials - Property of IBM (c) Copyright IBM Corp. 2016 All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 *
 * DISCLAIMER OF WARRANTIES :
 *
 * Permission is granted to copy and modify this Sample code, and to distribute modified versions provided that both the
 * copyright notice, and this permission notice and warranty disclaimer appear in all copies and modified versions.
 *
 * THIS SAMPLE CODE IS LICENSED TO YOU AS-IS. IBM AND ITS SUPPLIERS AND LICENSORS DISCLAIM ALL WARRANTIES, EITHER
 * EXPRESS OR IMPLIED, IN SUCH SAMPLE CODE, INCLUDING THE WARRANTY OF NON-INFRINGEMENT AND THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT WILL IBM OR ITS LICENSORS OR SUPPLIERS BE LIABLE FOR
 * ANY DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO USE THE SAMPLE CODE, DISTRIBUTION OF THE SAMPLE CODE, OR
 * COMBINATION OF THE SAMPLE CODE WITH ANY OTHER CODE. IN NO EVENT SHALL IBM OR ITS LICENSORS AND SUPPLIERS BE LIABLE
 * FOR ANY LOST REVENUE, LOST PROFITS OR DATA, OR FOR DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE
 * DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF IBM OR ITS LICENSORS OR SUPPLIERS HAVE
 * BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.selectedPane = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadDesktopLists();
    };
    AppComponent.prototype.setSelectedPane = function (num) {
        this.selectedPane = num;
    };
    AppComponent.prototype.loadDesktopLists = function () {
        if (ecm.model.desktop) {
            var self_1 = this;
            self_1.repositories = ecm.model.desktop.repositories;
            self_1.defaultRepository = ecm.model.desktop.getDefaultRepository();
            if (self_1.defaultRepository) {
                self_1.defaultRepository.retrieveSearchTemplates(function (templates) {
                    self_1.searchTemplates = templates;
                });
            }
        }
    };
    AppComponent.prototype.getNYTimesTopStories = function () {
        if (ecm.model.Request) {
            var self_2 = this;
            ecm.model.Request.invokePluginService("AngularSamplePlugin", "NYTimesTopStoriesService", {
                requestCompleteCallback: function (response) {
                    if (response && response.results) {
                        console.debug("results=", response.results);
                        self_2.topNewsStories = response.results;
                    }
                }
            });
        }
    };
    AppComponent.prototype.openStory = function (story) {
        if (story && story.url) {
            window.open(story.url, "newsStoryWindow");
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular-sample',
            templateUrl: '/navigator/plugin/AngularSamplePlugin/getResource/app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map