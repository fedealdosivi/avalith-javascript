<template>
	<nav>
	    <div class="nav-wrapper">
	      <a  @click="toggleMenu">
	      	<img src="avalith.png">
	      </a>
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
	}
</style>