<template>
    <div class="card">
    	<img :src="language.cardImageUrl" width="80%">
        <div class="container">
        	{{ language.cardDescription}}
            <button @click="openCard">Details</button>
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
                    this.$emit('openCard',this.language);
                }
            }
    }
</script>

<style>
    .card {
    	float: left;
        width: 28%;
        background-color: white;
        padding: 30px;
        margin-bottom: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    	transition: 0.3s;
    }

	.card:hover {
	    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}

	.container {
	    padding: 2px 16px;
	}

</style>