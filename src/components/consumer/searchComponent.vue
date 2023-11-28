<template>
    <div class="float-end mb-3">
        <form @submit.prevent="submit" class="d-flex w-100">
            <input type="text" class="form-control rounded-0 rounded-start-2" placeholder="Bạn cần tìm kiếm sản phẩm?"
                aria-label="Recipient's username" aria-describedby="button-addon2" :value="modelValue" @keyup.enter="submit"
                @input="updateModelValue">
            <button class="btn btn-secondary border-1 rounded-0 rounded-end-2" type="submit" id="button-addon2"><i
                    class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: String,
            required: true,
            default: ''
        }
    },

    methods: {
        submit() {
            this.$emit('submit');
        },

        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
    }
}
</script>
<style></style>