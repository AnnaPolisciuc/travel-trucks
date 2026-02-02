import axios from 'axios';
import { Camper } from '@/types/camper';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async ({
  page = 1,
  limit = 8,
  location,
  form,
  equipment = [],
}: {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  equipment?: string[];
}) => {
  const params: Record<string, string | number | boolean> = {
    page,
    limit,
  };

  if (location) params.location = location;
  if (form) params.form = form;

  equipment.forEach((item) => {
    params[item] = true;
  });

  const response = await axios.get(`${API_URL}/campers`, { params });
  return response.data.items;
};

export const getCamperById = async (id: string) => {
  const response = await axios.get<Camper>(`${API_URL}/campers/${id}`);
  return response.data;
};
