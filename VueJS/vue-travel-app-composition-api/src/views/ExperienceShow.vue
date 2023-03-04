<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>

<script setup>
    import sourceData from '../data.json'
    import {computed} from 'vue'

    const props = defineProps({
        id: {type: Number, required: true},
        experienceSlug: {type: String, required: true}
    })
    
    const destination = computed(() => {
        return sourceData.destinations.find(
            (destination) => destination.id === props.id
        )
    })
    
    const experience = computed(() => {
        return destination.value.experiences.find(
            (experience) => experience.slug === props.experienceSlug
        )
    })
</script>

<!-- <script>
import sourceData from '../data.json'
export default{
    props:{
        id: {type: Number, required: true,},
        experienceSlug: {type: String, required: true,}
    },
    computed:{
        destination(){
            return sourceData.destinations.find(
                destination => destination.id === this.id
            )
        },
        experience(){
            return this.destination.experiences.find(
                experience => experience.slug === this.experienceSlug
            )
        }
    }
}
</script> -->