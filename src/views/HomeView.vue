<template>
  <main class="main">

      <JobExperience v-if="showJob" :cvInventory="cvdata" :key="id"/>

  </main>
  <router-view  :cvInventory="cvInventory"/>
</template>

<script>
import JobExperience from '@/components/JobExperience.vue'
import cvdata from '../cvdata.json'

export default {
    components: {
      JobExperience
    },
    data () {
      return {
        showJob: false,
        cvInventory: cvdata
      }
    },
    methods: {
      toggleJob () {
        this.showJob = !this.showJob
      }
    }
}
</script>
