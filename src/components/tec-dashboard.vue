<template>
	<div class="dash-menu">
		<div class="container">
			<div class="dash-title">Languages and Technologies</div>
			<div v-if="!languages.length"></div>
			<div v-else>
				<tec-card v-for="l in languages" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
</template>

<script>
	import lanService from '../services/lanService';
	import tecCard from './tec-card.vue';
	export default {
	        name: 'tecDashboard',
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
		z-index: 50;
	}

	.container{
		margin-left: 330px;
	}
</style>