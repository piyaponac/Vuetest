<template>
  <div class="hello">
    <div class = "container">


        <h2 class="text-center"> ตาราง USER ID </h2>
          <table class="table table-bordered">
            <tr>
              <th>#</th>
               <th>UserID</th>

               <th>Tltle</th>
               <th>Body</th>

            </tr>
              <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
               <td>{{post.userId}}</td>

               <td>{{post.title}}</td>
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
      id:this.$route.params.userId,
      posts:[]
    }
  },
  created(){
  this.$http.get('https://jsonplaceholder.typicode.com/posts?userId=' +this.id)
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
