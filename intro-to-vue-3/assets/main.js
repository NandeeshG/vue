const app = Vue.createApp({
  data() {
    return {
      department: "Electronics",
      product_name: "Dell Inspiron 15",
      image_src: "./images/dell.jpg",
      image_alt: "laptop_pic",
      inventory: 10,
      price: 40000,
      usps: ["Light-Weight", "Webcam", "Bluetooth"],
      versions: ["i3-4gb", "i3-8gb", "i5-4gb", "i5-8gb"],
      user: {
        user_name: "Nandeesh",
        money_spent: 0,
      },
    };
  },
  methods: {
    buyAnItem() {
      if (this.inventory > 0) this.inventory--;
      this.updatePrice();
    },
    updatePrice() {
      if (this.inventory <= 0) this.price = 40000;
      else this.price = Math.ceil(40000 + (1 / this.inventory) * 1000);
    },
    changeColor(color) {
      if (color === "green") {
        this.image_src = "./images/dell_green.webp";
      } else if (color === "silver") {
        this.image_src = "./images/dell.jpg";
      }
    },
    init() {
      this.inventory = 10;
      this.price = 40000;
      this.user.money_spent = 0;
    },
  },
});
