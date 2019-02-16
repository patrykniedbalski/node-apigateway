Usage:

const requestOptions = {
 hostname: 'www.example.com',
 path: '/api/'
}

const builder = new ApiGatewayServiceBuilder();
const apiGateway = builder.setRequestOptions(PersonApiGatewayConfig).buildHttpsApiGatewayService()
let response = await apiGateway.get('/path');
