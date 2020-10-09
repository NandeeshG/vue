const app = Vue.createApp({
  data() {
    return {
      user: {
        user_name: "Nandeesh",
        money_spent: 0,
      },
    };
  },
  methods: {
    init() {
      this.user.money_spent = 0;
    },
  },
  computed: {},
});
