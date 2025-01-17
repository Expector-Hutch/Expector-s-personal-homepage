<script lang="ts">
    export let platform: 'github' | 'gitee' | 'zhihu';
    export let href: string = '';

	import GithubIcon from '~icons/simple-icons/github';
    import GiteeIcon from '~icons/simple-icons/gitee';
    import ZhihuIcon from '~icons/simple-icons/zhihu';

    const Icons = {
        'github': GithubIcon,
        'gitee': GiteeIcon,
        'zhihu': ZhihuIcon,
    }
</script>

<a href={href}>
    <svelte:component this={Icons[platform]} />
</a>
