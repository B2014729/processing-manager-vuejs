<template>
    <header class="row">
        <div class="logo col-md-2 d-flex align-items-center justify-content-end">
            <router-link :to="{ name: 'Thong-ke-SX' }" class="logo-text">EAST COAST</router-link>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-end">
            <form action="" method="POST">
                <input class="input-search" type="text" name="search" placeholder="Search...">
                <button class="btn btn-secondary ms-1"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
        <div class="col-md-3">
            <div class="d-flex align-items-center">
                <i class="fa-solid fa-phone fs-3 p-2 icon"></i>
                <div class="pt-2">
                    <span class="fw-bold">Hotline: 1800 1080</span>
                    <p style="font-size: 14px;">Địa chỉ: 124/11A, đường 3/2, Xuân Khánh, Ninh Kiều, Tp. Cần Thơ.</p>
                </div>
            </div>
        </div>
        <div class="col-md-1  d-flex align-items-center justify-content-center">
            <router-link :to="{ name: 'login' }">
                <button class="btn btn-secondary rounded-circle"><i class="fa-solid fa-user"></i></button>
            </router-link>
        </div>
    </header>
</template>
<script>
</script>
<style scoped>
header {
    background-color: var(--colorbackground);
    border-bottom: 1px solid rgba(156, 155, 155, 0.601);
}

.logo-text {
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    padding: 20px 0;
    color: rgb(1, 143, 31);
}

.icon {
    color: rgb(1, 143, 31);
}

.input-search {
    border-radius: 4px;
    padding: 10px;
    height: 37px;
}
</style>