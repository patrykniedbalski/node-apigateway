import {ApiGatewayResponse} from '../ApiGatewayResponse'
import {ApiGatewayResponseInterceptor} from '../ApiGatewayResponseInterceptor'

export class ApiGatewayResponseJsonParserInterceptor implements ApiGatewayResponseInterceptor {
  interceptResponse(response: ApiGatewayResponse) {
    try {
      response.payload = JSON.parse(response.payload)
    } catch (e) {
      // nothing happened
    }
  }
}
