<template>
    <consumer-layout>
        <template #contents>
            <div class="banner mt-2">
                <div style="padding-top: 100px;" class="w-50 text-center">
                    <h1 class="text-white fw-bold">Wellcome to East Coast</h1>
                    <p class="w-100 text-white ps-5">East Coast – là chuỗi cửa hàng chế biến thủy sản hàng đầu, có
                        quy trình chế biến đưuọc quản lí nghiêm ngặc đàm bảo tốt cho sức khỏe người dùng,
                        được
                        đầu tư bởi
                        Công ty TNHH Đầu
                        tư Quốc tế East Coast hoạt động trong lĩnh vực thủy sản . Chúng
                        tôi hiểu rằng: Thực phẩm rất quan trọng, tác động lâu dài đến sức khỏe, đời sống gia đình và xã hội.
                        Do vậy, chọn được nguồn thực phẩm tốt, phong phú cho gia đình là công việc khó nhọc của người nội
                        trợ; phụ thuộc rất nhiều vào kiến thức và mức độ quan tâm về nguồn thực phẩm, là trăn trở của chúng
                        tôi khi trải nghiệm công việc nội trợ...và East Coast được hình thành từ sự trăn trở và trải
                        nghiệm quý báu đó</p>
                </div>
            </div>
            <hr>
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <img class="img-fluid" src="https://donfood.vn/wp-content/uploads/2021/05/thuc-pham-dong-lanh.jpg"
                            alt="">
                    </div>
                    <div class="col-md-7 text-center mt-5">
                        <h2 class="text-success">Thương Hiệu</h2>
                        <div class="d-flex justify-content-center">
                            <p class="w-75 fs-5 text-secondary">Chúng tôi cam kết mang đến cho khách hàng những sản phẩm
                                chất lượng và an
                                toàn,
                                với
                                nguồn gốc rõ
                                ràng và được kiểm định đầu vào nghiêm ngặt. Ngoài ra, chúng tôi cũng luôn tìm kiếm và cập
                                nhật
                                các sản phẩm mới nhất và phù hợp với nhu cầu của khách hàng.</p>
                        </div>
                    </div>
                </div>

            </div>
        </template>
    </consumer-layout>
</template>

<script>
import consumerLayout from '../../layouts/consumerLayout.vue';
export default {
    components: {
        consumerLayout,
    },
}
</script> 
<style>
.banner {
    background: url('https://c8.alamy.com/zooms/9/c86225e956e841bca4c313954e4ab2cd/2atf4yt.jpg') no-repeat center center;
    background-size: cover;
    height: 450px;
}
</style>