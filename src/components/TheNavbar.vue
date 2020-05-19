<template>
    <div>
        <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" @click="(emitFilter('all'))">All</a>
            <a class="navbar-item" @click="(emitFilter('inprogress'))">In Progress</a>
            <a class="navbar-item" @click="(emitFilter('finished'))">Finished</a>
            <a class="navbar-item" @click="(emitFilter('notstarted'))">Not Started</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
    methods:{
      emitFilter(filterOption){
        this.$emit('filterSelected',filterOption)
      }
    }
}
</script>