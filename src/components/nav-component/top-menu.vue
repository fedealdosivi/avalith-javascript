<template>
	<nav>
	    <div class="nav-wrapper">
	      <div @click="openMenu">
	      	<img class="avalith-image" src="avalith.png">
	      </div>
	    </div>
  	</nav>
</template>

<script>
    export default {
    	name: 'topMenu',
        props:['toggleMenu'],
    	data() {
    		return {
    		}
    	},
    	methods: {
    		openMenu() {
    			this.toggleMenu();
    		}
    	}
    }
</script>
<style type="text/css" src="./css/topMenu.css"></style>