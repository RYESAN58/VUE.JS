const helloWorld = new Vue({
  el: '#book',
  data: {
      title: "The Sirens of Titan",
      author: "Kurt Vonnegut",
      summary: "This is a summary of the series of Titan",
      showDetail: false
  },
  methods: {
    sayHello: function(){
      alert(this.tittle)
    },
    toggleDetails: function(){
      this.showDetail = !this.showDetail;
    }
  }
})

// const example = new Vue({
//   el: '#example',
//   data: {
//       title: "Hello",
//       message: "Thusi is your daily cat-firmation",
//       name: "Chewie",
//       img: {
//         src: 'https://placeimg.com/200/200/animals',
//         alt: 'cat',
//       }
//   }
// })
