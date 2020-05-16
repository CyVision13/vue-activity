
import fakeApi from '../Lib/fakeApi'

const store = {
    state: {
        activities:{},
        categories:{}
    },
    
     
     generateUid  (){   return Math.floor(new Date() * Math.random())},

    fetchActivities () {
        return fakeApi.get('activities',{force: 1})
        
    },
    fetchCategories  () {
        return fakeApi.get('categories',{force : 1})
    },

     fetchUser () {
        return {
            name: 'CyVision',
            id: '-Aj34jknvncx98812',
            
        }
    },

     createActivityApi  (activity){
        activity.id = this.generateUid()
        activity.progress = 0 
        activity.createdAt = new Date()
        activity.updatedAt = new Date()

        return fakeApi.post('activities',activity)
        

        
    },

    deleteActivityApi (activity){
        
        return fakeApi.delete('activities',activity)
    }
    
}

export default store