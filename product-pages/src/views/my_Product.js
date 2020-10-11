app.component("product-component", {
  //for syntax highlighting add es6-string-html extension
  tempate:
    /*html*/
    `
    <h2 id="amazonDepartment">{{department}} Dept</h2>
    <h3 id="amazonProduct">{{product_name}}</h3>
    <div id="product_container">
    <img id="product_img"
        :src="image_src" 
        :alt="image_alt" 
        height="400" width="560" 
        :style="(inventory>0) ? {'border':'2mm solid green'} : {}"
        :class="(inventory<=0)? 'out_of_stock':''"   
    />
    <div id="product_color_select" >
      <h4 class="section-heading">COLOR SELECT</h4>
      <!-- Vue class binding, v-for and v-on all in one -->
      <div v-for="v in variants" 
           :class="['version_'+v.color, 'color-circle']"
           @mouseover="changeColor(v.color)"
           style="display: inline-block;"
      ></div>
    </div>

    <div id="product_buy" >

      <h3 v-if="inventory>5">In stock</h3>
      <h3 v-else-if="inventory>0 && inventory<=5">Only few left!</h3>
      <h3 v-else>Out of stock</h3>

      <h2>Price - {{price}}rs</h3>
      <!-- Trying code in HTML -->
      <button
        :disabled="inventory<=0"
        @click="user.money_spent+=this.price; buyAnItem();"
      >
        BUY NOW
      </button>

    </div>
  </div>
  <hr>
  
  <h3 class="section-heading">USPs -</h3>
  <ul>
    <li v-for="usp in usps">{{usp}}</li>
  </ul>

  <h3 class="section-heading">Versions -</h3>
  <ol>
    <li v-for="ver in versions">{{ver}}</li>
  </ol>
  `,
  data() {
    return {
      department: "Electronics",
      brand: "Dell",
      product: "Inspiron 15",
      image_alt: "laptop_pic",
      selectedVariant: 0,
      usps: ["Light-Weight", "Webcam", "Bluetooth"],
      versions: ["i3-4gb", "i3-8gb", "i5-4gb", "i5-8gb"],
      variants: [
        {
          baseprice: 40000,
          color: "green",
          inventory: 8,
          image: "../assets/images/dell_green.webp",
        },
        {
          baseprice: 50000,
          color: "silver",
          inventory: 4,
          image: "../assets/images/dell.jpg",
        },
      ],
    };
  },
  methods: {
    buyAnItem() {
      if (this.variants[this.selectedVariant].inventory > 0)
        this.variants[this.selectedVariant].inventory--;
    },
    changeColor(_color) {
      for (let i = 0; i <= this.variants.length; ++i) {
        if (this.variants[i].color === _color) {
          this.selectedVariant = i;
          return;
        }
      }
    },
    init() {
      this.variants[0].inventory = 8;
      this.variants[1].inventory = 4;
    },
  },
  computed: {
    product_name() {
      return this.brand + " " + this.product;
    },
    image_src() {
      return this.variants[this.selectedVariant].image;
    },
    inventory() {
      return this.variants[this.selectedVariant].inventory;
    },
    price() {
      let bp = this.variants[this.selectedVariant].baseprice;
      let inv = this.variants[this.selectedVariant].inventory;
      if (inv <= 0) return bp;
      else return Math.ceil(bp + (1 / inv) * 1000);
    },
  },
});
