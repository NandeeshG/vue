const app = Vue.createApp({
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
          image: "./images/dell_green.webp",
        },
        {
          baseprice: 50000,
          color: "silver",
          inventory: 4,
          image: "./images/dell.jpg",
        },
      ],
      user: {
        user_name: "Nandeesh",
        money_spent: 0,
      },
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
      this.user.money_spent = 0;
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
