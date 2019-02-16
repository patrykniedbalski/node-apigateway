import {ApiGatewayResponse} from './ApiGatewayResponse'
import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'

export interface ApiGateway {
  request(requestOptions: ApiGatewayRequestOptions, requestPayload?): Promise<ApiGatewayResponse>
  get(path: string, headers?: {}): Promise<ApiGatewayResponse>
  post(path: string, headers?: {}, payload?): Promise<ApiGatewayResponse>
  put(path: string, headers?: {}, payload?): Promise<ApiGatewayResponse>
  delete(path: string, headers?: {}): Promise<ApiGatewayResponse>
}
