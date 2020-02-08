<template>
  <div class="border rounded-lg px-4 py-2 flex items-center justify-betweenm mb-2">
    <div>
      {{ todo.task }}
    </div>
    <div>
      <input
        class="m-2"
        type="checkbox"
        name=""
        id=""
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object
    },
  }
}
</script>
