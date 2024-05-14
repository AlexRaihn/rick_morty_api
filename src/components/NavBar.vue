<template>
    <el-menu
        class="el-menu-demo"
        mode="horizontal">
            <router-link to="/">
                    Персонажи
            </router-link>
            <router-link to="/about">
                    О проекте
            </router-link>
    </el-menu>
</template>

<style scoped>
a {
    margin: 10px;
    color: black;
    text-decoration: none;
}
a:visited {
    color: black;
    text-decoration: none;
}
a:hover {
    color: green;
}
a.router-link-exact-active {
    color: green;
}
</style>