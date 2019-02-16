import {ApiGateway} from './ApiGateway'
import {ApiGatewayRequestInterceptor} from './ApiGatewayRequestInterceptor'
import {ApiGatewayResponseInterceptor} from './ApiGatewayResponseInterceptor'

export interface ApiGatewayService extends ApiGateway {
  interceptRequest(interceptor: ApiGatewayRequestInterceptor): ApiGatewayService
  interceptResponse(interceptor: ApiGatewayResponseInterceptor): ApiGatewayService
}
