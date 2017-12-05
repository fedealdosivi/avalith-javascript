<template>
    <div class="card">
    	<img :src="language.cardImageUrl" @click="open" width="80%">
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

<style type="text/css" src="./css/tecCard.css"></style>