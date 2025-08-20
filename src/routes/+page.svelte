<script lang="ts">

    import {GoogleBrands} from 'svelte-awesome-icons';
    import {XTwitterBrands} from 'svelte-awesome-icons';

    let Gsearchquery = '';
    let Xsearchquery = '';

    function Gsearch(event: SubmitEvent) {

        event.preventDefault();
        if(Gsearchquery.trim() !== ''){

            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(Gsearchquery)}`;

        }

    }
    function Xsearch(event: SubmitEvent) {

        event.preventDefault();
        if(Xsearchquery.trim() !== ''){

            window.location.href = `https://x.com/search?q=${encodeURIComponent(Xsearchquery)}&src=typed_query`;

        }

    }


    import { onMount } from 'svelte';

    let animationtitle = '';
    let title = ['検索してみよう！', '何かを探してみよう！', 'GetNow.', '気になることを調べよう！', 'Searching...'];

    const sleep= (time: number) => new Promise<void>((r) => setTimeout(r, time));

    async function animateTitle() {

        for(let i = 0; i < title.length; i++) {

            animationtitle = title[i];
            await sleep(3000); // 3秒待機

        }

    }

    onMount(() => {
        animateTitle();
    });

</script>

<main class="bg-gray-600 h-dvh flex flex-col justify-center">

    <h1 class="text-white text-4xl font-bold flex justify-center">{animationtitle}</h1>

    <div class="flex justify-center p-20 w-full">

        <GoogleBrands size="45" color="white" class="drop-shadow-md flex-col p-1.5"/>

        <form on:submit={Gsearch}>

            <input type='text' bind:value={Gsearchquery} placeholder="Googleで検索" class="search-input rounded-full w-144 border-2 drop-shadow-lg border-gray-300  focus:border-blue-500
            focus:ring-1 focus:ring-blue-500 hover:bg-gray-200 transition"/>

        </form>

    </div>

    <div class="flex justify-center w-full">

        <XTwitterBrands size="45" class="drop-shadow-md flex-col p-1.5" color="white"/>

        <form on:submit={Xsearch}>

            <input type='text' bind:value={Xsearchquery} placeholder="話題を検索" class="search-input rounded-full w-144 border-2 drop-shadow-lg border-gray-300  focus:border-gray-800
            focus:ring-1 focus:ring-gray-800 hover:bg-gray-200 transition"/>

        </form>

    </div>

</main>