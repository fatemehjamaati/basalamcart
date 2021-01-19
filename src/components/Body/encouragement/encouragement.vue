<template>
  <div class=" Encouragement">
            <p class="text-of-Encouragement">{{encouragement.encouragement1}}
                <span class="text-of-Encouragement2">{{encouragement.encouragement2}}</span>
            </p>
        </div>
</template>

<script>
export default {
    props:['encouragement']

}
</script>

<style src="@/components/Body/encouragement/encouragement.css">

</style>