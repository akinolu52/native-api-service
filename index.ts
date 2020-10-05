type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'

export class ApiService {
    private baseURL: string;
    private token: string;
    private contentType: string;

    constructor(baseURL: string, token?: string, contentType?: string) {
        this.baseURL = baseURL;
        this.token = token;
        this.contentType = contentType;
    }

    async request(
        method: Method,
        path: string,
        callback: any,
        errorCallback: any,
        payload?: object,
        exectuteWhileLoading?: any,
    ) {
        if (exectuteWhileLoading) exectuteWhileLoading();
        const requestMethod = method.toLowerCase();

        if (requestMethod === 'get' || requestMethod === 'options') {
            return await fetch(`${this.baseURL}${path}`, {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' || this.contentType,
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Origin': this.baseURL,
                    'Authorization': this.token,
                },
            })
                .then(response => response.json())
                .then(response => callback(response))
                .catch(errorCallback);

        } else {
            return await fetch(`${this.baseURL}${path}`, {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' || this.contentType,
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Origin': this.baseURL,
                    'Authorization': this.token,
                },
                body: JSON.stringify(payload)
            })
                .then(response => response.json())
                .then(response => callback(response))
                .catch(errorCallback);

        }
    }
}