<template>
  <swiper
    :modules="modules"
    :slides-per-view="3.5"
    class="main-caro"
  >
    <swiper-slide v-for="(product, i) in products" :key="i">
      <div
        class="single-slide p-2"
      >
        <Card bodyClass="p-4 rounded-md">
          <router-link :to="{ name: 'product-details', params: { id: product.id } }">
            <div class="group">
              <div
                class="bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md"
              >
                <div class="h-[146px]">
                  <img
                    class="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
                    :src="product.img"
                  />

                  <Badge badgeClass="text-white bg-yellow-400"
                    class="absolute ltr:left-2 rtl:right-2 top-3"
                  >
                    {{ product.number }}
                  </Badge>

                  <div
                    class="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
                  >
                    <button class="bg-white p-2.5 mb-1.5 rounded-full">
                      <Icon
                        icon="ph:heart-fill"
                        class="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600"
                      />
                    </button>
                    <button class="bg-white p-2.5 mb-1.5 rounded-full">
                      <Icon
                        icon="ph:eye"
                        class="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600"
                      />
                    </button>
                    <button class="bg-white p-2.5 mb-1.5 rounded-full">
                      <Icon
                        icon="jam:refresh-reverse"
                        class="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </router-link>

          <div>
            <div class="flex justify-between items-center">
              <p
                class="text-xs text-slate-900 dark:text-slate-300 uppercase font-normal"
              >
                {{ product.category }}
              </p>

              <span
                class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-xs space-x-1 rtl:space-x-reverse"
              >
                <Icon icon="ph:star-fill" class="text-yellow-400" />
                <span>{{ product.rating }}</span>
              </span>
            </div>

            <router-link
              :to="{ name: 'product-details', params: { id: product.id } }"
            >
              <h6
                class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 truncate"
              >
                {{ product.name }}
              </h6>
            </router-link>
            <p
              class="text-slate-500 dark:text-slate-500 text-[11px] font-normal mt-1.5"
            >
              {{ product.subtitle }}
            </p>
            <p class="pb-4">
              <span
                class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 ltr:mr-2 rtl:mr-2"
              >
                {{ product.price }} ฿
              </span>
              <del class="text-slate-500 dark:text-slate-500 font-normal text-base">
                {{ product.oldPrice }}
              </del>
            </p>

            <div class="flex justify-center">
              <div
                class="inline-block bg-slate-900 text-white px-[10px] py-[6px] text-center text-xs font-medium rounded-full min-w-[60px]"
              >
                ขายแล้ว {{ product.sold }} ชิ้น
              </div>
            </div>
          </div>
        </Card>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import blackJumper from "@/assets/images/e-commerce/product-card/classical-black-tshirt.png";
import blackTshirt from "@/assets/images/e-commerce/product-card/black-t-shirt.png";
import checkShirt from "@/assets/images/e-commerce/product-card/check-shirt.png";
import grayJumper from "@/assets/images/e-commerce/product-card/gray-jumper.png";
import grayTshirt from "@/assets/images/e-commerce/product-card/gray-t-shirt.png";
import pinkBlazer from "@/assets/images/e-commerce/product-card/pink-blazer.png";
import redTshirt from "@/assets/images/e-commerce/product-card/red-t-shirt.png";
import yellowFrok from "@/assets/images/e-commerce/product-card/yellow-frok.png";
import yellowJumper from "@/assets/images/e-commerce/product-card/yellow-jumper.png";

import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Badge from "@/components/Badge";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    Card,
    Icon,
    Badge
  },
  data() {
    return {
      products: [
        {
          id: 1,
          number: 1,
          sold: "1,234",
          img: blackJumper,
          category: "men",
          name: "Classical Black T-Shirt Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt.",
          rating: "4.8",
          price: 489,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "apple",
        },
        {
          id: 2,
          number: 2,
          sold: "1,234",
          img: blackTshirt,
          category: "men",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 20,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "apex",
        },
        {
          id: 3,
          number: 3,
          sold: "1,234",
          img: checkShirt,
          category: "women",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 120,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "easy",
        },
        {
          id: 4,
          number: 4,
          sold: "1,234",
          img: grayJumper,
          category: "women",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 70,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "pixel",
        },
        {
          id: 5,
          number: 5,
          sold: "1,234",
          img: grayTshirt,
          category: "baby",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 30,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "apex",
        },
        {
          id: 6,
          number: 6,
          sold: "1,234",
          img: pinkBlazer,
          category: "women",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 40,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "apple",
        },
        {
          id: 7,
          number: 7,
          sold: "1,234",
          img: redTshirt,
          category: "women",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 90,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "easy",
        },
        {
          id: 8,
          number: 8,
          sold: "1,234",
          img: yellowFrok,
          category: "women",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 80,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "pixel",
        },
        {
          id: 9,
          number: 9,
          sold: "1,234",
          img: yellowJumper,
          category: "furniture",
          name: "Classical Black T-Shirt",
          subtitle: "The best cotton black branded shirt.",
          desc: "The best cotton black branded shirt",
          rating: "4.8",
          price: 20,
          oldPrice: "700 ฿",
          percent: "40%",
          brand: "samsung",
        },
      ],
    }
  },
  props: {
    sliderPreview: {
      type: Number,
      default: 1,
    },
    space: {
      type: Number,
      default: 0,
    },

    // carousels: {
    //   type: Array,
    //   default: [],
    // },
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
    };
  },
};
</script>

<style lang="scss">
.main-caro {
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: unset !important;
    @apply rtl:rotate-180;
  }
  .swiper-button-next:after {
    content: url("https://api.iconify.design/heroicons-outline/chevron-right.svg?color=white&width=24");
  }
  .swiper-button-prev:after {
    content: url("https://api.iconify.design/heroicons-outline/chevron-left.svg?color=white&width=24");
  }
  .swiper-pagination-bullet {
    height: 2px;
    width: 24px;
    @apply rounded-[1px] bg-white bg-opacity-70;
    &.swiper-pagination-bullet-active {
      @apply bg-opacity-100;
    }
  }
}
</style>
