import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      tab1: [
        {
          id: "a1",
          name: "Salar Hemmati",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFMRThgpvJkZQ/profile-displayphoto-shrink_800_800/0/1618130422465?e=1649894400&v=beta&t=WWfCYNWGtWljv4hJNBwMY28Xy4B7pOZjmVeCzDqFITM",
          job: "Engineer",
          email: "salarhemmati97@gmail.com",
          tel: +963254,
        },
        {
          id: "a2",
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/28/14/hardy-getty2.jpg?quality=75&width=982&height=726&auto=webp",
          name: "Tom Hardy",
          job: "Actor",
          email: "tom_hardy@gmail.com",
          tel: +23558,
        },
        {
          id: "a3",
          image:
            "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/wpcv1tyju78gpjdo_1603703966.jpeg",
          name: "Cristiano Ronaldo",
          job: "Football Player",
          email: "ronaldocr7@gmail.com",
          tel: +14237,
        },
      ],
    };
  },

  mutations: {
    addAccount(state, memoryData) {
      const newAccount = {
        id: new Date().toISOString(),
        name: memoryData.name,
        image: memoryData.image,
        job: memoryData.job,
        email: memoryData.email,
        tel: memoryData.tel,
      };
      state.tab1.push(newAccount);
    },
  },
  actions: {
    addAccount(context, memoryData) {
      context.commit("addAccount", memoryData);
    },
  },
  getters: {
    tab1(state) {
      return state.tab1;
    },
    tab(state) {
      return (tab1Id) => {
        return state.tab1.find((tab) => tab.id === tab1Id);
      };
    },
  },
});
export default store;
