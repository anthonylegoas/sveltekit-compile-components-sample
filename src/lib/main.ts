import Counter from './Counter.svelte';

const counter = new Counter({
    target: document.getElementById('svelte-counter'),
});

export default counter;