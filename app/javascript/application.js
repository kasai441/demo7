// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import "core-js/stable";
import "regenerator-runtime/runtime";

import { createApp } from 'vue';
import Hello from './hello.vue';

console.log("lehoo wordl")

document.addEventListener('DOMContentLoaded', () => {
    createApp(Hello).mount('#app');
});
