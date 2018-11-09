<template>
  <div class="tabs">
    <ul>
      <router-link :to="{path:'/home' }" tag="li" exact>
          <img class="selcet" src="@/assets/images/home1.png">
          <img class="noSelcet" src="@/assets/images/home2.png">
        <div>首页</div>
      </router-link>
      <router-link :to="{path:'/brand'}" tag="li">
          <img class="selcet" src="@/assets/images/active1.png">
          <img class="noSelcet" src="@/assets/images/active2.png">
        <div>活动</div>
      </router-link>
      <router-link :to="{path:'/member'}" tag="li">
          <img class="selcet" src="@/assets/images/class1.png">
          <img class="noSelcet" src="@/assets/images/class2.png">
        <div>课程</div>
      </router-link>
      <router-link :to="{path:'/cart'}" tag="li">
          <img class="selcet" src="@/assets/images/news1.png">
          <img class="noSelcet" src="@/assets/images/news2.png">       
        <div>资讯</div>
      </router-link>
      <router-link :to="{path:'/me'}" tag="li">
          <img class="selcet" src="@/assets/images/user1.png">
          <img class="noSelcet" src="@/assets/images/user2.png">
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {}
    },

  }

</script>
<style type="text/less">
    .tabs {
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #fff;
      box-shadow: 0 2px 4px #000;
      width: 100%;
      height: 100px;
    }
    .tabs ul {
      display: table;
      width: 100%;
    }
    .tabs ul > li {
      text-align: center;
      font-size: 16px;
      display: table-cell;
      padding: 0 12px;
      cursor: pointer;
    }
    .tabs ul > li.router-link-active{
      color: #C92725;
    }
    .tabs ul > li > div {
      font-size: 14px;
    }
    .tabs ul > li > img{
      width:48px;
      height: 48px;
      display: block;
      margin:10px auto;
    }
    .tabs ul > li > img.selcet{
      display: none;
    }
    .tabs ul > li.router-link-active > img.selcet{
      display: block;
    }
    .tabs ul > li.router-link-active > img.noSelcet{
      display: none;
    }
    
</style>