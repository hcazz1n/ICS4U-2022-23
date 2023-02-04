app.component(
    'product-display', {
        props: {
            details: {
                type: Array,
                required: true
            }
        },
        
        template:
        /*html*/
        `
        <div class="review-container">
        <h3>Reviews:</h3>
        </div>
        `,
        
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