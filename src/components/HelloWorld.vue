<template>
  <div class="hello">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <el-row>
            <el-col>
              <h3>Welcome to MilkTruckGaming!</h3>
            </el-col>
            <el-col>
              <el-button class="blog-button" @click="goToBlog">Blog</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    goToBlog() {
      window.open("https://blog.milktruckgaming.com/", "_blank");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #7a01ff;
}

.blog-button {
  background-color: #7a01ff;
  color: #FFFFFF;
}
</style>
