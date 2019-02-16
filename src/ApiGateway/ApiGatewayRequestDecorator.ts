import {ApiGateway} from './ApiGateway'
import {ApiGatewayBase} from './ApiGatewayBase'
import {RequestOptions} from 'https'
import {ApiGatewayResponse} from './ApiGatewayResponse'
import {ApiGatewayRequest} from './ApiGatewayRequest'
import {ApiGatewayRequestInterceptor} from './ApiGatewayRequestInterceptor'

export class ApiGatewayRequestDecorator extends ApiGatewayBase {
  constructor(private apiGateway: ApiGateway, private interceptor: ApiGatewayRequestInterceptor) {
    super()
  }
  public async request(requestOptions: RequestOptions = {}, requestPayload): Promise<ApiGatewayResponse> {
    const request: ApiGatewayRequest = new ApiGatewayRequest(requestOptions, requestPayload)
    await this.interceptor.interceptRequest(request)
    return this.apiGateway.request(request.requestOptions, request.payload)
  }
}
