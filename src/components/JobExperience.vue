/* PRODUCTCARD */

<template>
        <div class="jobData">
            <div class="date">{{ cvInventory[index].date }}</div>
            <div class="jobTitle">{{ cvInventory[index].activity }}</div>
            <div class="jobLocation">{{ cvInventory[index].location }}</div>
            </div>
</template>

<script>
export default {
    props: ['cvInventory', 'index']
}
</script>
