import * as React from 'react';
import "./FunFriends.module.scss";
function FunFriends(props) {
    return (React.createElement("li", null,
        React.createElement("h3", null, props.link.Name),
        React.createElement("div", null, props.link.Fact1)));
}
export default FunFriends;
/*<div>{props.link.Selfy}</div>*/ 
//# sourceMappingURL=FunFriends.js.map