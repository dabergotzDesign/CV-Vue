/* SKILLVIEW */

<template>
    <div class="skillMain">
            <h1 class="jobtitle">Skills</h1>
            
                <div class="skillData">
                    <div class="hardSkills">
                        <h2>Hard Skills</h2>
                        <ul class="hardSkills">
                            <ol class="webSkills">
                                <h3>Web Development Skills</h3>                       
                            <li v-for="skill in hard" :key=skill>
                                <img :src="'../icons/skillTree_icon_' + `${skill.img}`"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                            </ol>
                           
                            <ol class="furtherSkills">
                                <h3>Further Skills</h3>
                            <li v-for="skill in skills" :key=skill>
                                <img :src="'../icons/skillTree_icon_' + `${skill.img}`"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                            </ol>
                            
                        </ul>
                    </div>

                    <div class="softSkills">
                        <h2>Soft Skills</h2>
                        <ul class="softSkills">
                            <li v-for="skill in soft" :key=skill>
                                <img :src="'../icons/skillTree_icon_' + `${skill.img}`"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
     
   

        </div>
</template>
<script>
import SkillTree from '@/components/SkillTree.vue'

export default {
 name: 'skills',
 components: {
    SkillTree
 },
  data () {
    return {
       hard: [
                {
                    img: "html.png",
                    skillName: "HTML"
                },
                {
                    img: "css.png",
                    skillName: "CSS"
                },
                {
                    img: "javascript.png",
                    skillName: "Javascript"
                },
                {
                    img: "react.png",
                    skillName: "REACT"
                },
                {
                    img: "sass.png",
                    skillName: "SASS"
                },
                {
                    img: "vue.png",
                    skillName: "VUE"
                }
            ],
            skills: [
                {
                    img: "photoshop.png",
                    skillName: "Photoshop"
                },
                {
                    img: "unity.png",
                    skillName: "Unity 3D"
                },
                {
                    img: "maya.png",
                    skillName: "Maya 3D"
                },
                {
                    img: "unreal.png",
                    skillName: "Unreal Engine"
                },
                {
                    img: "csharp.png",
                    skillName: "CSharp"
                }
            ],
            soft: [
                {
                    img: "teamplayer.png",
                    skillName: "Teamplayer"
                },
                {
                    img: "reliable.png",
                    skillName: "Reliable"
                },
                {
                    img: "ontime.png",
                    skillName: "On Time"
                },
                {
                    img: "creative.png",
                    skillName: "Creative"
                },
                {
                    img: "motivated.png",
                    skillName: "Motivated"
                }
            ]
    }
  }
}
</script>