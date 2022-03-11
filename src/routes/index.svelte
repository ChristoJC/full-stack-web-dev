<script>
    import TodoItem from '$lib/todo-item.svelte'
    const title = "Todo";
</script>

<style>
    .todos{
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }

    .new{
        margin-bottom: 0.5rem;
    }

    .new input{
        
    }
</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    
    <h1>{title}</h1>
    
    <form action="" method="" class="new">
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add todo">
    </form>

    <TodoItem />
    <TodoItem />
    <TodoItem />
</div>
