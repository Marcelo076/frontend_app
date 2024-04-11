<template>
  <a-menu theme="dark" mode="inline">
    <template v-for="route in routes">
      <a-menu-item v-if="!route.children" :key="route.path">
        <RouterLink :to="route.path"><span>{{ route.name }}</span></RouterLink>
      </a-menu-item>
      <a-sub-menu v-else :key="route" :title="route.name">
        <a-menu-item v-for="(child, index) in route.children" :key="index">
          <RouterLink :to="child.path"><span>{{ child.name }}</span></RouterLink>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>


<script setup>

import routes from '@/router/routes.js'


</script>