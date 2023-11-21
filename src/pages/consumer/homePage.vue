<template>
    <consumer-layout>
        <template #contents>
            <!-- Slide--------------- -->
            <div id="carouselExampleInterval" class="carousel slide my-2    " data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex justify-content-center" data-bs-interval="10000">
                        <img src="https://www.mekongfish.vn/uploaded/slide/1.png" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://www.mekongfish.vn/uploaded/slide/2.png" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.mekongfish.vn/uploaded/slide/3.png" class="d-block w-100" alt="">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <!-- About--------------------- -->
            <div class="row my-5 border-top">
                <div class="col-md-6 col-sm-6 col-12">
                    <div class="h-100 d-flex justify-content-center  align-items-center">
                        <div class="w-75">
                            <h5 class="text-center text secondary my-4">THÀNH LẬP NĂM 2018</h5>
                            <h3 class="text-center text-success">ĐƯA THỦY SẢN VIỆT NAM ĐI KHẮP THẾ GIỚI</h3>
                            <p class="text-center">
                                Sau nhiều năm hoạt động, East Coast tự hào trở thành doanh nghiệp chế biến thủy sản xuất
                                khẩu
                                lớn nhất Việt Nam và là doanh nghiêp duy nhất ở Việt Nam có quy trình sản xuất khép kín
                                từ
                                sản
                                xuất thức ăn chăn nuôi đến nuôi trồng, chế biến và xuất khẩu và cũng là đơn vị dẫn đầu
                                kim
                                ngạch
                                xuất khẩu mặt hàng này của Việt Nam.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                    <div>
                        <img src="https://www.trungtamthuysantphcm.vn/wp-content/uploads/2018/06/du-an-ha-tang-khu-che-bien-thuy-san-813.jpg"
                            alt="">
                    </div>
                </div>
            </div>
            <!-- Outstanding product -------------------------->
            <div class="border-top">
                <h3 class="text-center text-success my-5">SẢN PHẨM VỚI TIÊU CHUẨN CHẤT LƯỢNG HÀNG ĐẦU</h3>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="d-flex justify-content-center my-3">
                            <div class="w-75">
                                <img class="w-100" src="http://hungvuongpanga.com/uploads/image/2016/08/news_1470234754.png"
                                    alt="">
                                <span>
                                    <h4 class="text-center">Half-Trimmed</h4>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center  my-3">
                            <div class="w-75">
                                <img class="w-100" src="http://hungvuongpanga.com/uploads/image/2016/08/news_1470234691.png"
                                    alt="">
                                <span>
                                    <h4 class="text-center">Well-Trimmed</h4>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center  my-3">
                            <div class="w-75">
                                <img class="w-100" src="http://hungvuongpanga.com/uploads/image/2016/10/news_1475339435.png"
                                    alt="">
                                <span>
                                    <h4 class="text-center">Roll Rose</h4>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-12">
                        <div class="d-flex justify-content-center  my-3">
                            <div class="w-75">
                                <img class="w-100" src="http://hungvuongpanga.com/uploads/image/2016/08/news_1470234714.png"
                                    alt="">
                                <span>
                                    <h4 class="text-center">Un-Trimmed</h4>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center  my-3">
                            <div class="w-75">
                                <img class="w-100"
                                    src="http://hungvuongpanga.com/uploads/image/2016/08/news_1470234691b.png" alt="">
                                <span>
                                    <h4 class="text-center">Chunk or Steak</h4>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center  my-3">
                            <div class="w-75">
                                <img class="w-100" src="http://hungvuongpanga.com/uploads/image/2016/10/news_1475339449.png"
                                    alt="">
                                <span>
                                    <h4 class="text-center">Portion</h4>
                                </span>
                            </div>
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