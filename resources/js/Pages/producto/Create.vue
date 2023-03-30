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
                                <i class="fa-solid fa-save"></i> Guardar
                            </PrimaryButton>
                        </form>
                    </div>
                    <!-- <form>
                            <div class="grid gap-6 mb-6">
                                <div class="mb-6">
                                    <label for="default-input"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nombre</label>
                                    <input type="text" id="default-input"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>

                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Descripcion</label>
                                <textarea id="message" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Decripcion..."></textarea>

                                <div class="mb-6">
                                    <label for="default-input"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Precio</label>
                                    <input type="text" id="default-input"
                                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                    </div>
                                                                    <div class="mb-6">
                                                                        <label for="default-input"
                                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                            Stock</label>
                                                                        <input type="text" id="default-input"
                                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                    </div>


                                                                </div>



                                                                <button type="submit"
                                                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                                            </form> -->
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
