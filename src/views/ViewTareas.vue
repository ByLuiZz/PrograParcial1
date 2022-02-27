<template>
  <div class=container>
    <h3>
      Ingresando Tarea
      <ListaTareas/>
    </h3>

  </div>
</template>

<script>
import ListaTareas from '@/components/ListaTareas.vue'
export default {
  name: 'ViewTareas',
  components: {ListaTareas
  }
}
</script>

