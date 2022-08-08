for (let index = 1; index <= 3; index++) {
    let random = Math.random();
    console.log(Math.round(random * 100));
  }
  
  const obj = {
    name: "foo",
    pass: 123,
    email: "foo@example.com",
    address: "123 Main Street",
    county: "Brooks",
    city: "New York",
    phone: "203-123-4567",
    blogs: [
      {
        title:
          "we are interested in the following projects and their documentation",
        likes: 35,
      },
      {
        title: "The wineyard project is available at http://www.wine.com",
        likes: 44,
      },
    ],
    cars: ["Bmw", "Mercedes", "Toyota", "Honda", "Chevrolet"],
    fruits: ["Apple", "Mango", "Banana", "Cherry", "Pineapple"],
    blogFunc() {
      this.blogs.forEach((blog) => {
        console.log(blog);
      });
    },
    func: function () {
      this.cars.forEach((car) => {
        console.log(car);
      });
      console.log("=================================");
    },
    //shorthand regular function
    food() {
      this.fruits.forEach((fruit) => {
        console.log(fruit);
      });
      console.log("=================================");
    },
  };
  
  obj.func();
  obj.food();
  obj.blogFunc();
  