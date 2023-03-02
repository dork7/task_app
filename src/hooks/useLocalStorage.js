export const useLocalStorage = () => {
  async function getStoredValue(key) {
    try {
      // Get from local storage by key
      const item = await window.localStorage.getItem(key);
      // Parse stored json or if none return null
      const value = item ? JSON.parse(item) : null;
      return value;
    } catch (error) {
      console.log(error);
    }
  }

  const storeValue = async (key, value) => {
    try {
      // Save to local storage
      await window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('errr', error);
    }
  };

  const removeValue = async (key) => {
    await storeValue(key, null);
  };

  return { getStoredValue, storeValue, removeValue };
};
//
// USAGE : const { getStoredValue, storeValue, removeValue } = useLocalStorage();
