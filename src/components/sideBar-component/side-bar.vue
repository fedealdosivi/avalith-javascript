<template>
    <div v-if="isMenuOpen" class="side-menu">
		<div class="side-user">
			<div class="user-data">
				<div margin-top="91" margin-left="93" witdth="132" >{{this.user.name}}</div>
				<div margin-top="122" margin-left="85" witdth="132" >{{this.user.dni}}</div>
				<div margin-top="150" margin-left="89" witdth="132" >{{this.user.years}}</div>
			</div>
		</div>
		<div v-if="!isCardOpen">
			<input placeholder="Search in Cards" v-model="filtro" type="text" class="side-input">
			<div class="Filter-by">Filter by</div>
			<br>
			<div class="check-options">
				<input class="Frontend" v-model="selectedOption" type="radio" name="filter" value="frontend">Frontend<br>
				<input class="Backend" v-model="selectedOption" type="radio" name="filter" value="backend">Backend<br>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
    	name: 'sideBar',
    	props: ['isMenuOpen','isCardOpen','languages','updateLanguages'],
        data() {
	        	return{
	        		user:{
	        			name:'DEV NAME',
	        			dni:'DNI XX.XXX.XXX',
	        			years: 'XX YEARS OLD'
	        		},
	        		selectedOption:'frontend',
	        		filtro:'',
	        		hideMenu:false
	        	}
	        },

	        computed: {
		  	languagesFilter() {
		  		this.updateLanguages(this.languages.filter(l => l.cardTitle.toLowerCase().indexOf(this.filtro.toLowerCase())));
		  		}
		  	},
	        created(){
	        	console.log(this.isCardOpen);
	        	this.hideMenu=this.isCardOpen;
	        },
	        methods: {

	        }
	    }
</script>

<style type="text/css" src="./sideBar.css"></style>