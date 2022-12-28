import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IFunFriendsWebPartProps {
    listName: string;
}
export default class FunFriendsWebPart extends BaseClientSideWebPart<IFunFriendsWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FunFriendsWebPart.d.ts.map