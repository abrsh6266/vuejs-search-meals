import axiosClient from "../axiosClient";

export const searchMeals = async ({ commit }, keyword) => {
  try {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    console.log(response.data);
    commit("setSearchedMeals", response.data.meals);
  } catch (error) {
    console.log(error);
  }
};
