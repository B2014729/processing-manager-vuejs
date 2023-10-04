<template>
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h6 class="modal-title fw-bold text-success"><i class="fa-solid fa-check"></i>
                        {{ msg }}</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" @click="onModal" class="btn btn-success" data-bs-dismiss="modal">Ok</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: 'Farm store say!',
            require,
        }
    },

    methods: {
        onModal() {
            this.$emit('ok');
        }
    }

}
</script>
<style scoped></style>