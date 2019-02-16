import {ApiGateway} from './ApiGateway'
import {ApiGatewayRequestInterceptor} from './ApiGatewayRequestInterceptor'
import {ApiGatewayResponseInterceptor} from './ApiGatewayResponseInterceptor'
import {ApiGatewayServiceBuilder} from './ApiGatewayServiceBuilder'
import {ApiGatewayService} from './ApiGatewayService'
import {ApiGatewayResponse} from './ApiGatewayResponse'
import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'

export class ApiGatewayServiceObject implements ApiGatewayService {
  constructor(private apiGateway: ApiGateway, private apiGatewayBuilder: ApiGatewayServiceBuilder) {
  }
  interceptRequest(interceptor: ApiGatewayRequestInterceptor): ApiGatewayService {
    const apiGateway = this.apiGatewayBuilder.decorateRequest(this.apiGateway, interceptor)
    return this.apiGatewayBuilder.createApiGatewayService(apiGateway)
  }
  interceptResponse(interceptor: ApiGatewayResponseInterceptor): ApiGatewayService {
    const apiGateway = this.apiGatewayBuilder.decorateResponse(this.apiGateway, interceptor)
    return this.apiGatewayBuilder.createApiGatewayService(apiGateway)
  }

  delete(path: string, headers?: {}): Promise<ApiGatewayResponse> {
    return this.apiGateway.delete(path, headers)
  }

  get(path: string, headers?: {}): Promise<ApiGatewayResponse> {
    return this.apiGateway.get(path, headers)
  }

  post(path: string, headers?: {}, payload?): Promise<ApiGatewayResponse> {
    return this.apiGateway.post(path, headers, payload)
  }

  put(path: string, headers?: {}, payload?): Promise<ApiGatewayResponse> {
    return this.apiGateway.put(path, headers, payload)
  }

  request(requestOptions: ApiGatewayRequestOptions, requestPayload?): Promise<ApiGatewayResponse> {
    return this.apiGateway.request(requestOptions, requestPayload)
  }
}
