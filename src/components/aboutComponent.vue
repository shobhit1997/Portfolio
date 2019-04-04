<template>
<div>
<section class="intro">
<div class="row" style="padding:20px">
<div class="col-lg-3 col-sm-12 left">
<img src="../assets/shobhit.png">
</div>
<div class="col-lg-9 col-sm-12 right" style="margin-top:12px;">
<p class="lead">I am a 3rd-year undergraduate student. I am currently pursuing my B.Tech in CSE branch from JSS Academy of Technical Education Noida. I am a tech enthusiast and love working on the latest technology. I work on MEVN Stack(MongoDB,Express,Vue.js,Node.js) and Android App Development. I have a handful of experience on deploying apps on servers both cloud and local. I have experience on AWS and GCE. I have explored docker as well. I keep looking for opportunities to learn and develop new skills. I believe in project-based learning.</p>
</div>
</div>
</section>
</div>
</template>
<script>
export default{
  name: 'About'}
</script>
<style>
.intro{
  height:100%
}

.left{
  display : flex;
  justify-content : center;
  align-items : center;
  background-color:white;
  height : 100%;
  color : #FFF;

}
.right{
  display : flex;
  justify-content : center;
  align-items : center;
  background-color:white;
  height : 100%;
  color : #3d231b;
}
@media (max-width: 1200px) {
  .left{
    height: 50%
  }
  .right{
    height: 50%
  }
}
</style>
