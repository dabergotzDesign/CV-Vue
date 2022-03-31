<template>
    <div class="jobData">
        <div class="date">{{ cvInventory[index+1].date }}</div>
        <div class="jobTitle">{{ cvInventory[index+1].activity }}</div>
        <div class="jobLocation">{{ cvInventory[index+1].location }}</div>
    </div>
</template>

<script>
export default {
    props: ['cvInventory', 'index']
      
}
</script>