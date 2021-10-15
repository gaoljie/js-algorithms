let time = 0;
const getData = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            time++;
            if (time === 10) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 3000);
    });

function a() {
    const poll = async () => {
        const result = await getData();
        if (result) {
            return "yes";
        } else return poll();
    };

    return poll();
}

a().then((res) => {
    console.log(res);
});
