<template>
    <el-menu :default-active="activeIndex" class="el-menu-milktruck" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home"><i class="el-icon-home"/>Home</el-menu-item>
        <el-menu-item index="blog">Blog</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "MilkTruckNavbar",
        data() {
            return {
                activeIndex: 'home'
            };
        },
        methods: {
            handleSelect(key) {
                if (key !== "blog") {
                    this.$router.push({ name: key });
                } else {
                    window.open("https://blog.milktruckgaming.com/", "_blank");
                }
            }
        }
    }
</script>

<style scoped>
.el-menu {
    background-color: #120b0b !important;
}

.el-menu-item {
    color: #FFFFFF !important;
}

.el-menu-item.is-active {
    border-bottom: 2px solid #7a01ff;
}

.el-menu-item:focus, .el-menu-item:hover {
    background-color: #7a01ff !important;
}
</style>