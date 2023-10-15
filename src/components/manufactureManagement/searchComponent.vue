<template>
    <div class="ms-2 mb-2 w-100 row">
        <form @submit.prevent="submit" class="col-md-9 col-12 d-flex">
            <input class="border border-secondary rounded-2 w-100" type="text" :placeholder="`${msg}`"
                v-model="searchInfor">
            <button class="mx-2 btn btn-secondary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div class="col-md-3 d-flex justify-content-end">
            <button class="btn btn-secondary me-3" @click="onFilter"><i class="fa-solid fa-filter"
                    style="font-size: 10px;"></i></button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchInfor: '',
        }
    },

    props: {
        msg: {
            type: String,
            default: 'Information default',
            require
        }
    },

    methods: {
        submit() {
            this.$emit('submitFrom', this.searchInfor)
        },

        onFilter() {
            this.$emit('onFilter')
        }
    },
}
</script>
<style lang="css" scoped></style>