<template>
<div class="dash-menu">
	<div v-if="isMenuOpen">
		<div class="container-toggle">
			<h3 class="dash-title">Languages and Technologies</h3>
			<div v-if="!languages.length"><h3>Nothing Here</h3></div>
			<div v-else>
				<tec-card v-for="l in languages" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="container">
			<div class="dash-title"><h3>Languages and Technologies</h3></div>
			<div v-if="!languages.length"><h3>Nothing Here</h3></div>
			<div v-else>
				<tec-card v-for="l in languages" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import lanService from '../services/lanService';
	import tecCard from './tec-card.vue';
	export default {
	        name: 'tecDashboard',
    		props: ['isMenuOpen'],	        
	        components: {
	            tecCard
	        },
	        data() {
	        	return{
	        		languages:[]
	        	}
	        },

	        created(){
	        	this.languages=this.getLanguages();
	        },

	        methods: {
	        	getLanguages(){
	        		return lanService.getLanguages();
	        	}
	        }
	    }
</script>

<style>
	.dash-menu{
		background-color: #afafaf;
		width: 1366px;
		height: 768px;
		margin-top: 60px;
		margin-left: 0px;
		z-index: 50;
	}

	.container-toggle{
		margin-left: 330px;
	}

	.container{
		margin-left: 0px;
	}
</style>