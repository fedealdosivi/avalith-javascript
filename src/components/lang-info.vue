<template>
    <div>
        <div v-if="isMenuOpen">
            <div class="lang-info-toggle">
                <h5>Hola</h5>
            </div>
        </div>
        <div v-else>
            <div class="lang-info-menu">
                <h5>Chau</h5>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'langInfo',
        props: ['language','isMenuOpen'],
            data() {
                return{
                }
            },

            methods: {
                openCard(){
                    this.$emit('openCard',this.language.cardId);
                }
            }
    }
</script>

<style>
    .lang-info-menu{
        background-color: #ffffff;
        width: 1366px;
        height: 768px;
        margin-top: 60px;
        margin-left: 0px;
        z-index: 50;
    }

    .lang-info-toggle{
        background-color: #ffffff;
        width: 1366px;
        height: 768px;
        margin-top: 60px;
        margin-left: 300px;
        z-index: 50;
    }
</style>