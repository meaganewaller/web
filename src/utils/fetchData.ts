export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error when fetching data");
    }
    const res = await response.json();
    return res as T; // Ensure that the response is cast to the correct type
  } catch (error) {
    console.error("The error was:", error);
    return [] as T; // Return an empty array as a fallback value
  }
}
