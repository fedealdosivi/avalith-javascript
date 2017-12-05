<template>
    <div class="card">
    	<img :src="language.cardImageUrl" @click="openCard" width="80%">
        <div class="container">
        	{{ language.cardDescription}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tecCard',
        props: ['language'],
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

<style type="text/css" src="./css/tecCard.css"></style>