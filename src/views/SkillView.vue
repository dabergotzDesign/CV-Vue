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
                                <img :src="skill.img"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                            </ol>
                           
                            <ol class="furtherSkills">
                                <h3>Further Skills</h3>
                            <li v-for="skill in skills" :key=skill>
                                <img :src="skill.img"  :alt="`${skill.skillName}` +' icon'" class="icon">
                                <div>{{ skill.skillName }}</div>
                            </li>
                            </ol>
                            
                        </ul>
                    </div>

                    <div class="softSkills">
                        <h2>Soft Skills</h2>
                        <ul class="softSkills">
                            <li v-for="skill in soft" :key=skill>
                                <img :src="skill.img"  :alt="`${skill.skillName}` +' icon'" class="icon">
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
                    img: '../src/assets/img/icons/skillTree_icon_html.png',
                    skillName: "HTML"
                },
                {
                    img:'../src/assets/img/icons/skillTree_icon_css.png',
                    skillName: "CSS"
                },
                {
                    img:'../src/assets/img/icons/skillTree_icon_javascript.png',
                    skillName: "Javascript"
                },
                {
                    img:'../src/assets/img/icons/skillTree_icon_react.png',
                    skillName: "REACT"
                },
                {
                    img:'../src/assets/img/icons/skillTree_icon_sass.png',
                    skillName: "SASS"
                },
                {
                    img:'../src/assets/img/icons/skillTree_icon_vue.png',
                    skillName: "VUE"
                }
            ] ,
            skills: [
                {
                    img: '../src/assets/img/icons/skillTree_icon_photoshop.png',
                    skillName: "Photoshop"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_unity.png',
                    skillName: "Unity 3D"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_maya.png',
                    skillName: "Maya 3D"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_unreal.png',
                    skillName: "Unreal Engine"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_csharp.png',
                    skillName: "CSharp"
                }
            ],
            soft: [
                {
                    img: '../src/assets/img/icons/skillTree_icon_teamplayer.png',
                    skillName: "Teamplayer"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_reliable.png',
                    skillName: "Reliable"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_ontime.png',
                    skillName: "On Time"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_creative.png',
                    skillName: "Creative"
                },
                {
                    img: '../src/assets/img/icons/skillTree_icon_motivated.png',
                    skillName: "Motivated"
                }
            ]
    }
  }
}
</script>