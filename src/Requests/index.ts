import { BASE_URL } from "../config";
import { APIResponse } from "../interfaces";
const API_VERSION = "/api/v1";

// JOBS REQUESTS
/**
 * Fetches all jobs and their companies
 * @param {limit} number - The number of jobs to fetch
 * @param {skip} number - The number of jobs to skip
 * @returns {Promise} A promise that resolves with the jobs and their companies
 */
export const fetchJobs = async ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}): Promise<APIResponse> => {
  try {
    const response = await fetch(`${BASE_URL + API_VERSION}/jobs/featured`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ limit, skip }),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
/**
 * Fetches the featured jobs from the API
 * @returns {Promise} A promise that resolves with the featured jobs
 */
export const fetchFeaturedJobs = async (): Promise<APIResponse> => {
  try {
    const response = await fetch(`${BASE_URL + API_VERSION}/jobs/featured`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

// ENDOF JOBS REQUESTS

// COMPANIES REQUESTS
/**
 * Fetches the featured companies from the API
 * @params {number[]} ids - An array of company ids
 * @returns {Promise} A promise that resolves with the featured companies
 */
export const fetchFeaturedCompanies = async (
  ids: any
): Promise<APIResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL + API_VERSION}/companies/featured`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

// ENDOF COMPANIES REQUESTS
