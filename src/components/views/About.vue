<template>
<div class="about">
    <div>
      <h1>What is The Coding Toolbox?</h1>
      <h2>If you have any questions, check out the FAQs before getting in touch</h2>
    </div>
    <div class="flex justify-center">
        <div>
          <img src="@/assets/laptop.jpg" max-height="300" width="600"/>
          <h3>Tried and tested tools</h3>
          <p>Organised tools for all tech needs. From IDEs to Project Management, find everything you need right here</p>
        </div>
        <div>
          <img src="@/assets/review.jpg" max-height="300" width="600"/>
          <h3>Reviews and Tutorials</h3>
          <p>Get real life feedback on the tools being used. Make use of the blogs and tutorials helping you </p>
        </div>
    </div>
    <v-row class="mt-4 mb-4" justify="center">
      <v-col cols="9">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" offset="1">
        <h2 class="text-left">Why The Coding Toolbox?</h2>
      </v-col>
      <v-col cols="3">
        <v-card flat>
          <v-img src="@/assets/tools.jpg"/>
          <v-card-title class="text-left">Everything you need in one place</v-card-title>
          <v-card-text class="text-left">Theres so much info out there, from blog posts to websites. Access and compare all the tools you need in one place</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat>
          <v-img src="@/assets/reviews.jpg"/>
          <v-card-title class="text-left">Independent Reviews</v-card-title>
          <v-card-text class="text-left">We do not sponsor tools, nor do we have favourites. Everything you read about these tools is completely subjective, leaving it up to you to decide what meets your requirements</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat>
          <v-img src="@/assets/community.jpg"/>
          <v-card-title class="text-left">Community Supported</v-card-title>
          <v-card-text class="text-left">We rely on community support and content to ensure we find the best tools for every occasion. If you would like to get involved, head over to the contact page and get in touch!</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-4 mb-4" justify="center">
      <v-col cols="9">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-4">
      <v-col cols="4">
        <h2 class="text-left">FAQs</h2>
      </v-col>
      <v-col cols="5">
        <v-expansion-panels accordion flat tile multiple>
          <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
            <v-expansion-panel-header class="mt-2 mb-2">
              <strong>{{ faq.title }}</strong>
              <template v-slot:actions>
               <v-icon color="primary">
                 $expand
               </v-icon>
             </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left">
              {{ faq.content }}
            </v-expansion-panel-content>
            <v-divider />
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
</div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      faqs: [{
        title: 'How can I help?',
        content: 'You can help by giving us feedback on the tools we highlight. You can also help by getting in touch to add support for other programming languages.'
      }, {
        title: 'Will there be support for <insert language here>',
        content: 'We are always looking to build on the tools and languages we show. However, we need your help, so if you are in the industry and can contribute, please get in touch!'
      }, {
        title: "You're missing an amazing tool",
        content: 'There is a chance we have a missed a tool that you think people need to be aware of. If this is the case, please get in touch and we will look to get it added to the site.'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  h1 {
    margin: 30px 0;
    font-size: var(--font-2xl);
  }
  h2 {
    font-size: var(--font-xl);
  }
  h3 {
    font-size: var(--font-lg);
  }
}
</style>
