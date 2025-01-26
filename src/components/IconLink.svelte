<script lang="ts">
    export let platform: 'github' | 'gitee' | 'zhihu';
    export let href: string = '';
    export let color: string = 'inherit';

	import GithubIcon from '~icons/simple-icons/github';
    import GiteeIcon from '~icons/simple-icons/gitee';
    import ZhihuIcon from '~icons/simple-icons/zhihu';

    const Icons = {
        'github': GithubIcon,
        'gitee': GiteeIcon,
        'zhihu': ZhihuIcon,
    }
</script>

<a href={href} style="color: {color};">
    <svelte:component this={Icons[platform]} />
</a>
