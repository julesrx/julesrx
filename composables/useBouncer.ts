import Bouncer from 'bouncing-element';

const emojis = ['🐧', '🌱', '👨‍💻', '🎮', '🍝', '🌈', '📀', '🎬', '🏍', '🐸', '🚀'];

export default () => {
    const preferredMotion = usePreferredReducedMotion();
    watchOnce(
        preferredMotion,
        preferredMotion => {
            if (preferredMotion === 'reduce') return;

            onMounted(() => {
                const els: HTMLElement[] = [];

                els.push(
                    ...Array(3)
                        .fill(emojis)
                        .flat()
                        .map(e => {
                            const i = document.createElement('span');
                            i.className = 'bounce';
                            i.innerHTML = e;
                            return i;
                        })
                );

                els.push(
                    ...Array(3)
                        .fill('/favicon.ico')
                        .map(e => {
                            const i = document.createElement('img');
                            i.className = 'bounce';
                            i.src = e;
                            return i;
                        })
                );

                document.body.append(...els);

                // eslint-disable-next-line no-new
                new Bouncer();
            });

            onUnmounted(() => {
                for (const el of document.getElementsByClassName('bounce')) {
                    el.remove();
                }
            });
        },
        { immediate: true }
    );
};
