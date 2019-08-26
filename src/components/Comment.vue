<template>
  <div class="hello">
    <div class = "container">


        <h2 class="text-center"> ตาราง COMMENT </h2>
          <table class="table table-bordered">
            <tr>
               <th>#</th>
               <th>ID</th>
               <th>Name</th>
               <th>E-mail</th>
               <th>Body</th>

            </tr>
              <tr v-for="post in posts" :key="post.postId">
               <td>{{post.postId}}</td>
               <td>{{post.id}}</td>
               <td>{{post.name}}</td>
               <td>{{post.email}}</td>
               <td>{{post.body}}</td>



            </tr>
          </table>

    </div>
  </div>



</template>
<script>
export default{
  data(){
    return {
      id:this.$route.params.id,
      posts:[]
    }
  },
  created(){
  this.$http.get('https://jsonplaceholder.typicode.com/comments?id=' +this.id)
  .then(function(data){
    console.log(data);
    this.posts = data.body;
  })
  }
}

</script>
<!-- this.$http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
.then(function(res) {
  this.users=res.body;
})
.catch( function(error) {
  console.log('Error', error);
}) -->
