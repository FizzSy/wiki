<template>
    <main aria-labelledby="main-title" class="home">
        <header class="hero"><img src="~@/public/composer.png" alt="hero">
            <!-- <h1 id="main-title">yuwenlu</h1> -->
            <p class="description">
               欢迎来到我的markdown博客
            </p>
            <p class="action"><a href="javascript:;" @click="toMessage" class="nav-link action-button">留言→</a></p>
        </header>
        <div class="features">
            <div class="feature">
                <h2>A Blog</h2>
                <p>前端技术博客</p>
            </div>
            <div class="feature">
                <h2>For me</h2>
                <p>一生伏首拜阳明</p>
            </div>
            <div class="feature">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div class="theme-default-content custom content__default"></div>
        <div class="footer">
            Made by luyuwen | Powered by VuePress
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        toMessage(){
            this.$router.push({
                path:'/message/'
            })
        }
    },
}
</script>
