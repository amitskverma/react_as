const API_BASE_URL = 'http://localhost:3000'; 

const getPersons = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching persons:', error);
    return []; // Or handle the error appropriately
  }
};


const AddUser = async (userData) => {
  try {
      const response = await fetch(`${API_BASE_URL}/create`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });

      if (response.ok) {
          return await response.json(); // Return the created user
      } else {
          throw new Error(`Failed to add user: ${response.statusText}`);
      }
  } catch (error) {
      console.error('Error while adding user:', error);
      throw error;
  }
};


export { getPersons , AddUser };