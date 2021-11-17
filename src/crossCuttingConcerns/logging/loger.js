 export  class BaseLogger{
     log(data){
        console.log("Default logger :"+ data)
     }
 }

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Elastic logged :",data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Mongo logged   :",data)
    }
}
