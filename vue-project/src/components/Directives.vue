<script setup>
// Driective
// 1. v-if:
// - Hiển thị phần tử khi điều kiện đúng.
// - Không hiển thị khi phần từ khi điều kiện sai.
let isVisible = false; // true
// 2. v-show
// - Gần giống v-if
// - Không xoá hoàn toàn thẻ HTML khỏi DOM
// - Khi sử dụng v-show nếu điều kiện sai thì sẽ thêm display: none
let isStatus = false;
// => Khi có điều kiện lớn thì sử dụng v-if và ngược lại
// 3. v-on
// - Dùng để lắng nghe sự kiện: onclick, onchange, onsubmit, ...
function sayHello() {
  alert(`Hello....`);
}
// - Cú pháp: @event
function hienThi() {
  console.log(`Bạn đã chọn....`);
}
// VD: @click
// 4. v-for: Vòng lặp
let foodList = ["🥝", "🍓", "🍉"];
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <!-- Sử dụng v-if để hiện thẻ h3 -->
      <h3 v-if="isVisible">Nội dung sẽ được hiển thị nếu điều kiện đúng</h3>
      <!-- Sử dụng v-show để hiển thị thẻ p -->
      <p v-show="isStatus">v-show sẽ hoạt động như thế nào !!!</p>
    </div>
    <div class="col-md-12">
      <!-- Sử dụng v-on với sự kiện click -->
      <button class="btn btn-info" @click="sayHello">Ấn điiii.........</button>
      <!-- Sử dụng v-on với sự kiện onchange: @change -->
      <!-- Mong muốn: Khi chọn vào 1 trong 3 lựa chọn thì sẽ console.log('Bạn đã chọn ...') -->
      <select class="" @change="hienThi">
        <option disabled selected>Chọn...</option>
        <option value="">Lựa chọn 1</option>
        <option value="">Lựa chọn 2</option>
        <option value="">Lựa chọn 3</option>
      </select>
    </div>
    <div class="col-md-12">
      <!-- Sử dụng v-for để lấy ra các phần tử trong mảng -->
      <li v-for="(food, index) in foodList" :key="index">
        {{ index }} - {{ food }}
      </li>
    </div>
  </div>
</template>

<style scoped></style>
