<script lang="ts" setup>
const a = await $fetch("/api/docker");
console.log(a);
</script>

<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Last
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-sm font-medium text-left text-gray-900"
                  >
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    Mark
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    Otto
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    @mdo
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    2
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    Jacob
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    Thornton
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    @fat
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    3
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    Larry
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    Wild
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap"
                  >
                    @twitter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
