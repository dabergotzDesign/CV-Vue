/* SCHOOLVIEW */

<template>
    <div class="jobMain">
            <h1 class="jobtitle">School</h1>
            
           <SchoolExp
            v-for="(job, index) in cvInventory.slice(0,2)" 
            :cvInventory="cvInventory"
            :key="job.id"
            :index="index" 
            />

        </div>
</template>
<script>
import SchoolExp from '@/components/SchoolExp.vue'

export default {
 name: 'schoolExp',
 props: ['cvInventory'],
 components: {
     SchoolExp
 }
}
</script>