<template>
<Layout>
        <!-- Page Header-->
        <header class="masthead" style="background-image: url('/assets/img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ $page.post.attributes.title }}</h1>
                            <span class="meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on {{$page.post.attributes.createdAt}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center" v-html="mdToHtml($page.post.attributes.content)">

                </div>
            </div>
        </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiPost (id: $id) {
    id
    attributes {
      title
      content
      createdAt
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
export default {
  name: 'PostPage',
  metaInfo () {
    return {
      title: this.$page.post.attributes.title,
    }
  },
  methods: {
    mdToHtml(str) {
      return md.render(str)
    }
  }
}
</script>

<style>

</style>
