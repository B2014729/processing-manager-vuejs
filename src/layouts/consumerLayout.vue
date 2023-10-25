<template>
    <div class="container-fluid">
        <header-consumer>

        </header-consumer>
        <nav-consumer>

        </nav-consumer>
        <slot name="contents"></slot>
        <footer-component></footer-component>

    </div>
</template>

<script>
import headerConsumer from '../components/consumer/headerComponent.vue';
import navConsumer from '../components/consumer/navComponent.vue';
import footerComponent from '@/components/consumer/footerComponent.vue';
export default {
    components: {
        headerConsumer,
        navConsumer,
        footerComponent
    }
}

</script>

<style scoped lang="css"></style>