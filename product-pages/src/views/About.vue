<template>
    <div class="about">
        <div id="app">
            <h1 id="amazonHeading">Shonine</h1>

            <product-component> </product-component>

            <hr />
            <br /><br />
            <hr />

            <footer>
                <h3>Hi {{ user.user_name }}</h3>
                <h3>Money spent - {{ user.money_spent }}</h3>
                <button @click="init">RESET</button>
            </footer>
        </div>
    </div>

    <script src="./my_Product.js"></script>
    <script>
        const mountedApp = app.mount("#app");
    </script>
</template>

<style>
#amazonHeading {
    font-size: 50px;
    text-align: center;
    text-decoration: goldenrod overline underline;
    box-shadow: 0mm 0mm 10mm goldenrod;
    background-color: gray;
    color: white;
    border-radius: 8mm;
    padding: 4mm 1mm 2mm 1mm;
    width: 70%;
    margin: 2% 10% 0% 15%;
}

#amazonDepartment {
    font-size: 30px;
    text-align: center;
    text-decoration: cyan overline underline;
    box-shadow: 0mm 0mm 9mm cyan;
    background-color: gray;
    color: white;
    border-radius: 4mm;
    padding: 3mm 1mm 2mm 1mm;
    width: 60%;
    margin: 2% 10% 0% 20%;
}

#amazonProduct {
    font-size: 30px;
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: gold overline underline;
    box-shadow: 0mm 0mm 8mm gold;
    background-color: gray;
    color: white;
    border-radius: 2mm;
    padding: 3mm 1mm 2mm 1mm;
    width: 50%;
    margin: 2% 10% 5% 25%;
}

.color-circle {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 0mm black solid;
    margin: 1mm 1mm 1mm 1mm;
}
.version_green {
    background-color: green;
}
.version_silver {
    background-color: silver;
}

.section-heading,
#product_buy h3 {
    font-style: italic;
    font-family: Verdana, sans-serif;
    border-width: 5px;
    border-color: black;
    border-style: double;
    text-align: center;
    padding: 5px;
    width: max-content;
    background-color: cyan;
}

.out_of_stock {
    border: 2mm solid red;
}

#product_container {
    position: relative;
}

#product_img {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
}

#product_color_select {
}

#product_buy {
}

#product_buy h2 {
    /*price*/
    color: blue;
}
#product_buy button {
    font-size: 30px;
    box-shadow: 0mm 0mm 5mm cyan;
}
</style>
<script src="./my_main.js"></script>
