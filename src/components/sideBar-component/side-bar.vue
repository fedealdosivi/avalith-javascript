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
			<input placeholder="Search in Cards" v-on:keydown="languagesFilter" v-model="langFilter" type="text" class="side-input">
			<div class="Filter-by">Filter by</div>
			<br>
			<div class="check-options">
				<input class="Frontend" v-on:click="languagesFilter" v-model="selectedOption" type="radio" name="filter" value="Frontend">Frontend<br>
				<input class="Backend" v-on:click="languagesFilter" v-model="selectedOption" type="radio" name="filter" value="Backend">Backend<br>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
    	name: 'sideBar',
    	props: ['isMenuOpen','isCardOpen','updateLanguages'],
        data() {
	        	return{
	        		user:{
	        			name:'DEV NAME',
	        			dni:'DNI XX.XXX.XXX',
	        			years: 'XX YEARS OLD'
	        		},
	        		selectedOption:'',
	        		langFilter:''
	        	}
	        },

	        methods: {
		  		languagesFilter() {
	  				this.updateLanguages(this.langFilter,this.selectedOption);
	  			}

	    	}
	}
</script>

<style type="text/css" src="./sideBar.css"></style>