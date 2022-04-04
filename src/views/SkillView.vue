/* SKILLVIEW */

<template>
    <div class="skillMain">
            <h1 class="jobtitle">Skills</h1>


            <SkillTree
            :cvSkill="cvSkill"
            :key="index"
            :index="index"
            />

        </div>
</template>
<script>
import SkillTree from '@/components/SkillTree.vue'

export default {
 name: 'skills',
 props: ['cvSkill', 'index'],
 components: {
    SkillTree
 },
  data () {
    return {
       hard: [
                {
                    img:'../src/assets/styles/img/icons/skillTree_icon_html.png',
                    alt: "HTML"
                },
                {
                    img:'../src/assets/styles/img/icons/skillTree_icon_css.png',
                    alt: "CSS"
                },
                {
                    img:'../src/assets/styles/img/icons/skillTree_icon_javascript.png',
                    alt: "Javascript"
                },
                {
                    img:'../src/assets/styles/img/icons/skillTree_icon_react.png',
                    alt: "REACT"
                },
                {
                    img:'../src/assets/styles/img/icons/skillTree_icon_sass.png',
                    alt: "SASS"
                },
                {
                    img:'../src/assets/styles/img/icons/skillTree_icon_vue.png',
                    alt: "VUE"
                }
            ] ,
            skills: [
                { 
                    img: '../src/assets/styles/img/icons/skillTree_icon_photoshop.png',
                    alt: "Photoshop"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_unity.png',
                    alt: "Unity 3D"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_maya.png',
                    alt: "Maya 3D"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_unreal.png',
                    alt: "Unreal Engine"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_csharp.png',
                    alt: "CSharp"
                }
            ],
            soft: [
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_teamplayer.png',
                    alt: "Teamplayer"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_reliable.png',
                    alt: "Reliable"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_ontime.png',
                    alt: "On Time"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_motivated.png',
                    alt: "Motivated"
                },
                {
                    img: '../src/assets/styles/img/icons/skillTree_icon_creative.png',
                    alt: "Creative"
                }
            ]
    }
  }
}
</script>