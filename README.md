# native-api-service

A simple way to make API request from the client end

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install native-api-service.

```bash
npm install native-api-service
```

## Explanation

***ApiService.request(method, path, callback, errorCallback, payload, exectuteWhileLoading);***

1. **method**: this is any of the HTTP request method - get, delete, head, options, posst, put, patch,
2. **path**: this is the relative path to the needed resource - '/user'
3. **callback**: this is a function that gets executed when the request is successful - (response) => console.log('response from API -> ', response)  
4. **errorCallback**: this is a error function that gets executed when the request fails - (error) => console.log('error from API -> ', error)  
5. **payload (optional)**: this is an object that needs you to send data to the API - { key: value }
6. **exectuteWhileLoading (optional)**: this is a function that gets executed while the request is loading - NB: you can show a toast or upload progress


## Usage

```javascript
import { ApiService } from 'native-api-service';

const userApiService = new ApiService('https://jsonplaceholder.typicode.com');
// or
// const userApiService = new ApiService('https://jsonplaceholder.typicode.com', 'Bearer **token**');
// or
// const userApiService = new ApiService('https://jsonplaceholder.typicode.com', 'Bearer **token**', 'application/json');
userApiService.request(
    'get', 
    '/users',
    response => {
        console.log(response);
        return response;
    },
    error => {
        console.log(error);
        return error;
    },
    null,
    console.log('Loading all users...'),
);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GNU](https://www.gnu.org/licenses)