import {ApiGatewayResponse} from './ApiGatewayResponse'
import {ApiGateway} from './ApiGateway'
import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'

export abstract class ApiGatewayBase implements ApiGateway {
  abstract async request(requestOptions: ApiGatewayRequestOptions, requestPayload?): Promise<ApiGatewayResponse>
  async get(path: string, headers?: {}): Promise<ApiGatewayResponse> {
    return this.request({path, method: 'GET', headers})
  }
  async post(path: string, payload: any, headers?: {}): Promise<ApiGatewayResponse> {
    return this.request({path, method: 'POST', headers}, payload)
  }
  async put(path: string, payload: any, headers?: {}): Promise<ApiGatewayResponse> {
    return this.request({path, method: 'PUT', headers}, payload)
  }
  async delete(path: string, headers?: {}): Promise<ApiGatewayResponse> {
    return this.request({path, method: 'DELETE', headers})
  }
}
