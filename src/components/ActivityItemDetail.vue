<template>
  <article class="post">
    <div class="activity-title-wrapper">
        <h4 class="title-class">{{ activity.title  }}</h4>
        <i class="fas fa-cog activity-settings"  @click="setting = !setting" ></i>
    </div>
    
    <p>{{ textUtility_capitilize(categories[activity.category].text)}}</p>
    <p>{{ activity.notes}}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">
              CyVision
              </a> updated {{ activity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- <span>Progress: <span :class="'color-'+ activityProgress">{{activity.progress}} %</span></span> -->
        <span>Progress: <span :style="{'color':activityProgress}">{{activity.progress}} %</span></span>
      </div>
    </div>
    <div class="activity-controll" v-if="setting">
      <a @click="$emit('toggleUpdate',true)" class="button is-warning">Edit</a>
      <a @click="deleteActivity" class="button is-danger">Delete</a>
    </div>
  </article>
</template>

<script>
import store from '@/store'
import textUtility from '@/mixins/textutility'
  export default {
    data(){
      return {
        setting: false
      }
    },
    props: {
      categories:{
         type : Object,
        required: true
      },
      activity: {
        type : Object,
        required: true
      }
    },
    mixins: [textUtility], //textUtility is function that extract its data and methods
    computed:{
      activityProgress(){
        const progress = this.activity.progress

        if(progress <= 0)
          return 'red'
        else if (progress <=50)
          return 'orange'
        else
          return 'green'
      }
    },
    methods:{
      deleteActivity(){
        // this.$emit('ActivityDeleted',this.activity)
        store.deleteActivity(this.activity)
      }
    }
    
  }
</script>

<style lang="scss" scoped>

/* .color-red {
  color: red;

}
.color-orange {
  color: orange;
}
.color-green {
  color: green;
} */
.post .title-class {
  margin-bottom: 5px;
}

.activity-title{
  margin-bottom: 5px;
  display: inline-block;
}
.activity-settings {
  float: right;
  font-size: 22px;
  &:hover{
    cursor: pointer;
  }
}
.activity-controll {
  margin: 20px 0 0 0;
  a {
    margin-right:5px;
  }
}
</style>
