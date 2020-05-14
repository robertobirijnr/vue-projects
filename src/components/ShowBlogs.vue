<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input
      id="searchInput"
      type="text"
      v-model="search"
      placeholder="search blog"
    />
    <div
      id="single-blog"
      v-for="blog in filteredBlogs"
      v-bind:data="blog"
      v-bind:key="blog.id"
    >
      <h3>{{ blog.title }}</h3>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },

  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
#single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eeeeee;
}
#searchInput {
  width: 800px;
}
</style>
