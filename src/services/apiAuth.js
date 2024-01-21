import axiosClient from "../utils/axios";

/**
 * Logs in a user with the provided email and password.
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.email - The user's email.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<Object>} - A promise that resolves to the login response data.
 */
export async function login({ email, password }) {
  const { data } = await axiosClient.post("auth/login", {
    email,
    password,
  });

  return data;
}

export async function logout() {
  await axiosClient.post("auth/logout");
}

export async function getCurrentUser() {
  const { data = null } = (await axiosClient.get("auth/me")) ?? {};

  return data;
}
