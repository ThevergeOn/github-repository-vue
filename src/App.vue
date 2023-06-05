<template>
  <div class="p-10 flex flex-col gap-6">
    <div class="flex items-center gap-8 justify-between">
      <div class="text-3xl text-black1 font-extrabold px-8 pb-1">
        Repositories
      </div>
      <div class="h-12 w-full bg-gray3 rounded-lg px-4 flex items-center gap-4">
        <img :src="Search" alt="Search" />
        <input
          class="w-full h-full bg-gray3 outline-none py-4"
          type="text"
          placeholder="Enter your github username"
          v-model="gitUsername"
        />
      </div>
      <button
        @click="fetchUserRepos(gitUsername)"
        class="w-36 h-12 rounded-lg bg-blue2 text-blue1 font-bold"
      >
        Find
      </button>
    </div>

    <div class="px-8 border border-gray1 rounded-2xl">
      <Header
        @search-value="handleSearchInput"
        @filterChanged="handleFilterChanged"
      />
      <RepositoriesItem
        v-for="repo in filteredList"
        :key="repo.id"
        :repo="repo"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import getUserRepos from "./api/api";
import RepositoriesItem from "./components/RepositoriesItem.vue";
import Header from "./components/Header.vue";
import Search from "./assets/Search.svg";
export default {
  name: "App",
  components: {
    RepositoriesItem,
    Header,
  },
  setup() {
    const repos = ref([]);
    const filteredInput = ref("");
    const filterType = ref("all");
    const gitUsername = ref("");
    const fetchUserRepos = async (username) => {
      try {
        repos.value = await getUserRepos(username);
      } catch (err) {
        console.error(err.message);
      }
    };
    onMounted(async () => {
      await fetchUserRepos("thevergeOn");
    });

    const filteredList = computed(() => {
      if (filterType.value === "public") {
        return repos.value.filter(
          (item) =>
            !item.private &&
            item.name.toLowerCase().includes(filteredInput.value.toLowerCase())
        );
      } else if (filterType.value === "private") {
        return repos.value.filter(
          (item) =>
            item.private &&
            item.name.toLowerCase().includes(filteredInput.value.toLowerCase())
        );
      } else {
        return repos.value.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(filteredInput.value.toLowerCase());
        });
      }
    });

    const handleSearchInput = (newValue) => {
      filteredInput.value = newValue;
    };
    const handleFilterChanged = (type) => {
      filterType.value = type;
    };
    return {
      repos,
      Search,
      filteredList,
      handleSearchInput,
      handleFilterChanged,
      fetchUserRepos,
      gitUsername,
    };
  },
};
</script>
