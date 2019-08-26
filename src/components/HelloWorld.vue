<template>
  <div class="hello">



        <div class="container" >
          <h2 class="text-center"> ตารางแสดงข้อมูล </h2>
            <table class="table table-striped">
              <thead>
              <tr>
                 <th>ID</th>
                 <th>Title</th>
                 <th>UserID</th>
                 <th>Body</th>
                 <th>Action</th>

              </tr>
              </thead>
              <tbody>
              <tr v-for="post in posts" :key="post.id">
                 <td>{{post.id}}</td>
                 <td>{{post.title}}</td>
                 <td><router-link v-bind:to="'/Users/'+ post.userId" >{{post.userId}}</router-link></td>
                 <td>{{post.body}}</td>
                 <td><router-link v-bind:to="'/Comment/'+ post.id" class="btn btn-primary">Comment</router-link></td>


              </tr>
            </tbody>
            </table>

          </div>







  </div>
</template>

<script>
export default {
    data(){
      return {
        posts:[],
        users:[]
      }
    },
    mounted() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) {
        this.posts=res.body;
      })
      .catch( function(error) {
        console.log('Error', error);
      })
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
