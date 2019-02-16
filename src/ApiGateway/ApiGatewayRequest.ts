import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'

export class ApiGatewayRequest {
  constructor(public requestOptions: ApiGatewayRequestOptions, public payload?) {
  }
}
