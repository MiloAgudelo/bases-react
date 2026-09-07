import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import type { ReqResUserListResponse, User } from '../interfaces/reqres.interface';

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await reqResApi.get<ReqResUserListResponse>('/users', {
      params: { page },
    });
    return data.data;
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const currentPageRef = useRef<number>(1);

  useEffect(() => {
    loadUsers(currentPageRef.current).then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    setIsLoading(true);
    const newUsers = await loadUsers(currentPageRef.current);
    if (newUsers.length > 0) {
      setUsers(newUsers);
    } else {
      currentPageRef.current--;
    }
    setIsLoading(false);
  };

  const prevPage = async () => {
    if (currentPageRef.current <= 1) return;
    currentPageRef.current--;
    setIsLoading(true);
    const newUsers = await loadUsers(currentPageRef.current);
    setUsers(newUsers);
    setIsLoading(false);
  };

  return {
    users,
    isLoading,
    currentPage: currentPageRef.current,
    nextPage,
    prevPage,
  };
};
