import {ApiGateway} from './ApiGateway'
import {ApiGatewayRequestInterceptor} from './ApiGatewayRequestInterceptor'
import {ApiGatewayResponseInterceptor} from './ApiGatewayResponseInterceptor'
import {ApiGatewayRequestOptions} from './ApiGatewayRequestOptions'
import {HttpApiGatewayObject} from './HttpApiGatewayObject'
import {HttpsApiGatewayObject} from './HttpsApiGatewayObject'
import {ApiGatewayRequestOptionsInterceptor} from './Interceptor/ApiGatewayRequestOptionsInterceptor'
import {ApiGatewayRequestDecorator} from './ApiGatewayRequestDecorator'
import {ApiGatewayResponseDecorator} from './ApiGatewayResponseDecorator'
import {ApiGatewayService} from './ApiGatewayService'
import {ApiGatewayServiceObject} from './ApiGatewayServiceObject'

export class ApiGatewayServiceBuilder {
  private requestOptions: ApiGatewayRequestOptions
  private requestInterceptors: ApiGatewayRequestInterceptor[] = []
  private responseInterceptors: ApiGatewayResponseInterceptor[] = []
  setRequestOptions(requestOptions: ApiGatewayRequestOptions): ApiGatewayServiceBuilder {
    this.requestOptions = requestOptions
    return this
  }
  addRequestInterceptor(interceptor: ApiGatewayRequestInterceptor): ApiGatewayServiceBuilder {
    this.requestInterceptors.push(interceptor)
    return this
  }
  addResponseInterceptor(interceptor: ApiGatewayResponseInterceptor): ApiGatewayServiceBuilder {
    this.responseInterceptors.push(interceptor)
    return this
  }
  buildHttpsApiGatewayService(): ApiGatewayService {
    const apiGateway: ApiGateway = new HttpsApiGatewayObject()
    return this.createApiGatewayService(this.setup(apiGateway))
  }
  buildHttpApiGatewayService(): ApiGatewayService {
    const apiGateway: ApiGateway = new HttpApiGatewayObject()
    return this.createApiGatewayService(this.setup(apiGateway))
  }
  decorateRequest(apiGateway: ApiGateway, interceptor: ApiGatewayRequestInterceptor): ApiGateway {
    return new ApiGatewayRequestDecorator(apiGateway, interceptor)
  }
  decorateResponse(apiGateway: ApiGateway, interceptor: ApiGatewayResponseInterceptor): ApiGateway {
    return new ApiGatewayResponseDecorator(apiGateway, interceptor)
  }
  decorateWithRequestOptions(apiGateway: ApiGateway, options: ApiGatewayRequestOptions): ApiGateway {
    return new ApiGatewayRequestDecorator(apiGateway, new ApiGatewayRequestOptionsInterceptor(options))
  }
  createApiGatewayService(apiGateway: ApiGateway): ApiGatewayService {
    return new ApiGatewayServiceObject(apiGateway, this)
  }
  private setup(apiGateway: ApiGateway): ApiGateway {
    this.requestInterceptors.forEach((interceptor: ApiGatewayRequestInterceptor) => {
      apiGateway = this.decorateRequest(apiGateway, interceptor)
    })
    this.responseInterceptors.forEach((interceptor: ApiGatewayResponseInterceptor) => {
      apiGateway = this.decorateResponse(apiGateway, interceptor)
    })
    if (this.requestOptions) {
      apiGateway = this.decorateWithRequestOptions(apiGateway, this.requestOptions)
    }
    return apiGateway
  }
}
