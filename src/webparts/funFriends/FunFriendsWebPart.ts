import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FunFriendsWebPartStrings';
import FunFriendsApp from './components/FunFriendsApp';
import { IFunFriendsProps } from './components/IFunFriendsProps';

export interface IFunFriendsWebPartProps {
  listName: string;
}

export default class FunFriendsWebPart extends BaseClientSideWebPart<IFunFriendsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFunFriendsProps> = React.createElement(
      FunFriendsApp,
      {
        listTitle: this.properties.listName,
        ctx: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
