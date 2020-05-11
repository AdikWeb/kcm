<template>
	<div>
		<div :id="id" class="owl-carousel">
			<slot/>
		</div>
		<div class="btnposa">
			<div class="container">
				<circleBtn :class="'prev prev_'+id"/>
				<circleBtn :class="'next_'+id"/>
			</div>
		</div>
	</div>

</template>

<script>
    import $ from 'jquery'
    import 'owl.carousel/dist/assets/owl.carousel.min.css';
    import 'owl.carousel'
    import circleBtn from "../../buttons/circleButton/circleBtn";

    export default {
        name: "carousel",
        data() {
            return {
                id: Date.now(),
            }
        },
        components: {
            circleBtn
        },

        mounted() {
            let id = this.id;
            let owl = $('#' + id).owlCarousel({
                loop: true,
                center: true,
                margin: 30,
                nav: false,
                onDragged: (e) => {
                    this.pasteOpacity(e)
                },
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 1,
                    },
                    500: {
                        items: 2,
                    },
                    767: {
                        items: 3
                    },
                    990: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1360: {
                        items: 5
                    },
                    1500: {
                        items: 5
                    },
                    1900: {
                        items: 6
                    },
                    3000: {
                        items: 11
                    },
                    5000: {
                        items: 13
                    }
                }
            }).on('resize.owl.carousel', e => {
                this.pasteOpacity(e);
            })

            let nextBtn = document.querySelector('.next_' + id);
            let prevBtn = document.querySelector('.prev_' + id);

            nextBtn.onclick = () => owl.trigger('next.owl');
            prevBtn.onclick = () => owl.trigger('prev.owl');
        },
        methods: {
            pasteOpacity() {
/*
                console.log(event)
                let slider = document.getElementById(this.id);
                let active = slider.querySelectorAll('.owl-item.active');
                let count = active.length;
*/
                // slider.querySelector('.center');

/*
                active.forEach(item => {
                    if (item.classList.contains('center')) {
                        // console.log(item, count)
                        if (count > 3) {
                        }
                    }
                })
*/
            }
        }
    }
</script>