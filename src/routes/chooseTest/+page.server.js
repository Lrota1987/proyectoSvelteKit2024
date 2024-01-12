export const load = async (serverLoadEvent) => {
    const { fetch } = serverLoadEvent;
    const response = await fetch('http://localhost:4000/test');
    const choosetest = await response.json();
    return { choosetest };
}