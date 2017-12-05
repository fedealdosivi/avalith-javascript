<template>
    <div class="app">
        <top-menu :toggleMenu="toggleMenu"></top-menu>
        <side-bar :isMenuOpen="isMenuOpen" :isCardOpen="isCardOpen"></side-bar>
        <tecDashboard :isMenuOpen="isMenuOpen"></tecDashboard>
        
    </div>
</template>

<script>
    import topMenu from '../nav-component/top-menu.vue';
    import sideBar from '../sideBar-component/side-bar.vue';
    import tecDashboard from '../dashboard-component/tec-dashboard.vue';

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
                isCardOpen: false
            }
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            },

            updateSideBar(payload){
                console.log(this.isCardOpen);
                this.isCardOpen=payload;
                console.log(this.isCardOpen);
            }
        }
    }
</script>
