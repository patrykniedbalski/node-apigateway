import {ApiGatewayResponse} from './ApiGatewayResponse'
export interface ApiGatewayResponseInterceptor {
  interceptResponse(response: ApiGatewayResponse)
}
