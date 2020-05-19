<template>
    <div>
        <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item "
              :class="{'is-active':filterOption === 'all'}"
             @click="(emitFilter('all'))">All</a>
            <a class="navbar-item"
              :class="{'is-active':filterOption === 'inprogress'}"
             @click="(emitFilter('inprogress'))">In Progress</a>
            <a class="navbar-item"
              :class="{'is-active':filterOption === 'finished'}"
             @click="(emitFilter('finished'))">Finished</a>
            <a class="navbar-item"
              :class="{'is-active':filterOption === 'notstarted'}"
             @click="(emitFilter('notstarted'))">Not Started</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
    data(){
      return{
        filterOption:'all'
      }
    },
    methods:{
      emitFilter(filterOption){
        this.filterOption = filterOption
        this.$emit('filterSelected',filterOption)
      }
    }
}
</script>