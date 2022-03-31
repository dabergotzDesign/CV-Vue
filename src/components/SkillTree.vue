<template>
    <div class="jobMain">
            <h1 class="jobtitle">Skills</h1>
            <div class="skillMain">
                <div class="skillData">
                    <div class="hardSkills">
                        <h2>Hard Skills</h2>
                        <ul class="hardSkills">
                            <ol class="webSkills">
                                <h3>Web Development Skills</h3>                       
                            <li v-for="skill in hard" :key=skill>
                                <img :src="'../src/assets/img/skillTree_icon_' + `${skill.img}`"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                            </ol>
                           
                            <ol class="furtherSkills">
                                <h3>Further Skills</h3>
                            <li v-for="skill in skills" :key=skill>
                                <img :src="'../src/assets/img/skillTree_icon_' + `${skill.img}`"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                            </ol>
                            
                        </ul>
                    </div>
                    <div class="softSkills">
                        <h2>Soft Skills</h2>
                        <ul class="softSkills">
                            <li v-for="skill in soft" :key=skill>
                                <img :src="'../src/assets/img/skillTree_icon_' + `${skill.img}`"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

</template>
