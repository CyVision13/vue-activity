export default{
    
    // data(){
    //     return{
    //         utilityName: 'text utility',
    //         creator: 'CyVision'
    //     }
    // },
    // computed:{
    //     fullName(){
    //         return this.utilityName + ' '+this.creator
    //     }
    // },
    methods:{
        textUtility_capitilize(word){
            if(word && typeof word ==='string'){
              return word.charAt(0).toUpperCase() + word.slice(1)
            }
          }
    }
}