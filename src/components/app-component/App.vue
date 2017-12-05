<template>
    <div class="app">
        <top-menu :toggleMenu="toggleMenu"></top-menu>
        <side-bar :updateLanguages="updateLanguages" :languages="languages" :isMenuOpen="isMenuOpen" :isCardOpen="isCardOpen"></side-bar>
        <tecDashboard :languages="languages" :updateSideBar="updateSideBar" :isMenuOpen="isMenuOpen"></tecDashboard>
        
    </div>
</template>

<script>
    import lanService from '../../services/lanService';
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
                languages:[],
                isMenuOpen: true,
                isCardOpen: false
            }
        },

        created(){
            this.languages=this.getLanguages();
            this.mutatedCardOpen=this.isCardOpen;
        },

        methods: {
            getLanguages(){
                return lanService.getLanguages();
            },

            updateLanguages(payload){
                this.languages=payload;
            },

            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            },

            updateSideBar(payload){
                this.isCardOpen=payload;
            }
        }
    }
</script>
