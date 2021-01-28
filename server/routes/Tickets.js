const { Router } = require('express');
const  events = require('../models/Events');

const router = Router();


// const app = new Vue({
//     el: '#app',
//     data: {
//    msg: 'Make Post:',
//    content: '', updatedContent:'',
//    posts: [],
//    postId: '',
//    successMsg: '',
//    commentData:{},
//    commentSeen: false,
//    image:'',
//    bUrl: 'http://localhost:5000/',
//   },

//  ready: function(){
//    this.created();
//  },

//  created(){
//    axios.get(this.bUrl +'/posts')
//         .then(response => {
//           console.log(response); 
//           this.posts = response.data; 
//           Vue.filter('myOwnTime', function(value){
//             return moment(value).fromNow();
//           });
//         })
//         .catch(function (error) {
//           console.log(error); 
//         });
//  },

//  methods:{

//    addPost(){

//      axios.post(this.bUrl +'/addPost', {
//             content: this.content
//           })
//           .then( (response) =>{
//             this.content="";
//             console.log('saved successfully'); 
//             if(response.status===200){
//               app.posts = response.data;
//             }
//           })
//           .catch(function (error) {
//             console.log(error); 
//           });
//    },

//    updatePost(id){
//      axios.post(this.bUrl +'/updatePost/' + id, {
//             updatedContent: this.updatedContent
//           })
//           .then( (response) =>{
//             this.content="";
//             console.log('Changes saved successfully'); 
//             if(response.status===200){
//               app.posts = response.data;
//             }
//           })
//           .catch(function (error) {
//             console.log(error); 
//           });
//    },

//    deletePost(id){
     
//      axios.get(this.bUrl +'/deletePost/' + id)
//           .then(response => {
//             console.log(response); 
//             this.posts = response.data; 
//           })
//           .catch(function (error) {
//             console.log(error); 
//           });

//    },
//    likePost(id){
//      axios.get(this.bUrl +'/likePost/' + id)
//           .then(response => {
//             console.log(response); 
//             this.posts = response.data; 
//           })
//           .catch(function (error) {
//             console.log(error); 
//           });
//    },
//    addComment(post,key){

// 	       axios.post(this.bUrl +'/addComment', {
//             comment: this.commentData[key],
// 			      id: post.id
//           })
//           .then(function (response) {
//             console.log('saved successfully'); 
//             if(response.status===200){
//               app.posts = response.data;
//             }
//           })
//           .catch(function (error) {
//             console.log(error); 
//           });
//         }
    
//     }
// })