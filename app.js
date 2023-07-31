let GithubUserCardComponent = {
    template: '#github-user-card-template',
    props: ['username'],
    
    data() {
        return {
            avatar_url: '',
            profile_url: '',
            name: '',
            bio: '',
            followers: 0,
            followers_url: '',
            year_joined: null,
        }
    },

    async created() {
      const username = this.username
    //   const url2 = `http://api.github.com/users/darrenhusa`
    //   const url = `http://api.github.com/users/danielkellyio`
      const url = `http://api.github.com/users/${username}`
    //   console.log(username)
    //   console.log('username='+username)
    //   console.log(url)
      const response = await axios.get(url)
      console.log(response.data)
    //   this.avatar_url = response.data.avatar_url
      this.name = response.data.name
      this.bio = response.data.bio
      this.followers = response.data.followers
      this.followers_url = response.data.followers_url
      this.profile_url = response.data.url
    //   let created_at = response.data.created_at
    //   this.year_joined = created_at.getYear()
    let date = new Date(response.data.created_at)
    this.year_joined = date.getYear() + 1900
    }
}

Vue.createApp({
    components: {'github-user-card': GithubUserCardComponent}
})
.mount('#app')