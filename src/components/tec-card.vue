<template>
    <div class="card">
        {{ language.cardTitle }}
    </div>
</template>
<script>
    export default {
        name: 'tecCard',
        props: ['language']
    }
</script>

<style>
    .card {
        width: 500px;
        background-color: white;
        padding: 30px;
        margin-bottom: 10px;
    }
</style>