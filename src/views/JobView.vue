/* PRODUCTSVIEW/HOMEVIEW */

<template>
    <div class="jobMain">
            <h1 class="jobtitle">Job Experience</h1>
            
            <JobExperience
            v-for="(job, index) in cvInventory.slice(0,1)" 
            :cvInventory="cvInventory"
            :key="job.id"
            :index="index"            
            />

        </div>
</template>
<script>
import JobExperience from '@/components/JobExperience.vue'

export default {
 name: 'jobExp',
 props:['cvInventory'],
 components: {
     JobExperience
 }
}
</script>