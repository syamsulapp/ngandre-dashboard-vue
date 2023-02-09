<template>
    <h2>products data</h2>
    <br>
    <div>
        <ul v-for="products in product" :key="products.id">
            <li>{{ products.nama }} <br>
                {{ products.imagesUrl }}
                {{ products.price }}
                {{ products.created_at }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            product: []
        }
    },

    async mounted() {
        const response = await axios.get('http://stagging.mjcutter.com/products')
        this.product = response.data.data
    }
}

</script>

