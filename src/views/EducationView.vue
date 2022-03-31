/* EDUCATIONVIEW*/

<template>
    <div class="jobMain">
            <h1 class="jobtitle">Education & other Experience</h1>
            
            <EducationExp
            v-for="(job, index) in cvInventory.slice(0,11)" 
            :cvInventory="cvInventory"
            :key="job.id"
            :index="index" 
            />

        </div>
</template>
<script>
import EducationExp from '@/components/EducationExp.vue'

export default {
 name: 'edExp',
 props:['cvInventory'],
 components: {
    EducationExp
 }
}
</script>