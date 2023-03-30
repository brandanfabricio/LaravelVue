<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';


const form = useForm({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''

});


</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">

                        <h1 style="text-align: center;">Agregar Produto</h1>
                        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">


                            <form @submit.prevent="form.post(route('producto.store'))" class="mt-6 space-y-6 max-w-xl">

                                <InputLabel for="nomber" value="Productos">Nombre</InputLabel>
                                <TextInput id="nombre" v-model="form.nombre" autofocus required type="text"
                                    class="mt-1 block w-full"></TextInput>

                                <InputLabel for="nomber" value="Productos">Descripcion</InputLabel>
                            <TextInput id="descripcion" v-model="form.descripcion" autofocus required type="text"
                                class="mt-1 block w-full"></TextInput>


                            <InputLabel for="nomber" value="Productos">Precio</InputLabel>
                            <TextInput id="precio" v-model="form.precio" autofocus required type="number"
                                class="mt-1 block w-full"></TextInput>

                            <InputLabel for="nomber" value="Productos">Stock</InputLabel>
                            <TextInput id="stock" v-model="form.stock" autofocus required type="number"
                                class="mt-1 block w-full"></TextInput>
                            <!-- <InputError :message="form.errors.name" class="mt-2"></InputError> -->
                            <PrimaryButton :disabled="form.processing">
                                <i class="fa-solid fa-save"></i>
                                Guardar
                            </PrimaryButton>
                        </form>
                    </div>
                 
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
