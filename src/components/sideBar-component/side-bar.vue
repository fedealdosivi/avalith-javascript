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
			<div class="side-input">
					<input placeholder="Search in Cards" class="input-search" type="text" v-on:keydown="languagesFilter" v-model="langFilter">
			</div>
			<div class="check-options">
				Filter By
				<label class="radio-container">Frontend
					<input type="radio" v-on:click="languagesFilter" v-model="selectedOption" name="filter" value="Frontend" >
					<span class="checkmark"></span>
				</label>
				<label class="radio-container">Backend
					<input v-on:click="languagesFilter" v-model="selectedOption" type="radio" name="filter" value="Backend">
					<span class="checkmark"></span>
				</label>
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