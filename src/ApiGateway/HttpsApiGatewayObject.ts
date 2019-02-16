import https from 'https'
import {ApiGatewayObject} from './ApiGatewayObject'

export class HttpsApiGatewayObject extends ApiGatewayObject {
  constructor() {
    super(https)
  }
}
