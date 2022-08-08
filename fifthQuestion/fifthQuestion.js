const request = require('request')

// Request URL
var url = 'http://www.google.com';

function x(){
       return new Promise((resolve, reject) => {
        request(url, (error, response, body)=>{
	
            if(error){
                 
                 reject(error)
            }
              const myObject = {
                   body,
                   statusCode: response.statusCode
              }
            resolve(myObject)
            
            
        })
       })
}

x().then((y) => console.log(y.body, y.statusCode)).catch(err => console.log(err))


