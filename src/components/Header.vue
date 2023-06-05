<template>
  <header class="pt-8 pb-4 flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
        <img :src="Sort" alt="Sort" />
        <span class="text-base font-medium">Filter</span>
      </div>
      <button
        @click="$emit('filterChanged', 'all')"
        class="transition-colors text-sm font-medium w-10 h-8 rounded-3xl border border-gray1 focus:border-red1 focus:bg-red2 active:border-red1 active:bg-red2 flex items-center justify-center"
      >
        All
      </button>
      <button
        @click="$emit('filterChanged', 'public')"
        class="transition-colors text-sm font-medium w-16 h-8 rounded-3xl border border-gray1 focus:border-red1 focus:bg-red2 active:border-red1 active:bg-red2 flex items-center justify-center"
      >
        Public
      </button>
      <button
        @click="$emit('filterChanged', 'private')"
        class="transition-colors text-sm font-medium w-16 h-8 rounded-3xl border border-gray1 focus:border-red1 focus:bg-red2 active:border-red1 active:bg-red2 flex items-center justify-center"
      >
        Private
      </button>
    </div>
    <div class="h-12 w-full bg-gray3 rounded-lg px-4 flex items-center gap-4">
      <img :src="Search" alt="Search" />
      <input
        class="w-full h-full bg-gray3 outline-none py-4"
        type="text"
        placeholder="Find a repository..."
        @input="$emit('searchValue', $event.target.value)"
      />
    </div>
  </header>
</template>
<script>
import { ref, watch } from "vue";
import Sort from "../assets/Sort.svg";
import Search from "../assets/Search.svg";
export default {
  emits: ["searchValue", "filterChanged"],
  setup(props) {
    return {
      Sort,
      Search,
    };
  },
};
</script>
