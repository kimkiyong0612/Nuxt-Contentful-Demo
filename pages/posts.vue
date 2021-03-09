<template>
  <div>
    <!-- render data of the person -->
    <!-- <h1 class="bg-green-200">{{ person.fields.name }}</h1> -->
    <!-- render blog posts -->
    <!-- <ul class="list-outside">
      <li v-for="post in posts" :key="post.id">
        {{ post.fields.title }}
        <pre>
        {{ post.fields.description }}
        </pre>
      </li>
    </ul> -->
    <h1 class="bg-green-200">Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <div class="max-w-md w-full  my-5 mx-auto ">
        <div
          class="h-48  flex-none bg-cover rounded-t  text-center overflow-hidden"
          :style="{
            backgroundImage:
              'url(' + post.fields.heroImage.fields.file.url + ')'
          }"
          :title="post.fields.heroImage.fields.title"
        ></div>
        <div
          class="border-r border-b border-l border-grey-light  bg-white rounded-b  p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <div class="text-black font-bold text-xl mb-2">
              {{ post.fields.title }}
            </div>
            <p class="text-grey-darker text-base">
              {{ post.fields.description }}
            </p>
          </div>
          <div class="flex items-center">
            <!-- <img
              class="w-10 h-10 rounded-full mr-4"
              src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
              alt="Avatar of Jonathan Reinink"
            /> -->
            <div class="text-sm">
              <p class="text-black leading-none">{{ person.fields.name }}</p>
              <p
                class="text-grey-dark"
                @onLoad="formatDate(post.fields.publishDate)"
              >
                {{ post.fields.publishDate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts]) => {
        // Formatdata

        return {
          person: entries.items[0],
          posts: posts.items
        };
      })
      .catch(console.error);
  },
  methods: {}
};
</script>
<style scoped></style>
