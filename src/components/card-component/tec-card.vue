<template>
    <b-card :img-src="language.cardImageUrl"
                img-fluid
                img-alt="image"
                img-top @click="open">
            <p class="card-text">
                {{language.cardDescription}}
            </p>
    </b-card>
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