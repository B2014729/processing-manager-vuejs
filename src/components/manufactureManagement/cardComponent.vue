<template>
    <div class="card mt-3 p-3 shadow bg-body-tertiary rounded">
        <div class="card-content">
            <div class="card-body">
                <div class="media d-flex justify-content-between">
                    <div class="align-self-center">

                        <!-- Cart for statistics page  -->
                        <slot name="icon-card"></slot>
                    </div>
                    <div class="media-body text-right float-end">
                        <slot name="counts"></slot>
                        <slot name="title-card"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped></style>