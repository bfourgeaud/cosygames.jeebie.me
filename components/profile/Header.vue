<template>
  <div>
    <div class="flex justify-end self-end">
      <button class="flex items-center border px-2 py-1 rounded-md" @click="$emit('edit')">
        <icons-edit class="w-6 h-6 mr-1" />
        Edit
      </button>
    </div>
    <div class="flex flex-wrap items-center mb-8">
      <div class="w-32 lg:h-32 mr-8 mb-4">
        <img src="https://picsum.photos/200" alt="" class="rounded-full overflow-hidden cursor-pointer">
      </div>
      <div>
        <h2 class="text-2xl xs:text-4xl mb-2">Benjamin Fourgeaud</h2>
        <p class="text-xl xs:text-2xl text-gray-400">benjamin.fourgeaud@gmail.com</p>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat suscipit rem culpa architecto dignissimos laboriosam minima minus. Rem enim, provident quos atque aperiam ducimus animi praesentium suscipit iusto magnam ipsum. Similique dolor tenetur doloremque recusandae est iure modi iusto quasi cum eos corrupti natus ut fuga, unde facilis. Fugiat, placeat.</p>
  </div>
</template>
