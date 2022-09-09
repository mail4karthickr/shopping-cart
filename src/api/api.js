import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { 
    electronics, 
    jewelery, 
    mensClothing, 
    womensClothing 
} from './mock-response/products-list';
import { addresses } from './mock-response/addresses';
import { paymentInfo } from './mock-response/payment-info';

const axiosInstance = axios.create({
    timeout: 1000,
    url:  'https://fakestoreapi.com',
    baseUrl: 'https://fakestoreapi.com'
});

const mock = new MockAdapter(axiosInstance, { delayResponse: 0 });

mock
   .onGet('/products/categories')
   .reply(() => {
    return [200, ["electronics","jewelery","men's clothing","women's clothing"]]; 
});

mock
   .onGet('/products/category/electronics')
   .reply(() => {
    return [200, electronics]; 
});

mock
   .onGet('/products/category/jewelery')
   .reply(() => {
    return [200, jewelery]; 
});

mock
   .onGet("/products/category/men's clothing")
   .reply(() => {
    return [200, mensClothing]; 
});

mock
   .onGet("/products/category/women's clothing")
   .reply(() => {
    return [200, womensClothing];
});

mock
   .onGet("/addresses")
   .reply(() => {
    return [200, addresses];
});

mock
   .onGet("/user/paymentInfo")
   .reply(() => {
    return [200, paymentInfo];
});

axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
});

axiosInstance.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
});

export default axiosInstance;