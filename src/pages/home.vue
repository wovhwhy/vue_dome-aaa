<template>
    <div class="head">
        <Headerlist/>
    </div>
    <div class="main">
        <h1>app</h1>
    </div>
    
</template>

<script>
import Headerlist from '../components/header.vue'
export default {
    name: 'home',
    components: {
        Headerlist
    }
}
</script>