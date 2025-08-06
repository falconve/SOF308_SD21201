<script setup>
// Import Component Demo
import Demo from "./components/Demo.vue";
import Bootstrap from "./components/Bootstrap.vue";
import Directives from "./components/Directives.vue";
import Ref from "./components/Ref.vue";
import Reactive from "./components/Reactive.vue";
import Props from "./components/Props.vue";
import ChildCard from "./components/ChildCard.vue";
</script>

<template>
  <div class="container">
    <!-- Sử dụng component Demo -->
    <!-- <Demo /> -->
    <!-- Sử dụng component Bootstrap -->
    <!-- <Bootstrap /> -->
    <!-- Sử dụng component Directive -->
    <!-- <Directives /> -->
    <!-- Sử dụng component Ref -->
    <!-- <Ref /> -->
    <!-- Sử dụng component Reactive -->
    <!-- <Reactive /> -->
    <!-- Sử dụng component Props -->
    <!-- <Props /> -->
    <!-- Sử dụng component ChildCard -->
    <!-- <ChildCard /> -->

    <!-- Dùng RouterLink để điều hướng trang / -->
    <RouterLink to="/"></RouterLink>
    <!-- Dùng RouterLink để điều hướng trang /demo -->
    <RouterLink to="/demo">Tới trang demo</RouterLink>
    <!-- Dùng RouterView để hiện thị nội dung tương ứng của route -->
    <RouterView />
  </div>
</template>

<style scoped></style>
