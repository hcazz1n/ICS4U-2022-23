app.component(
    'product-display', {
        props: {
            details: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                details: ['50% cotton', '30% wool', '20% polyester'],
            }
        },
        computed: {
            details() {
                return this.details
            }
        }
        
    }
)