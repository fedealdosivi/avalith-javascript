<template>
    <div class="app">
        <top-menu @toggleMenu="toggleMenu"></top-menu>
        <side-bar :isMenuOpen="isMenuOpen"></side-bar>
        <tecDashboard></tecDashboard>
        
    </div>
</template>

<script>
    import topMenu from './top-menu.vue';
    import sideBar from './side-bar.vue';
    import tecDashboard from './tec-dashboard.vue';

    export default {
        name: 'app',
        components: {
            topMenu,
            sideBar,
            tecDashboard
        },
        data() {
            return {
                isMenuOpen: true,
            }
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    }
</script>
