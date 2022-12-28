import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export async function getSPData(client: SPHttpClient, url: string): Promise<any> {
  let resp: SPHttpClientResponse = await client.get(url, SPHttpClient.configurations.v1);
  let json = resp.json();
  return json;
}