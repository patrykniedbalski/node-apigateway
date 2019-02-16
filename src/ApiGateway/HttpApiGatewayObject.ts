import http from 'http'
import {ApiGatewayObject} from './ApiGatewayObject'

export class HttpApiGatewayObject extends ApiGatewayObject {
  constructor() {
    super(http)
  }
}
