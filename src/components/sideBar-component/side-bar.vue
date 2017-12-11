<template>
    <div v-if="isMenuOpen" class="side-menu">
		<div class="side-user">
			<div class="user-data">
				<div class="dev-name" >{{this.user.name}}</div>
				<div class="dev-info">{{this.user.dni}}</div>
				<div class="dev-info">{{this.user.years}}</div>
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