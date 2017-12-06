<template>
<div>
	<div v-if="isMenuOpen">
		<div v-if="mutatedCardOpen">
			<lang-info :language="language" :isMenuOpen="isMenuOpen" :closeCard="closeCard"></lang-info>
		</div>
		<div v-else class="dash-toggle">
			<div class="dash-title">Languages and Technologies</div>
			<div v-if="!languages.length">Nothing Here</div>
			<div class="card-container" v-else>
				<tec-card v-for="l in languagesFilter" :openCard="openCard" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
	<div v-else>
		<div v-if="mutatedCardOpen">
			<lang-info :language="language" :isMenuOpen="isMenuOpen" :closeCard="closeCard"></lang-info>
		</div>
		<div v-else class="dash-menu">
			<div class="dash-title">Languages and Technologies</div>
			<div v-if="!languages.length"><h3>Nothing Here</h3></div>
			<div class="card-container" v-else>
				<tec-card v-for="l in languagesFilter" :openCard="openCard" :key=l.cardId :language="l"></tec-card>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import lanService from '../../services/lanService';
	import tecCard from '../card-component/tec-card.vue';
	import langInfo from '../languageInfo-component/lang-info.vue';
	export default {
	        name: 'tecDashboard',
    		props: ['isMenuOpen','isCardOpen','updateSideBar','filter','checkOption'],	        
	        components: {
	            tecCard,
	            langInfo
	        },
	        data() {
	        	return{
	        		languages:[],
	        		language:'',
	        		mutatedCardOpen:'',
	        		tec:'Frontend'
	        	}
	        },

	        computed:{
	        	languagesFilter(){
	        		const checkOption = this.checkOption;
	        		if(this.filter!="" && this.checkOption!=""){
	        		return this.languages.filter(l => l.cardTitle.toLowerCase().indexOf(this.filter.toLowerCase())>=0 &&
	        			l.cardTechnology.includes(checkOption) 
	        			);
	        		}
	        		else if(this.filter!=""){
	      				return this.languages.filter(l => l.cardTitle.toLowerCase().indexOf(this.filter.toLowerCase())>=0);
	        		}
	        		else if(checkOption!=""){
	      				return this.languages.filter(function (l) {
							  return l.cardTechnology.includes(checkOption);
							}
						);
	        		}
	        		else{
	        			return this.languages;
	        		}
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
	        		this.language=(payload);
	        		this.mutatedCardOpen=true;
	        		this.updateSideBar(this.mutatedCardOpen);
	        	},

	        	closeCard(){
	        		this.mutatedCardOpen=false;
	        		this.updateSideBar(this.mutatedCardOpen);
	        	}
	        }
	    }
</script>

<style type="text/css" src="./dashboard-style.css"></style>
