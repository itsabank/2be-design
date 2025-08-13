<template>
  <div
    class="flex md:space-x-5 app_height overflow-hidden relative rtl:space-x-reverse"
  >
    <div
      class="transition-all duration-150"
      :class="[
        width < 1280
          ? ' absolute h-full top-0 md:w-[260px] w-[200px] z-[999]'
          : 'flex-none min-w-[260px]',
        width < 1280 && mobileTodoSidebar ? 'left-0 ' : '-left-full ',
      ]"
    >
      <Card bodyClass=" py-6 h-full flex flex-col" class="h-full">
        <div class="flex-1 h-full">
          <div class="px-6">
            <router-link
              :to="{ name: 'add-orders' }"
            >
              <Button
                icon="heroicons-outline:plus"
                text="เพิ่มออร์เดอร์"
                btnClass="btn-dark w-full block  "
              />
            </router-link>
          </div>

          <perfect-scrollbar class="h-full px-6">
            <ul class="list mt-6">
              <li v-for="item in fillters.slice(0, 6)" :key="item.label">
                <label
                  class="flex items-center cursor-pointer px-2 py-3 rounded"
                  @click="fillter = item.value"
                  :class="
                    fillter === item.value
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-200'
                      : '  text-slate-600 dark:text-slate-300 '
                  "
                >
                  <div class="flex-1 flex space-x-2 rtl:space-x-reverse">
                    <span
                      class="text-xl"
                      :class="[
                        fillter === item.value
                          ? ' text-slate-900 dark:text-slate-100'
                          : ' text-slate-400 dark:text-slate-400',
                      ]"
                      ><Icon :icon="item.icon"
                    /></span>
                    <span
                      class="capitalize text-sm"
                      :class="[
                        fillter === item.value ? ' font-medium' : 'font-normal',
                      ]"
                      >{{ item.name }}</span
                    >
                  </div>
                  <span class="flex-none font-normal capitalize text-sm">
                    {{ item.count }}</span
                  >
                </label>
              </li>
            </ul>
            <div
              class="block py-4 text-slate-800 dark:text-slate-400 font-semibold text-xs uppercase"
            >
              Tags
            </div>
            <ul>
              <li
                v-for="item in fillters.slice(7)"
                :key="item.label"
                @click="fillter = item.value"
                class="flex space-x-2 text-sm capitalize py-2 cursor-pointer items-center rtl:space-x-reverse"
                :class="
                  fillter === item.value
                    ? 'font-medium text-slate-800 dark:text-slate-300'
                    : 'font-normal text-slate-600 dark:text-slate-300'
                "
              >
                <span
                  class="inline-block h-2 w-2 rounded-full ring-opacity-30 transition-all duration-150"
                  :class="`
                  ${
                    item.value === 'team' ? 'bg-danger-500 ring-danger-500' : ''
                  }
                  ${
                    item.value === 'low'
                      ? 'bg-success-500 ring-success-500'
                      : ''
                  }
                  ${
                    item.value === 'medium'
                      ? 'bg-warning-500 ring-warning-500'
                      : ''
                  }
                  ${
                    item.value === 'high'
                      ? 'bg-primary-500 ring-primary-500'
                      : ''
                  }
                  ${item.value === 'update' ? 'bg-info-500 ring-info-500' : ''}
                  ${fillter === item.value ? 'ring-4' : 'ring-0'}
                  
                  `"
                ></span>
                <span class="transition duration-150"> {{ item.name }}</span>
              </li>
            </ul>
          </perfect-scrollbar>
        </div>
      </Card>
    </div>
    <Transition name="overlay-fade">
      <div
        v-if="width < 1280 && mobileTodoSidebar"
        class="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
        @click="closeMobileTodoSidebar"
      ></div>
    </Transition>
    <div class="flex-1 md:w-[calc(100%-320px)]">
      <Card bodyClass="p-0  h-full" class="h-full">
        <perfect-scrollbar class="h-full all-todos overflow-x-hidden">
          <div
            class="md:flex justify-between items-center sticky bg-white dark:bg-slate-800 top-0 pt-6 pb-4 px-6 z-[44] border-b border-slate-100 dark:border-slate-700 rounded-t-md"
          >
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <Tooltip placement="top" arrow v-if="width < 1280" theme="dark">
                <template #button>
                  <div
                    @click="openMobileTodoSidebar"
                    class="md:h-8 md:w-8 h-6 w-6 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center md:text-base text-sm rounded-full cursor-pointer"
                  >
                    <Icon icon="heroicons-outline:menu-alt-2" />
                  </div>
                </template>
                <span> Sidebar Open</span>
              </Tooltip>
              <div
                class="max-w-[180px] flex items-center space-x-1 rtl:space-x-reverse"
              >
                <div class="flex-none dark:text-slate-300">
                  <Icon icon="heroicons-outline:search" />
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Search Task"
                    v-model="todoSearch"
                    class="bg-transparent text-sm font-regular text-slate-600 dark:text-slate-300 transition duration-150 rounded px-2 py-1 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div class="md:block hidden">
              <Dropdown classMenuItems="w-[130px]">
                <span
                  class="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400"
                  ><Icon icon="heroicons-outline:dots-vertical"
                /></span>
                <template v-slot:menus>
                  <MenuItem v-for="(item, i) in actions" :key="i">
                    <div
                      @click="item.doit"
                      :class="`
                
                  ${'hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70  dark:text-slate-300 hover:text-white'}
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center  text-slate-600 capitalize rtl:space-x-reverse `"
                    >
                      <span class="text-base"><Icon :icon="item.icon" /></span>
                      <span>{{ item.name }}</span>
                    </div>
                  </MenuItem>
                </template>
              </Dropdown>
            </div>
          </div>

          <Loading :count="1" v-if="isLoading" />
          <Loading :count="isSkeletonLength" v-if="isSkeleton" />

          <!-- Table -->
          <div v-if="!isSkeleton" >
            <vue-good-table
              :columns="columns"
              styleClass=" vgt-table  lesspadding2 centered "
              :rows="advancedTable"
              :pagination-options="{
                enabled: true,
                perPage: perpage,
              }"
              :sort-options="{
                enabled: false,
              }"
              :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectioninfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectinfo: true, // disable the select info-500 panel on top
                selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
              }"
            >
              <template v-slot:table-row="props">
                <span v-if="props.column.field == 'customer'" class="flex items-center">
                  <span class="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                    <!-- <img
                      :src="props.row.customer.image"
                      :alt="props.row.customer.name"
                      class="object-cover w-full h-full rounded-full"
                    /> -->
                  </span>
                  <span
                    class="text-sm text-slate-600 dark:text-slate-300 capitalize font-normal"
                    >{{ props.row.name }}</span
                  >
                </span>
                <span v-if="props.column.field == 'order'" class="font-medium">
                  {{ "#" + props.row.order }}
                </span>
                <span v-if="props.column.field == 'phone'" class="font-medium">
                  {{ props.row.phone }}
                </span>
                <span v-if="props.column.field == 'amount'" class="font-medium">
                  {{ props.row.amount + "฿" }}
                </span>
                <span
                  v-if="props.column.field == 'date'"
                  class="text-slate-500 dark:text-slate-400"
                >
                  {{ props.row.date }}
                </span>
                <span v-if="props.column.field == 'status'" class="block w-full">
                  <span
                    class="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25"
                    :class="`${
                      props.row.status === 'paid'
                        ? 'text-success-500 bg-success-500'
                        : ''
                    } 
                    ${
                      props.row.status === 'due'
                        ? 'text-warning-500 bg-warning-500'
                        : ''
                    }
                    ${
                      props.row.status === 'cancled'
                        ? 'text-danger-500 bg-danger-500'
                        : ''
                    }
                    
                    `"
                  >
                    {{ props.row.status }}
                  </span>
                </span>
                <span v-if="props.column.field == 'action'">
                  <div class="flex space-x-3 justify-center rtl:space-x-reverse">
                    <Tooltip placement="top" arrow theme="dark" :offset = [0,7]>
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:eye" />
                        </div>
                      </template>
                      <span>รายละเอียด</span>
                    </Tooltip>
                    <Tooltip placement="top" arrow theme="dark" :offset = [0,7]>
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:pencil-square" />
                        </div>
                      </template>
                      <span>แก้ไข</span>
                    </Tooltip>
                    <Tooltip placement="top" arrow theme="danger-500" :offset = [0,7]>
                      <template #button>
                        <div class="action-btn">
                          <Icon icon="heroicons:trash" />
                        </div>
                      </template>
                      <span>ลบ</span>
                    </Tooltip>
                  </div>
                </span>
              </template>
              <template #pagination-bottom="props">
                <div class="py-4 px-3 flex justify-center">
                  <Pagination
                    :total="50"
                    :current="current"
                    :per-page="perpage"
                    :pageRange="pageRange"
                    @page-changed="current = $event"
                    :pageChanged="props.pageChanged"
                    :perPageChanged="props.perPageChanged"
                  >
                    >
                  </Pagination>
                </div>
              </template>
            </vue-good-table>
          </div>
        </perfect-scrollbar>
      </Card>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Loading from "@/components/Skeleton/Todo";
import { MenuItem } from "@headlessui/vue";
import Pagination from "@/components/Pagination";
import Tooltip from "@/components/Tooltip";

// import ref
import { computed, ref, watch, onMounted } from "vue";
import { useTodoStore } from "@/store/todo";

const width = ref(0);
const handleResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

let store = useTodoStore();
const openTodo = () => {
  store.openTodo();
};

const fillters = [
  {
    value: "all",
    name: "รายการทั้งหมด",
    icon: "heroicons:list-bullet",
  },
  {
    value: "measure",
    name: "รายการวัดขนาด",
    icon: "heroicons:cube-transparent",
  },
  {
    value: "craft",
    name: "รายการผลิต",
    icon: "heroicons:wrench-screwdriver",
  },
  {
    value: "install",
    name: "รายการติดตั้ง",
    icon: "heroicons:truck",
  },
  {
    value: "public",
    name: "รายการโพส",
    icon: "heroicons:globe-alt",
  },
  { 
    value: "done",
    name: "รายการเสร็จสิ้น",
    icon: "heroicons:clipboard-document-check",
  },
  {
    value: "trash",
    name: "Trash",
    icon: "heroicons:trash",
  },
  {
    name: "Team",
    icon: "heroicons:users",
    value: "team",
  },
  {
    name: "low",
    icon: "heroicons:flag",
    value: "low",
  },
  {
    name: "medium",
    icon: "heroicons:flag",
    value: "medium",
  },
  {
    name: "high",
    icon: "heroicons:flag",
    value: "high",
  },
  {
    name: "update",
    icon: "heroicons:refresh",
    value: "update",
  },
];

const fillter = ref("all");

const actions = [
  {
    name: "Reset Sort",
    icon: "heroicons-outline:sort-ascending",
    doit: () => {
      store.resetSort();
    },
  },
  {
    name: "Sort A-Z ",
    icon: "heroicons-outline:sort-ascending",
    doit: () => {
      store.sortAZ();
    },
  },
  {
    name: " Sort Z-A ",
    icon: "heroicons-outline:sort-descending",
    doit: () => {
      store.sortZA();
    },
  },
];

// Table
const current = ref(1);
const perpage = ref(9);
const pageRange = ref(1);
const searchTerm = ref("");
const options = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
];
const columns = [
  {
    label: "ออร์เดอร์",
    field: "order",
  },
  {
    label: "ชื่อลูกค้า",
    field: "name",
  },
  {
    label: "เบอร์ติดต่อ",
    field: "phone",
  },
  {
    label: "จำนวน ตร.ม.",
    field: "quantity",
  },
  {
    label: "ยอด",
    field: "amount",
  },
  {
    label: "วันที่ติดตั้ง",
    field: "date",
  },
  {
    label: "สถานะ",
    field: "status",
  },
  {
    label: "จัดการ",
    field: "action",
  },
];
const advancedTable = [
  {
    id: 1,
    order: 951,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "3/26/2022",
    quantity: 13,
    amount: "1779.53",
    status: "paid",
    action: null,
  },
  {
    id: 2,
    order: 238,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "2/6/2022",
    quantity: 13,
    amount: "2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "9/6/2021",
    quantity: 1,
    amount: "3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "11/7/2021",
    quantity: 13,
    amount: "2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "5/6/2022",
    quantity: 12,
    amount: "3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "2/14/2022",
    quantity: 12,
    amount: "4764.18",
    status: "cancled",
    action: null,
  },
  {
    id: 7,
    order: 77,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "7/30/2022",
    quantity: 6,
    amount: "2875.05",
    status: "paid",
    action: null,
  },
  {
    id: 8,
    order: 238,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "6/30/2022",
    quantity: 9,
    amount: "2491.02",
    status: "due",
    action: null,
  },
  {
    id: 9,
    order: 886,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "8/9/2022",
    quantity: 8,
    amount: "3006.95",
    status: "due",
    action: null,
  },
  {
    id: 10,
    order: 3,
    name: "Jenny Wilson",
    phone: "0812345678",
    date: "8/4/2022",
    quantity: 12,
    amount: "2160.32",
    status: "paid",
    action: null,
  }
];

// store computed
const todoSearch = computed(() => store.todoSearch);

const mobileTodoSidebar = computed(() => store.mobileTodoSidebar);
// dispatch openMobileTodoSidebar
const openMobileTodoSidebar = () => {
  store.openMobileTodoSidebar();
};
const closeMobileTodoSidebar = () => {
  store.closeMobileTodoSidebar();
};

const todos = computed(() => store.todosGetter);
const done = computed(() => store.isDone);
const fav = computed(() => store.isFav);
const high = computed(() => store.high);
const low = computed(() => store.low);
const team = computed(() => store.team);
const medium = computed(() => store.medium);
const update = computed(() => store.update);
const trash = computed(() => store.trashTodoGetter);
const isSkeletonLength = ref(todos.value.length);
const isSkeleton = ref(null);

// selectedTodo
// eslint-disable-next-line vue/return-in-computed-property
const selectedTodo = computed(() => {
  if (fillter.value === "all") {
    return todos.value;
  } else if (fillter.value === "done") {
    return done.value;
  } else if (fillter.value === "fav") {
    return fav.value;
  } else if (fillter.value === "high") {
    return high.value;
  } else if (fillter.value === "low") {
    return low.value;
  } else if (fillter.value === "medium") {
    return medium.value;
  } else if (fillter.value === "team") {
    return team.value;
  } else if (fillter.value === "update") {
    return update.value;
  } else if (fillter.value === "trash") {
    return trash.value;
  }
});

const isLoading = computed(() => store.isLoading);

watch(
  fillter,
  () => {
    switch (fillter.value) {
      case "all":
        fillter.value = "all";
        isSkeleton.value = true;
        isSkeletonLength.value = todos.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "done":
        fillter.value = "done";
        isSkeleton.value = true;
        isSkeletonLength.value = done.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "trash":
        fillter.value = "trash";
        isSkeleton.value = true;
        isSkeletonLength.value = trash.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "fav":
        fillter.value = "fav";
        isSkeleton.value = true;
        isSkeletonLength.value = fav.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "high":
        fillter.value = "high";
        isSkeleton.value = true;
        isSkeletonLength.value = high.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "low":
        fillter.value = "low";
        isSkeleton.value = true;
        isSkeletonLength.value = low.value.length;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "medium":
        fillter.value = "medium";
        isSkeleton.value = true;
        isSkeletonLength.value = medium.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "team":
        fillter.value = "team";
        isSkeleton.value = true;
        isSkeletonLength.value = team.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
      case "update":
        fillter.value = "update";
        isSkeleton.value = true;
        isSkeletonLength.value = update.value.length;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;

      default:
        fillter.value = "all";
        isSkeleton.value = true;
        store.mobileTodoSidebar = false;
        setTimeout(() => {
          isSkeleton.value = false;
        }, 500);
        break;
    }
  },
  { deep: true }
);
</script>
<style lang="scss">
.app_height {
  height: calc(var(--vh, 1vh) * 100 - 12.1rem);
}
</style>
