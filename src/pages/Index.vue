<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{'background-image': `url(${$strapiUrl}${general.coverImg})`}">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{{general.title}}</h1>
                        <span class="subheading">{{general.subTitle}}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <!-- Post preview-->
                <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
                    <g-link :to="`/post/${edge.node.id}`">
                        <h2 class="post-title">{{edge.node.attributes.title}}</h2>
                    </g-link>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">Start Bootstrap</a>
                        {{edge.node.attributes.createdAt}}
                    </p>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>
                <pager :info="$page.posts.pageInfo" />
            </div>
        </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    posts: allStrapiPost (perPage: 1, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          attributes {
            title
            createdAt
          }
        }
      }
    }
    allStrapiGeneral {
      edges {
        node {
          attributes {
            title
            subTitle
            updatedAt
            coverImg
          }
        }
      }
    }
  }
</page-query>


<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'HomePage'
  },
  name: 'HomePage',
  computed: {
    general() {
      return this.$page.allStrapiGeneral.edges[0].node.attributes
    }
  }
}
</script>

<style></style>
