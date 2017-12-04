<template>
    <div v-if="isMenuOpen" class="side-menu">
    	
    </div>
</template>

<script>
    export default {
    	name: 'sideMenu',
    	props: ['isMenuOpen']
    }
</script>

<style>
.side-menu {
	position: fixed;
	top: 0;
	left: 0;
	padding: 10px;
	width: 300px;
	height: 708px;
	background-color: black;
	z-index: 50;
}
</style>