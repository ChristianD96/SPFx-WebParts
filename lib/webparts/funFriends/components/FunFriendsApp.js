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
import "./FunFriends.module.scss";
import FunFriends from './FunFriends';
import * as Utils from '../utils';
var FunFriendsApp = /** @class */ (function (_super) {
    __extends(FunFriendsApp, _super);
    function FunFriendsApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._client = _this.props.ctx.spHttpClient;
        _this._webUrl = _this.props.ctx.pageContext.web.absoluteUrl;
        _this.state = {
            items: []
        };
        return _this;
    }
    FunFriendsApp.prototype.componentDidMount = function () {
        this._getFunFriends();
    };
    //Could limit selection of columns here if dealing with allot would make things faster. (in url)
    FunFriendsApp.prototype._getFunFriends = function () {
        var _this = this;
        var url = this._webUrl + "/_api/web/Lists/getbytitle('FunFriends')/items";
        Utils.getSPData(this._client, url).then(function (d) {
            var data = d.value;
            _this.setState({
                items: data
            });
        });
    };
    FunFriendsApp.prototype.render = function () {
        var _a;
        return (React.createElement("div", null,
            React.createElement("h3", null, "People"),
            React.createElement("ul", { className: 'List' }, (_a = this.state.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { return React.createElement(FunFriends, { link: item }); }))));
    };
    return FunFriendsApp;
}(React.Component));
export default FunFriendsApp;
//# sourceMappingURL=FunFriendsApp.js.map