import { BASE_URL } from "../Constants/ApiConstant";

export interface LoginResponse {
  data: {
    user_id: string;
    name: string;
    token: string;
    role: string;
  };
  message: string;
}

export async function loginRequest(email: string, password: string, role: string): Promise<LoginResponse> {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + role); // role add here
  myHeaders.append("Content-Type", "application/json");
 

  const raw = JSON.stringify({ email, password, role });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(`${BASE_URL}/dashboard/login`, requestOptions);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}
