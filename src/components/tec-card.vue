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

<style>
    .card {
    	float: left;
        width: 325px;
        height: 408px;
        background-color: white;
        padding: 30px;
        margin-bottom: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    	transition: 0.3s;
        margin-left: 30px;
    }


	.container {
	    padding: 2px 16px;
	}

</style>