<template>
    <div v-if="isMenuOpen" class="side-menu">
		<div class="side-user"></div>
		<input placeholder="Placeholder" id="first_name" type="text" class="side-input">
		<label for="first_name">First Name</label>
    </div>
</template>

<script>
    export default {
    	name: 'sideBar',
    	props: ['isMenuOpen']
    }
</script>

<style>
.side-user {
	background-color: grey;
	width: 300px;
	height: 135px;
	top: 60px;
	left: 0;
}

.side-menu{
	background-color: black;
	width: 300px;
	height: 708px;
	top: 60px;
	left: 0;
}

.side-input{
	background-color: black;
	width: 30px;
	height: 1px;
	top:30px;
	left:268px;
}
</style>