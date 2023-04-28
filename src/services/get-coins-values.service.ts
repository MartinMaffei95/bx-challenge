export const getCoins = async () => {
  try {
    const res = await fetch(
      'http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=30'
    );
    const data = await res.json();
    console.log(data);
    // const adaptedData = adaptCoins(data);
    // return adaptedData;
  } catch (e) {
    throw new Error('Error fetching');
  }
};
