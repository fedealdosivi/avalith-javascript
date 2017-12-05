<template>
    <div class="card">
    	<img class="image-card" :src="language.cardImageUrl" @click="open">
        <div class="container">
        	{{ language.cardDescription}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tecCard',
        props: ['language','openCard'],
            data() {
                return{
                }
            },

            methods: {
                open(){
                    this.openCard(this.language);
                }
            }
    }
</script>

<style type="text/css" src="./tecCard.css"></style>