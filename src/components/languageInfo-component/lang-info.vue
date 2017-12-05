<template>
    <div>
        <div v-if="isMenuOpen">
            <div class="lang-info-toggle">
                <div class="lang-image">
                    <img class="img-lang" :src="lang.cardPost.postImageUrl">
                    <div class="back-class" @click="close">Back</div>
                </div>
                <div class="lang-text-container">
                    {{lang.cardPost.postDescription}}
                </div>
            </div>
        </div>
        <div v-else>
            <div class="lang-info-menu">
                <div class="lang-image">
                    <img class="img-lang" :src="lang.cardPost.postImageUrl">
                    <div class="back-class" @click="close">Back</div>
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
        props: ['language','isMenuOpen','closeCard'],
            data() {
                return{
                    lang:''
                }
            },

            created(){
                this.lang=this.language;
            },

            methods: {

                close(){
                    this.closeCard();
                }
            }
    }
</script>

<style type="text/css" src="./languageInfo.css"></style>