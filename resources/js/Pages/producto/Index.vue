<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import DangerButton from '@/Components/DangerButton.vue';
const props = defineProps({
    producto: { type: Object }
});
const form = useForm({
    id: ''
})
const DeleteProducto = (id: number) => {
    form.delete(route('producto.destroy', id));
}
</script>

<template>
    <Head title="Productos" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Productos</h2>
        </template>

        <div class="py-12">
            <div class="bg-dark grid v-screen place-items-center">
                <div class="mt-3 mb-3 flex">
                    <Link :href="route('producto.create')"
                        :class="'px-4 py-2 bg-gray-800 text-white border rounded-md font-semibold text-xs'">
                    <i class="fa-solid fa-plus-circle"></i> Add
                    </Link>
                </div>
            </div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <h1 style="text-align: center">Tabla de Producto</h1>
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">#</th>
                                    <th scope="col" class="px-6 py-4">Nombre</th>
                                    <th scope="col" class="px-6 py-4">Descripcion</th>
                                    <th scope="col" class="px-6 py-4">Precio</th>
                                    <th scope="col" class="px-6 py-4">Stock</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="border-b dark:border-neutral-500" v-for="pro, i in  producto" :key="pro.id">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">{{ pro.id }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ pro.nombre }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ pro.descripcion }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ pro.precio }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ pro.stock }}</td>
                                    <td class="border border-gray-400 px-4 py-4">
                                        <Link :href="route('producto.edit', pro.id)"
                                            :class="'px-4 py-2 bg-yellow-400 text-white border rounded-md font-semibold text-xs'">
                                        <i class="fa-solid fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <DangerButton @click="DeleteProducto(pro.id)">
                                            <i class="fa-solid fa-trash"></i>
                                        </DangerButton>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
