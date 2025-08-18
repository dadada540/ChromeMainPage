<script lang="ts">

    import {Google} from 'svelte-supertiny';

    let searchquery = '';

    function search(event: SubmitEvent) {

        event.preventDefault();
        if(searchquery.trim() !== ''){

            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchquery)}`;

        }

    }

</script>

<main>

    <div class="flex justify-center p-40 w-full h-dvh bg-gray-600">

        <Google size="45"/>

        <form on:submit={search}>

            <input type='text' bind:value={searchquery} placeholder="ここに入力して検索" class="search-input rounded-full w-144 border-2 border-gray-300  focus:border-blue-500
            focus:ring-1 focus:ring-blue-500 hover:bg-gray-200 transition"/>

        </form>

    </div>

</main>