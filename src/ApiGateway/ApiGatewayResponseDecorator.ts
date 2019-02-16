import {ApiGateway} from './ApiGateway'
import {ApiGatewayResponseInterceptor} from './ApiGatewayResponseInterceptor'
import {ApiGatewayBase} from './ApiGatewayBase'
import {ApiGatewayResponse} from './ApiGatewayResponse'
import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'

export class ApiGatewayResponseDecorator extends ApiGatewayBase {
  constructor(private apiGateway: ApiGateway, private interceptor: ApiGatewayResponseInterceptor) {
    super()
  }
  public async request(requestOptions: ApiGatewayRequestOptions = {}, requestPayload): Promise<ApiGatewayResponse> {
    const response = await this.apiGateway.request(requestOptions, requestPayload)
    await this.interceptor.interceptResponse(response)
    return response
  }
}
