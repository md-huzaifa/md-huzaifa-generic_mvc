import axios from "axios";
import { useEffect, useState } from "react";
import { configs } from "@/configs";

export const useUserList = () => {
  const [userList, setUserList] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(`${configs.SERVER_URL}/users`);
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user list data:", error);
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchUserList();
  }, []);

  return { userList, loading, error };
};
