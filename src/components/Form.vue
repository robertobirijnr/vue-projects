<template>
  <div id="add-blog">
    <h2>Add new Blog Post</h2>
    <form>
      <label>Blog Title</label>
      <input v-model.lazy="title" type="text" required />
      <label>Blog Content</label>
      <textarea v-model.lazy="content"></textarea>
      <div id="checkboxes">
        <label>fufu</label>
        <input type="checkbox" value="fufu" v-model="categories" />
        <label>Banku</label>
        <input type="checkbox" value="banku" v-model="categories" />
        <label>Tuo</label>
        <input type="checkbox" value="tuo" v-model="categories" />
        <label>Kokonte</label>
        <input type="checkbox" value="kokonte" v-model="categories" />
      </div>
      <label>Select Box</label>
      <select v-model="author">
        <option v-for="(auth, index) in authors" :key="auth.id"
          >{{ index }},{{ auth }}</option
        >
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ title }}</p>
      <p>Blog content:</p>
      <p>{{ content }}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="(category, index) in categories" :key="category.id">
          {{ index }},{{ category }}
        </li>
      </ul>
      <p>{{ author }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      categories: [],
      author: "",
      authors: ["Bob Alaska", "Eugenia Ofosu", "Bright Ofori"],
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.title,
          body: this.content,
          userId: 1,
        })
        .then(function(data) {
          console.log(data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
