<template>
 
    <div class="jobData">
        <div class="date">{{ cvInventory[index+12].date }}</div>
        <div class="jobTitle">{{ cvInventory[index+12].activity }}</div>
        <div class="jobLocation">{{ cvInventory[index+12].location }}</div>
    </div>  

</template>

<script>
export default {
    props: ['cvInventory', 'index']
      
}
</script>