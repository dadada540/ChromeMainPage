<script lang="ts">

    import {GoogleBrands} from 'svelte-awesome-icons';
    import {XTwitterBrands} from 'svelte-awesome-icons';
    import {AmazonBrands} from 'svelte-awesome-icons';

    import {slide} from "svelte/transition"
    import {fade} from "svelte/transition";

    let Gsearchquery = '';
    let Xsearchquery = '';
    let Asearchquery = '';

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
    function Asearch(event: SubmitEvent) {

        event.preventDefault();
        if(Asearchquery.trim() !== ''){

            window.location.href = `https://www.amazon.co.jp/s?k=${encodeURIComponent(Asearchquery)}`;

        }

    }


    import { onMount } from 'svelte';

    let title = ['検索してみよう！', '何かを探してみよう！', 'Know,Now.', '気になることを調べよう！', 'Searching...'];
    let animationtitle = title[0];

    const sleep= (time: number) => new Promise<void>((r) => setTimeout(r, time));

    async function animateTitle() {

        for(let i = 0; i < title.length; i++) {

            animationtitle = title[i];
            await sleep(4000); // 3秒待機

        }

    }

    onMount(() => {

        animateTitle();

        setInterval(() => {

            animateTitle();

        }, 20000); // 15秒ごとにタイトルをアニメーション

    });

    let show = false;
    onMount(() => { show = true; });

</script>

<main class="bg-gray-600 h-dvh flex flex-col justify-center p-10">

    <div class="bg-gray-500 backdrop-blur-md p-7 rounded-2xl">

        {#key animationtitle}
            <h1 class="text-white text-4xl font-bold flex justify-center animate-pulse pt-10">{animationtitle}</h1>
        {/key}

        {#if show}
        <div class="flex justify-center p-20 w-full" transition:fade="{{delay: 250}}">

            <GoogleBrands size="45" color="white" class="drop-shadow-md flex-col p-1.5"/>

            <form on:submit={Gsearch}>

                <input type='text' bind:value={Gsearchquery} placeholder="Googleで検索" class="search-input rounded-full w-144 border-2 drop-shadow-lg border-gray-300  focus:border-blue-500
                focus:ring-1 focus:ring-blue-500 hover:bg-gray-200 transition"/>

            </form>

        </div>
        {/if}

        {#if show}
        <div class="flex justify-center w-full" transition:fade="{{delay: 250}}">

            <XTwitterBrands size="45" class="drop-shadow-md flex-col p-1.5" color="white"/>

            <form on:submit={Xsearch}>

                <input type='text' bind:value={Xsearchquery} placeholder="話題を検索" class="search-input rounded-full w-144 border-2 drop-shadow-lg border-gray-300  focus:border-gray-800
                focus:ring-1 focus:ring-gray-800 hover:bg-gray-200 transition"/>

            </form>

        </div>
        {/if}

        {#if show}
        <div class="flex justify-center w-full p-20" transition:fade="{{delay: 250}}">

            <AmazonBrands size="45" class="drop-shadow-md flex-col p-1.5" color="white"/>

            <form on:submit={Asearch}>

                <input type='text' bind:value={Asearchquery} placeholder="Amazon.co.jpを検索" class="search-input rounded-full w-144 border-2 drop-shadow-lg border-gray-300  focus:border-yellow-300
                focus:ring-1 focus:ring-yellow-300 hover:bg-gray-200 transition"/>

            </form>

        </div>
        {/if}

    </div>

</main>