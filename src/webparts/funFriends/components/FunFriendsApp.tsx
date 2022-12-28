import * as React from 'react';
import { IFunFriendsProps } from './IFunFriendsProps';
import "./FunFriends.module.scss";
import FunFriends from './FunFriends';
import * as Utils from '../utils';
import { SPHttpClient } from '@microsoft/sp-http';

export default class FunFriendsApp extends React.Component<IFunFriendsProps, any> {

  private _client: SPHttpClient = this.props.ctx.spHttpClient;
  private _webUrl: string = this.props.ctx.pageContext.web.absoluteUrl;

  state = {
    items: []
  }

  componentDidMount() {
    this._getFunFriends();
  }

  //Could limit selection of columns here if dealing with allot would make things faster. (in url)
  private _getFunFriends() {
    let url = this._webUrl + "/_api/web/Lists/getbytitle('FunFriends')/items";
    Utils.getSPData(this._client, url).then(d => {
      let data = d.value;
      this.setState({
        items: data
      });
    });
  }

  public render(): React.ReactElement<IFunFriendsProps> {
    return (
      <div>
        <h3>People</h3>
        <ul className='List'>
          {this.state.items?.map(item => <FunFriends link={item}></FunFriends>)}
        </ul>
      </div>
    );
  }
}
