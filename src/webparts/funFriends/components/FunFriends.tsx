import * as React from 'react';
import "./FunFriends.module.scss";

function FunFriends(props: any) {
  return (
    <li>
      <h3>{props.link.Name}</h3>

      <div>{props.link.Fact1}</div>
    </li>
  );
}

export default FunFriends;

/*<div>{props.link.Selfy}</div>*/