
const data = {
    activities: {
        
        
            
                
        '1546968934': {
            id: '1546968934',
            title: 'Learn Vue.js',
            notes: 'I started today and it was not good.',
            progress: 66,
            category: '1546969049',
            createdAt: 1546969144391,
            updatedAt: 1546969144391
        },
        '1546969212': {
            id: '1546969212',
            title: 'Read Witcher Books',
            notes: 'These books are super nice',
            progress: 0,
            category: '1546969049',
            createdAt: 1546969144391,
            updatedAt: 1546969144391
        }
            
        
        
    },
    categories : {
        '1546969049': {text: 'books', id:'1546969049'},
        '1546969225': {text: 'movies', id:'1546969225'}
           
    }
}

class FakeApi {
     canConttinue  (){
        const rndNumber = Math.floor(Math.random() * 10)
        if(rndNumber >5) return true
        else 
        return false
    }
    
     get  (resource, {force = 0}) {
         // const force = options.force or const {force} = options
        return new Promise((resolve, reject)=>{
            this.asyncCall(()=>{
                if(force || this.canConttinue())
                resolve({...data[resource]})
                else
                reject('Cannot fetch '+ resource)
            })
            
        })
        
    }
    post(resource,item){
        return new Promise((resolve,reject)=>{
            data[resource][item.id] = item 
            resolve(item)
        })
    }

    asyncCall(cb){
        setTimeout(cb,1000)
    }
}
export default new FakeApi()