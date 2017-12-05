<template>
<div>
	<div v-if="isMenuOpen">
		<div v-if="mutatedCardOpen">
			<lang-info :language="language" :isMenuOpen="isMenuOpen" @closeCard="closeCard"></lang-info>
		</div>
		<div v-else class="dash-toggle">
			<div class="dash-title">Languages and Technologies</div>
			<div v-if="!languages.length">Nothing Here</div>
			<div v-else>
				<tec-card v-for="l in languages" @openCard="openCard" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
	<div v-else>
		<div v-if="mutatedCardOpen">
			<lang-info :language="language" :isMenuOpen="isMenuOpen" @closeCard="closeCard"></lang-info>
		</div>
		<div v-else class="dash-menu">
			<div class="dash-title">Languages and Technologies</div>
			<div v-if="!languages.length"><h3>Nothing Here</h3></div>
			<div v-else>
				<tec-card v-for="l in languages" @openCard="openCard" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import lanService from '../services/lanService';
	import tecCard from './tec-card.vue';
	import langInfo from './lang-info.vue';
	export default {
	        name: 'tecDashboard',
    		props: ['isMenuOpen','isCardOpen'],	        
	        components: {
	            tecCard,
	            langInfo
	        },
	        data() {
	        	return{
	        		languages:[],
	        		language:'',
	        		mutatedCardOpen:''
	        	}
	        },

	        created(){
	        	this.languages=this.getLanguages();
	        	this.mutatedCardOpen=this.isCardOpen;
	        },

	        methods: {
	        	getLanguages(){
	        		return lanService.getLanguages();
	        	},

	        	openCard(payload){
	        		this.language=lanService.getLanById(payload);
	        		this.mutatedCardOpen=true;
	        		this.$emit('updateSideBar');
	        	},

	        	closeCard(){
	        		this.mutatedCardOpen=false;
	        		this.$emit('updateSideBar');
	        	}
	        }
	    }
</script>

<style>
	.dash-tittle{
		background-color: black;
	}
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

</style>