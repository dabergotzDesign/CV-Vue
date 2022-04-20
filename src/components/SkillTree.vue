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
                                
                            <li>
                                <img src="@\assets\styles\img\skillTree_icon_photoshop.png" alt="photoshop icon" class="icon"/>
                                <div>Photoshop</div>
                            </li>

                            <li>
                                <img src="@\assets\styles\img\skillTree_icon_maya.png" alt="autodesk maya 3d icon" class="icon"/>
                                <div>Maya 3D</div>
                            </li>

                            <li>
                                <img src="@\assets\styles\img\skillTree_icon_unity.png" alt="unity 3d icon" class="icon"/>
                                <div>Unity 3D</div>
                            </li>

                            <li>
                                <img src="@\assets\styles\img\skillTree_icon_unreal.png" alt="unreal engine icon" class="icon"/>
                                <div>Unreal Engine</div>
                            </li>

                            <li>
                                <img src="@\assets\styles\img\skillTree_icon_csharp.png" alt="csharp icon" class="icon"/>
                                <div>Csharp</div>
                            </li>

                            </ol>

                            
                        </ul>
                    </div>

                    <div class="softSkillContainer">
                        <h2>Soft Skills</h2>
                        <ul class="softSkills">
                            <h3>_</h3>
                            <li v-for="(soft, index) in cvSkill.slice(0,5) " :key="index">
                                <FontAwesome  :icon="['fas', `${cvSkill[index + 11].icon}`]" class="softIcon"/>
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

