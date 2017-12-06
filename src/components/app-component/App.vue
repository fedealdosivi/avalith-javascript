<template>
    <div class="app">
        <top-menu :toggleMenu="toggleMenu"></top-menu>
        <side-bar :updateLanguages="updateLanguages" :isMenuOpen="isMenuOpen" :isCardOpen="isCardOpen"></side-bar>
        <tecDashboard :filter="filter" :checkOption="checkOption" :updateSideBar="updateSideBar" :isMenuOpen="isMenuOpen"></tecDashboard>
        
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
                isMenuOpen: true,
                isCardOpen: false,
                filter:'',
                checkOption:''
            }
        },

        created(){
            this.mutatedCardOpen=this.isCardOpen;
        },

        methods: {

            updateLanguages(inputFilter,selectedOption){
                this.filter=inputFilter;
                this.checkOption=selectedOption;
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
