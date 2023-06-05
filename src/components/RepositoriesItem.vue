<template>
  <div class="h-22 w-full flex flex-col px-3 py-4 border-b border-gray1">
    <div class="flex items-center gap-2 h-10">
      <div class="flex items-center gap-0-5">
        <span class="text-base font-bold">{{ repo.name }}</span>
        <a :href="repo.html_url" target="_blank" class="">
          <img :src="NewWindow" alt="Icon" />
        </a>
      </div>
      <div
        v-if="!repo.private"
        class="h-6 w-14 rounded-3xl bg-blue2 text-blue1 text-sm flex items-center justify-center font-bold"
      >
        Public
      </div>
      <div
        v-if="repo.private"
        class="h-6 w-14 rounded-3xl bg-pink2 text-pink1 text-sm flex items-center justify-center font-bold"
      >
        Private
      </div>
    </div>
    <div class="flex items-center gap-5 h-8-5">
      <div v-if="repo.language" class="text-sm font-medium">
        {{ repo.language }}
      </div>
      <div v-else="repo.language" class="text-sm font-medium">No language</div>
      <div class="flex items-center gap-1 p-2">
        <img :src="Shape" alt="Icon" />
        <span class="text-sm font-medium pt-1">{{
          repo.stargazers_count
        }}</span>
      </div>
      <div class="flex items-center gap-1 p-2">
        <img :src="Fork" alt="Icon" />
        <span class="text-sm font-medium">{{ repo.forks_count }}</span>
      </div>
      <div class="flex items-center gap-1 p-2">
        <img :src="Contribute" alt="Icon" />
        <span class="text-sm font-medium pt-1">{{ repo.watchers }}</span>
      </div>
      <div class="">
        <span class="text-gray2 text-sm font-medium"
          >Updated {{ lastUpdatedDate }} ago</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import NewWindow from "../assets/open.svg";
import Shape from "../assets/Shape.svg";
import Fork from "../assets/Fork.svg";
import Contribute from "../assets/Contribute.svg";
export default {
  name: "RepositoriesItem",
  props: {
    message: String,
    repo: Object,
  },
  setup(props) {
    const lastUpdated = new Date(props.repo.updated_at);
    const lastUpdatedDate = computed(() => {
      const now = new Date();
      const diffInMilliseconds = Math.abs(now - lastUpdated);
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);
      const diffInMonths = Math.floor(diffInDays / 30);
      const diffInYears = Math.floor(diffInDays / 365);

      if (diffInYears >= 1) {
        return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
      } else if (diffInMonths >= 1) {
        return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
      } else if (diffInDays >= 1) {
        return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
      } else if (diffInHours >= 1) {
        return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
      } else if (diffInMinutes >= 1) {
        return `${diffInMinutes} ${
          diffInMinutes === 1 ? "minute" : "minutes"
        } ago`;
      } else {
        return "Just now";
      }
    });

    return {
      lastUpdatedDate,
      NewWindow,
      Shape,
      Fork,
      Contribute,
    };
  },
};
</script>
