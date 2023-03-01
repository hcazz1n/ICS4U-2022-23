<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>

<script setup>
    import {ref, computed} from 'vue'
    import sourceData from '../data.json'

    defineProps({
        id: {type: Number, required: true},
        experienceSlug: {type: String, required: true}
    })
    
    const destination = computed(() => {
        return sourceData.destinations.find(destination.id === this.id)
    })
    
    const experience = computed(() => {
        return destination.experiences.find(experience.slug === this.experienceSlug)
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