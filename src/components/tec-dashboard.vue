<template>
	<div class="dash-menu">
		
	</div>
</template>

<script>
	import tecCard from './tec-card.vue';
	export default {
	        name: 'tecDashboard',
	        components: {
	            tecCard
	        },
	        data() {
	        	return{
	        	}
	        },
	        methods: {

	        }
	    }
</script>

<style>
	.dash-menu{
		background-color: #afafaf;
		width: 1366px;
		height: 768px;
		margin-top: 60px;
		margin-left: 0px;
		z-index: 50;
	}
</style>