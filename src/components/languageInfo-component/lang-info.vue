<template>
    <div>
        <div v-if="isMenuOpen">
            <div class="lang-info-toggle">
                <div class="lang-image">
                    <img :src="lang.cardPost.postImageUrl">
                    <button @click="closeCard">Back</button>
                </div>
                <div class="lang-text-container">
                    {{lang.cardPost.postDescription}}
                </div>
            </div>
        </div>
        <div v-else>
            <div class="lang-info-menu">
                <div class="lang-image">
                    <img :src="lang.cardPost.postImageUrl">
                    <button @click="closeCard">Back</button>
                </div>
                <div class="lang-text-container">
                    {{lang.cardPost.postDescription}}
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

<style type="text/css" src="./css/languageInfo.css"></style>