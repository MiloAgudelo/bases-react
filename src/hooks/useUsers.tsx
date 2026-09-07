import { useEffect, useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    let isMounted = true;

    loadUsers(currentPage).then((loadedUsers) => {
      if (isMounted) {
        setUsers(loadedUsers);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  const nextPage = () => {
    setIsLoading(true);
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setIsLoading(true);
    setCurrentPage((prev) => prev - 1);
  };

  return {
    users,
    isLoading,
    currentPage,
    nextPage,
    prevPage,
  };
};
