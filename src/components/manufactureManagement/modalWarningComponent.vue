<template>
    <div class="modal" id="ModalWarning">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h6 class="modal-title fw-bold text-warning"><i class="fa-solid fa-triangle-exclamation"></i>
                        {{ msg }}</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" @click="onModal" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
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
}
</script>
<style scoped></style>