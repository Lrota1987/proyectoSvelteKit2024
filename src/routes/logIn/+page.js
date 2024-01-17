

export const load = async (serverLoadEvent) => {
    const { fetch } = serverLoadEvent;
    const response = await fetch(`http://localhost:4001/users`);
    const users = await response.json();
    return { users };
}