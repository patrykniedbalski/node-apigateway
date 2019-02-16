import path from 'path'
import {ApiGatewayRequestInterceptor} from './../ApiGatewayRequestInterceptor'
import {ApiGatewayRequest} from './../ApiGatewayRequest'
import {ApiGatewayRequestOptions} from './../ApiGatewayRequestOptions'
import deepmerge from 'deepmerge'

export class ApiGatewayRequestOptionsInterceptor implements ApiGatewayRequestInterceptor {
  constructor(private requestOptions: ApiGatewayRequestOptions = {}) {
  }
  interceptRequest(request: ApiGatewayRequest) {
    if (this.requestOptions.path && request.requestOptions.path) {
      request.requestOptions.path = path.join(this.requestOptions.path, request.requestOptions.path)
    }
    request.requestOptions = deepmerge(this.requestOptions, request.requestOptions)
  }
}
