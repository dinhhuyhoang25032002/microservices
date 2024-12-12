import { useAuthStore } from "~/store/auth/AuthStore";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
const fetcher = async (
  url: string,
  accessToken: string,
  options?: RequestInit
) => {
  try {
    const res = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const payload = await res.json();
    const data = {
      status: res.status,
      payload,
    };

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};


export const useFetchApi = (url: string, options?: RequestInit) => {
  const { user, setUser, setIsAuth } = useAuthStore();
  const router = useRouter();
  const fetchData = async () => {
    const { accessToken } = user;
    const baseUrl = process.env.NEXT_PUBLIC_ENDPOINT;
    const fullUrl = url.startsWith("/")
      ? `${baseUrl}${url}`
      : `${baseUrl}/${url}`;

    if (!accessToken) {
      // to do
      throw new Error('Access Token is not exist !')
    } else {
      const validateJwt = jwtDecode(accessToken);
      const expToken = validateJwt.exp as number;
      const timestampNow = new Date().getTime();

      if (expToken < timestampNow / 1000) {
        console.log('is running!');
        const refresh = await fetch(`${baseUrl}/auth/refresh-token`, {
          credentials: "include",
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }).then((res) => res.json());
        console.log('check refresh:', refresh);

        if (refresh.statusCode === 401 || refresh.message === "Unauthorized") {
          await fetch(`${baseUrl}/auth/logout`, {
            credentials: "include",
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            if (res.ok && res.status === 200) {
              const resetUser = {
                _id: "",
                fullname: "",
                role: "",
                email: "",
                address: "",
                dateOfBirth: "",
                accessToken: "",
                courses: [],
              };
              setIsAuth(false);
              setUser(resetUser);
              router.replace("/auth");
            }
          });
        }
        const newUser = {
          ...user,
          accessToken: refresh.accessToken,
        };
        setUser(newUser);
        const data = await fetcher(fullUrl, refresh.accessToken, options);
        return data;
      }
      const data = await fetcher(fullUrl, accessToken, options);
      return data;
    }
  };
  return fetchData;
};
