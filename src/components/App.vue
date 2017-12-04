<template>
    <div class="app">
        <top-menu></top-menu>
        <side-bar :isMenuOpen="isMenuOpen"></side-bar>
        <tec-card></tec-card>
    	<router-view></router-view>
    </div>
</template>

<script>
    import topMenu from './top-menu.vue';
    import sideBar from './side-bar.vue';
    import tecCard from './tec-card.vue';

    export default {
        name: 'app',
        components: {
            topMenu,
            sideBar,
            tecCard
        },
        data() {
            return {
                isMenuOpen: true,
            }
        },
        methods: {
            toggleMenu(payload) {
                console.log(payload);
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    }
</script>

<style scoped>
</style>
