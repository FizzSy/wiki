<template>
    <div>
        <div class="test" v-for="item in arr">{{test}}</div>
        <!-- <img :src="$withBase('/logo.png')">  -->
        <img src="~@/public/logo.png"> 
    </div>

</template>

<script>
export default {
    data() {
        return {
            test: 'hello world',
            arr: 3
        }
    }
}
</script>

<style lang="scss">
.test{
    color:red
}
</style>

