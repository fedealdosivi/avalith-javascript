<template>
    <div>
        <div v-if="isMenuOpen">
            <div class="lang-info-toggle">
                <div class="container-lang">
                    <img class="img-lang" :src="lang.cardPost.postImageUrl">
                    <div class="top-left-lang" @click="close">
                        <div class="top-left-lang-text">Go Back</div>
                    </div>
                    <div class="centered-lang">{{lang.cardPost.postTitle}}</div>
                </div>
                <div class="lang-container">
                    <div class="lang-text-container">
                        {{lang.cardPost.postDescription}}
                    </div>
                    <div class="chart">
                        <chart-doug :cardData="dataset" :options="myoption"></chart-doug>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="lang-info-menu">
                <div class="container-lang">
                    <img class="img-lang" :src="lang.cardPost.postImageUrl">
                    <div class="top-left-lang" @click="close">Go Back</div>
                    <div class="centered-lang">{{lang.cardPost.postTitle}}</div>
                </div>
                <div class="lang-container">
                    <div class="lang-text-container">
                        {{lang.cardPost.postDescription}}
                    </div>
                    <div class="chart">
                        <chart-doug :cardData="dataset" :options="myoption"></chart-doug>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import chartDoug from '../chart-component/chart-doug.vue';
    export default {
        name: 'langInfo',
        props: ['language','isMenuOpen','closeCard'],
            components: {
                chartDoug
            },
            data() {
                return{
                    lang:'',
                    myoption:{
                        responsive:true,
                        maintainAspectRatio:true,
                        title: {
                            display: true,
                            position: 'top',
                            text: ''
                        }
                    },

                    dataset:{
                      labels: '',
                      datasets: [
                        {
                          backgroundColor: [
                            '#e4517f',
                            '#5193e4',
                            '#f4dc42'
                          ],
                          data:[65,15,20]
                        }
                      ]
                    }
                }
            },

            created(){
                this.lang=this.language;
                this.dataset.labels='';
                this.dataset.datasets[0].data=this.lang.cardGraph.data;
                this.myoption.title.text=this.lang.cardPost.postTitle + ' development';

            },

            methods: {

                close(){
                    this.closeCard();
                }
            }
    }
</script>

<style type="text/css" src="./languageInfo.css"></style>