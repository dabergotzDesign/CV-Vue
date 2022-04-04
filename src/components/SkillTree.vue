<template>
           <!-- FONT AWESOME FOR ICONS -->
            <div class="skillData">
                    <div class="hardSkillContainer">
                        <h2>Hard Skills</h2>
                        <ul class="hardSkills">
                            <ol class="webSkills">
                                <h3>Web Development Skills</h3>                     
                            <li v-for="(hard, index) in cvSkill.slice(0,6) " :key="index">
                                <FontAwesome  :icon="['fab', `${cvSkill[index].icon}`]" class="icon"/>
                                <div>{{ cvSkill[index].name }}</div>
                            </li>
                            </ol>
                           
                            <ol class="furtherSkills">
                                <h3>Further Skills</h3>
                                
                            <li v-for="(skill, index) in cvSkill.slice(0,5) " :key="index">
                                <FontAwesome  :icon="[`${cvSkill[index+6].short}`,`${cvSkill[index+6].icon}`]" class="icon"/>
                                <div>{{ cvSkill[index+6].name }}</div>
                            </li>

                            </ol>

                            
                        </ul>
                    </div>

                    <div class="softSkillContainer">
                        <h2>Soft Skills</h2>
                        <ul class="softSkills">
                            <h3>_</h3>
                            <li v-for="(soft, index) in cvSkill.slice(0,5) " :key="index">
                                <FontAwesome  :icon="['fas', `${cvSkill[index + 11].icon}`]" class="icon"/>
                                <div>{{ cvSkill[index + 11].name }}</div>
                            </li>
                        </ul>
                    </div>
                    
                </div>

</template>
<script>
export default {
    props:['cvSkill', 'index']
}
</script>

