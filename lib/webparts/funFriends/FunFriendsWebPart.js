var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'FunFriendsWebPartStrings';
import FunFriendsApp from './components/FunFriendsApp';
var FunFriendsWebPart = /** @class */ (function (_super) {
    __extends(FunFriendsWebPart, _super);
    function FunFriendsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunFriendsWebPart.prototype.render = function () {
        var element = React.createElement(FunFriendsApp, {
            listTitle: this.properties.listName,
            ctx: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    FunFriendsWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FunFriendsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    FunFriendsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('listName', {
                                    label: "Name of the list"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FunFriendsWebPart;
}(BaseClientSideWebPart));
export default FunFriendsWebPart;
//# sourceMappingURL=FunFriendsWebPart.js.map