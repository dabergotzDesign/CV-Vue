<template>
 <header>
    <nav class="navigation">
        <img
          src='./assets/img/Site-Logo_transparent.png'
          alt="dabergotzDesign Logo"
          class="logo"
        />
        <router-link @click="toggleJob" id="headLink">Job Experience</router-link>
        <a  id="headLink">Education & other Experience</a>
        <a  id="headLink">School</a>
        <a  id="headLink">Skills</a>
       <!--  <a class="menu" href="javascript:void(0);" onclick="HamburgerMenu()"><i class="fas fa-bars"></i></a> -->
      </nav>
  </header>
  <router-view/>
</template>

