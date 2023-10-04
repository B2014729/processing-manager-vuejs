<template>
    <div class="container-fluid">
        <div class="row">
            <div class="menu col-md-2">
                <nav-menu></nav-menu>
            </div>

            <div class="main col-md-10">
                <header-component>
                </header-component>
                <div>
                    <slot name="contents">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerComponent from '../components/manufactureManagement/headerComponent.vue';
import navMenu from '../components/manufactureManagement/navMenu.vue';
export default {
    components: {
        headerComponent: headerComponent,
        navMenu: navMenu,
    },

}
</script>

<style lang="css" scoped>
.main {
    background-color: var(--colorbackground);
    padding-top: 6px;
    min-height: 730px;
}
</style>