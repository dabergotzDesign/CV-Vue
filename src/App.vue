<template>
 <header>
    <nav class="navigation">
        <img
          src='./assets/styles/img/Site-Logo_transparent.png'
          alt="dabergotzDesign Logo"
          class="logo"
        />
        <!-- 'a' replaced by 'router-link' -->
        <router-link to="/home"  id="headLink">Home</router-link>
        <router-link to="/jobExp"  id="headLink">Job Experience</router-link>
        <router-link to="/edExp" id="headLink">Education & other Experience</router-link>
        <router-link to="/schoolExp" id="headLink">School</router-link>
        <router-link to="/skills" id="headLink">Skills</router-link>
       <!--  <div class="menu" href="javascript:void(0);" onclick="HamburgerMenu()"><i class="fas fa-bars"></i></div> -->
      </nav>
  </header>
  <router-view  :cvInventory="cvInventory" :cvSkill="cvSkill"/>

</template>

<script>
import cvdata from './cvdata.json'
import skillData from './skilldata.json'


export default {
  data () {
    return{  
      cvInventory: cvdata,
      cvSkill: skillData 
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll)
    this.lastScrollPosition = window.pageYOffset
  },
  methods:{
    onScroll(){
      if(window.pageYOffset <= 0){
        document.querySelector('.navigation').style.background= 'rgba(20,20,20,0.5)'
      }
      if(window.pageYOffset > 0){
        document.querySelector('.navigation').style.background= 'rgba(20,20,20,1)'
      }
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>


