import {ApiGatewayRequest} from './ApiGatewayRequest'

export interface ApiGatewayRequestInterceptor {
  interceptRequest(request: ApiGatewayRequest)
}
