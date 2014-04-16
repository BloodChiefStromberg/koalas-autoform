KoalaSchema = new SimpleSchema({ 
  name: {
    type: String,
    max: 10
  },
  eats: {
    type: [String],
    max: 10
  },
  age: {
    type: Number,
    max: 16
  }
 });
