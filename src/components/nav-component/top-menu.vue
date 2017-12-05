<template>
	<nav>
	    <div class="nav-wrapper">
	      <div @click="toggleMenu">
	      	<img class="avalith-image" src="avalith.png">
	      </div>
	    </div>
  	</nav>
</template>

<script>
    export default {
    	name: 'topMenu',
    	data() {
    		return {
    		}
    	},
    	methods: {
    		toggleMenu() {
    			this.$emit('toggleMenu');
    		}
    	}
    }
</script>

<style>
	.nav-wrapper{
		background-color: black;
		width: 1366px;
		height: 60px;
		z-index: 100;
		position: fixed;
		top: 0px;
		left: 0px;
	}

	.avalith-image{
		margin-top: 10px;
		margin-left: 30px;
		width: 35px;
		height: 39px;
	}
</style>