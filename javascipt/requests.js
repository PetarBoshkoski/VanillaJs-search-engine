export const request = async (api) => {
    const response = await fetch(api);
    const json = await response.json();
    return json;
}