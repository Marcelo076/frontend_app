<template>
  <a-layout :style="{ minHeight: '100vh' }">
    <a-layout-sider>
      <sidebar/>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header :style="headerStyle">
       
      </a-layout-header> -->
      <a-layout-content :style="contentStyle">
        
        <RouterView></RouterView>
   
       
      </a-layout-content>
      
    </a-layout>
  </a-layout>
</template>

<script setup>
import { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue'
import sidebar from '@/components/AppComponents/sidebar.vue'



const headerStyle = {
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  padding: '20px',
  backgroundColor: '#f0f2f5',
  overflowY: 'auto', 
};


</script>


