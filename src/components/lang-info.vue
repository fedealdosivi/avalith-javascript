<template>
    <div>
        <div v-if="isMenuOpen">
            <div class="lang-info-toggle">
                <div class="lang-image">
                    <img :src="lang.cardImageUrl" width="100%">
                    <button @click="closeCard">Back</button>
                </div>
                <div class="lang-text-container">
                    <h3>{{lang.cardDescription}}</h3>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="lang-info-menu">
                <div class="lang-image">
                    <img :src="lang.cardImageUrl" width="100%">
                    <button @click="closeCard">Back</button>
                </div>
                <div class="lang-text-container">
                    <h3>{{lang.cardDescription}}</h3>
                </div>
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
                    lang:''
                }
            },

            created(){
                this.lang=this.language;
                console.log(this.lang);
            },

            methods: {
                openCard(){
                    this.$emit('openCard',this.language.cardId);
                },

                closeCard(){
                    this.$emit('closeCard');
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

    .lang-image {
      width: 1066px;
      height: 388px;
    }

    .lang-text-container{
        width: 696px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 300;
        line-height: 2;
        letter-spacing: 0.2px;
        text-align: left;
        color: #000000;
    }


</style>