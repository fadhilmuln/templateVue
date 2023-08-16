import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAnimal = defineStore('animalId', () => {
    let name:any = ref("Gajah")
    function changename (newName:any) {
        name = newName
        return name
    }

    return {name, changename}
})