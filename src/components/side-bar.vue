<template>
    <div v-if="isMenuOpen" class="side-menu">
		<div class="side-user">
			<div class="user-data">
				<div margin-top="91" margin-left="93" witdth="132" >{{this.user.name}}</div>
				<div margin-top="122" margin-left="85" witdth="132" >{{this.user.dni}}</div>
				<div margin-top="150" margin-left="89" witdth="132" >{{this.user.years}}</div>
			</div>
		</div>
		<input placeholder="Search in Cards" v-model="filter" type="text" class="side-input">
		<div class="Filter-by">Filter by</div>
		<br>
		<div class="check-options">
			<input class="Frontend" v-model="selectedOption" type="radio" name="filter" value="frontend">Frontend<br>
			<input class="Backend" v-model="selectedOption" type="radio" name="filter" value="backend">Backend<br>
		</div>
    </div>
</template>

<script>
    export default {
    	name: 'sideBar',
    	props: ['isMenuOpen','isCardOpen'],
        data() {
	        	return{
	        		user:{
	        			name:'DEV NAME',
	        			dni:'DNI XX.XXX.XXX',
	        			years: 'XX YEARS OLD'
	        		},
	        		selectedOption:'frontend',
	        		filter:''
	        	}
	        },
	        methods: {

	        }
	    }
</script>

<style>
.side-user {
	background-color: #323335;
	width: 300px;
	height: 135px;
	margin-top: 0px;
	margin-left: 0px;
	z-index: 55;
	position: fixed;
}

.side-menu{
	background-color: black;
	width: 300px;
	height: 708px;
	margin-top:  0px;
	margin-left: 0px;
	z-index: 50;
	position: fixed;
}

.user-data{
	margin-top: 30px;
	color: white;
	size: 24px;
	letter-spacing: 0.2px;
	text-align: center;
	height: 13px;
	margin-left: 0px;
} 

.side-input{
	width: 240px;
	background-color: white;
	border: solid 5px #ffffff;
	margin-top:268px;
	margin-left:30px;
	z-index: 50;
	position: fixed;
}

.Search-in-cards {
	width: 123px;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 300;
	line-height: 1.33;
	letter-spacing: 0.2px;
	text-align: left;
	color: #f8f8f8;
}

.Filter-by {
	margin-left: 31px;
	margin-top: 319px;
	width: 63px;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 300;
	line-height: 1.33;
	letter-spacing: 0.2px;
	text-align: left;
	color: #f8f8f8;
}

.check-options{
	font-family: Roboto;
	font-size: 18px;
	font-weight: 300;
	line-height: 1.33;
	letter-spacing: 0.2px;
	color: #f8f8f8;
	margin-left: 30px;
}

</style>