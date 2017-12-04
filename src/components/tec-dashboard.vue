<template>
<div>
	<div v-if="isMenuOpen">
		<div v-if="language!=null">
			{{language.cardTittle}}
		</div>
		<div v-else class="dash-toggle">
			<h3 class="dash-title">Languages and Technologies</h3>
			<div v-if="!languages.length"><h3>Nothing Here</h3></div>
			<div v-else>
				<tec-card v-for="l in languages" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
	<div v-else>
		<div v-if="language!=null">
			
		</div>
		<div v-else class="dash-menu">
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
	        		languages:[],
	        		language:null
	        	}
	        },

	        created(){
	        	this.languages=this.getLanguages();
	        },

	        methods: {
	        	getLanguages(){
	        		return lanService.getLanguages();
	        	},

	        	getLanguageById(openCardId){
	        		this.language=lanService.getLanguageById(openCardId);
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

	.dash-toggle{
		background-color: #afafaf;
		width: 1366px;
		height: 768px;
		margin-top: 60px;
		margin-left: 300px;
		z-index: 50;
	}

	.container-toggle{
		margin-left: 330px;
	}

	.container{
		margin-left: 0px;
	}
</style>