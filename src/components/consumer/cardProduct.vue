<template>
    <div class=" border border-2 rounded-4 shadow p-4 mt-3" style="overflow: hidden;">
        <img :src=product.image alt="" class="image img-fluid w-100 rounded-circle shadow" style="height: 275px;">
        <h5 class="text-center fw-bold p-4">{{ product.name }}</h5>
        <button class="btn btn-success float-end fs-6">
            <router-link style="text-decoration: none; color: rgb(211, 211, 211);"
                :to="{ name: 'SP-chi-tiet', params: { idProduct: product.id } }">
                Chi tiết
            </router-link>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    name: 'CardProduct',

    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
.image {
    transition: transform .4s;
}

.image:hover {
    transform: scale(1.1);
}
</style>