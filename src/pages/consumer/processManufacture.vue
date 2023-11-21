<template>
    <consumer-layout>
        <template #contents>
            <div class="row my-4">
                <div class="col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
                    <div class="w-75">
                        <h3 class="text-center text-success my-3">Quy trình sản xuất</h3>
                        <p class="text-center">EAST COAST là doanh nghiệp xuất khẩu thủy sản uy tín tại Việt Nam. Công ty
                            tập trung chủ lực vào
                            nuôi trồng, chế biến và xuất khẩu cá tra theo quy trình khép kín. Chúng tôi tự hào đem lại nguồn
                            sản phẩm chất lượng cao và an toàn thực phẩm theo tiêu chuẩn của Châu Âu. </p>
                        <div class="d-flex justify-content-end">
                            <button class="btn" style="background-color:rgba(4, 166, 4, 0.564);">
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="w-75">
                        <img class="w-100 rounded-circle"
                            src="https://image.tienphong.vn/w890/Uploaded/2023/pcgycivo/2021_10_29/anh-minh-hoa-872.png"
                            alt="">
                    </div>
                </div>
            </div>

            <div class="my-4 border-top">
                <h3 class="text-center text-success py-4">TRA CỨU THÔNG TIN SẢN PHẨM</h3>
                <div class="row">
                    <div class="col-md-6 col-sm-6 d-flex justify-content-end">
                        <form @submit.prevent="submitForm" class="w-50">
                            <div class="form-floating mb-2 w-100">
                                <input type="text" class="form-control" id="username" v-model="searchID">
                                <label for="username">Mã sản phẩm:</label>
                            </div>
                            <button class="btn float-end" type="submit" style="background-color: rgba(4, 166, 4, 0.564);">
                                Tra cứu ngay
                            </button>
                        </form>
                    </div>
                    <div class="col-md-6 col-sm-6 d-flex justify-content-center">
                        <div class="w-50">
                            <h5 class="fw-bold text-center">Hướng dẫn</h5>
                            <p class="text-center">Khách hàng xem thông tin sản phẩm được in phía sau bao bì sản phẩm. Nhập
                                mã sản phẩm vào ô
                                tra cứu để tiến hành tìm kím thông tin nguồn gốc và quy trình sản xuất của sả phẩm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </consumer-layout>
</template>

<script>
import consumerLayout from '@/layouts/consumerLayout.vue';
import processService from '@/service/process.service';
export default {
    components: {
        consumerLayout,
    },
    data() {
        return {
            searchID: '',
        }
    },
    methods: {
        async submitForm() {
            await processService.getProcess(this.searchID).then((result) => {
                if (result.length > 1) {
                    this.$router.push(`/tracuusanpham/${this.searchID}`);
                } else {
                    alert('Ma san pham khong ton tai');
                }
            });

        }
    }
}
</script>

<style scoped></style>